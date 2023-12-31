import { useState } from "react";

// Miscellaneous
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

// Components
import CustomButton from "../../components/CustomButton";
import CardLong from "../../components/CardLong";

// React query
import { useQuery, useMutation } from "react-query";

// Api
import { getAllUsers, deleteUser } from "../../api/routes/Users";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const { data } = useQuery(["usersData"], () => getAllUsers());
  const [selectedUser, setSelectedUser] = useState(null);
  const [list, setList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setInputData(searchTerm);

    const filtered = data.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setShowList(true);

    const isEmailNotFound = !filtered.some((user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEmailNotFound(isEmailNotFound);
  };

  const handleAddList = (newData) => {
    const isDuplicate = list.some((item) => item.email === newData.email);
    if (isDuplicate) {
      toast.error(`${newData.email} is already in the list`);
    } else {
      setList([...list, newData]);
      toast.success(`${newData.email} has been added to the list`);
    }
  };

  const removeUser = useMutation((userId) => deleteUser(userId), {
    onSuccess: (res, userId) => {
      const userExists = list.some((user) => user.id === userId);
      if (userExists) {
        setList((prevList) => prevList.filter((user) => user.id !== userId));
        toast.success(`${selectedUser.email} has been removed from the list`);
      } else {
        toast.error(
          `User with email ${selectedUser.email} does not exist in the list`
        );
      }
    },
  });

  return (
    <section className="pl-[21vw] pt-longer pb-shorter3 pr-shorter space-y-10 min-h-screen">
      <h1 className="text-primary text-2xl">Команда организации</h1>
      <p className="text-primary text-base">
        Владельцы команд могут добавлять участников в команду своей организации,
        добавляя их адреса электронной почты.
        <br /> У них должна быть учетная запись на сайте.
      </p>
      <form className="grid gap-1">
        <label className="ml-1 text-secondary">Введите e-mail участника</label>
        <div className="flex justify-between items-center">
          <div className="flex flex-col relative w-[77%]">
            <input
              type="email"
              placeholder="Search by email"
              className={`border-2 border-custom-gray-2 w-full bg-white p-3 rounded-lg outline-none ${
                emailNotFound && "border-red-500"
              }`}
              value={inputData}
              onChange={handleChange}
            />
            {emailNotFound && (
              <p className="text-sm text-red-500 mt-1 ml-1 absolute -bottom-6">
                *Email not found
              </p>
            )}
            {inputData && filteredUsers.length > 0 && showList && (
              <ul className="absolute z-10 bg-white top-14 divide-y divide-custom-gray-2">
                {filteredUsers.map((user, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-3 pr-20 hover:bg-custom-gray hover:cursor-pointer"
                    onClick={() => {
                      setInputData(user.email);
                      setSelectedUser(user);
                      setShowList(false);
                    }}
                  >
                    <p className="text-primary text-lg">{user.name}</p>
                    <p className="text-secondary text-sm">{user.email}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className={`flex justify-center items-center gap-2 p-3 border-2 rounded-lg w-[20%] animate ${
              selectedUser && inputData
                ? "bg-custom-light-blue text-white border-custom-light-blue"
                : "bg-custom-gray cursor-not-allowed"
            }`}
            onClick={() => {
              if (inputData) {
                handleAddList(selectedUser);
              }
            }}
            disabled={selectedUser ? false : true}
          >
            <Icon icon="fluent:add-24-regular" fontSize={25} />
            Добавить участника
          </button>
        </div>
      </form>
      <section className="grid grid-cols-3 gap-x-12 gap-y-6">
        {data?.map((user, index) => (
          <CardLong
            key={index}
            role="Организатор"
            name={user?.name}
            street={user?.address?.street}
            city={user?.address?.city}
            onClick={() => {
              setInputData(user?.email);
              setSelectedUser(user);
            }}
            onClickDelete={() => {
              removeUser.mutate(user?.id);
              setSelectedUser(user);
            }}
          />
        ))}
      </section>
      <section className="pt-10">
        <CustomButton
          label="Сохранить"
          className="bg-custom-light-blue text-white py-3 px-28"
          onClick={() => {
            if (list.length > 0) {
              console.log("Saved List -->", list);
              toast.success(
                "Check your browser's console to check the list 🙂"
              );
            } else {
              toast.error("Select and Add some users to the check your list");
            }
          }}
        />
      </section>
    </section>
  );
}

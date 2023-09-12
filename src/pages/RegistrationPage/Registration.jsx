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
import { useEffect } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const { data } = useQuery(["usersData"], () => getAllUsers());
  const [selectedUser, setSelectedUser] = useState(null);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInputData(e.target.value);
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

  useEffect(() => {
    console.log(">>>", list);
  }, [list]);

  return (
    <section className="pl-[21vw] pt-longer pb-shorter3 pr-shorter space-y-10 min-h-screen">
      <h1 className="text-primary text-2xl">Команда организации</h1>
      <p className="text-primary text-base">
        Владельцы команд могут добавлять участников в команду своей организации,
        добавляя их адреса электронной почты.
        <br /> У них должна быть учетная запись на сайте.
      </p>
      <form className="grid gap-1">
        <label className="text-secondary">Введите e-mail участника</label>
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="border-2 border-custom-gray-2 w-[77%] bg-white p-3 rounded-lg outline-none"
            value={inputData}
            onChange={handleChange}
          />
          <button
            type="button"
            className={`flex justify-center items-center gap-2 p-3 border-2 rounded-lg w-[20%] animate ${
              selectedUser
                ? "bg-custom-light-blue text-white border-custom-light-blue"
                : "bg-custom-gray cursor-not-allowed"
            }`}
            onClick={() => {
              handleAddList(selectedUser);
            }}
            disabled={selectedUser ? false : true}
          >
            <Icon icon="fluent:add-24-regular" fontSize={25} />
            Добавить участника
          </button>
        </div>
      </form>
      <section className="grid grid-cols-3 gap-12">
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
            console.log("Saved List -->", list);
            toast.success("Check your browser's console to check the list 🙂");
          }}
        />
      </section>
    </section>
  );
}

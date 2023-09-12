import { useState } from "react";

// Miscellaneous
import { Icon } from "@iconify/react";

// Components
import CustomButton from "../../components/CustomButton";
import CardLong from "../../components/CardLong";

// React query
import { useQueryClient, useQuery, useMutation } from "react-query";

// Api
import { getAllUsers, postUser, deleteUser } from "../../api/routes/Users";
import { useEffect } from "react";

export default function Home() {
  const queryClient = useQueryClient();
  const [users, setUsers] = useState([]);

  const { isLoading, error, data } = useQuery(["usersData"], () =>
    getAllUsers()
  );

  const [inputData, setInputData] = useState("");

  const removeUser = useMutation((userId) => deleteUser(userId), {
    onSuccess: (res, userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    },
  });

  useEffect(() => {
    setUsers(data);
  }, [data]);

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
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button
            type="button"
            className="bg-custom-light-blue text-white flex justify-center items-center gap-2 p-3 border-2 border-custom-light-blue rounded-lg w-[20%]"
            onClick={() => {
              // console.log("EMAIL>>", data?.email);
            }}
          >
            <Icon icon="fluent:add-24-regular" fontSize={25} />
            Добавить участника
          </button>
        </div>
      </form>
      <section className="grid grid-cols-3 gap-12">
        {users?.map((user, index) => (
          <CardLong
            key={index}
            role="Организатор"
            name={user?.name}
            street={user?.address?.street}
            city={user?.address?.city}
            onClick={() => {
              setInputData(user?.email);
            }}
            onClickDelete={() => {
              removeUser.mutate(user?.id);
            }}
          />
        ))}
      </section>
      <section className="pt-10">
        <CustomButton
          label="Сохранить"
          className="bg-custom-light-blue text-white py-3 px-28"
        />
      </section>
    </section>
  );
}

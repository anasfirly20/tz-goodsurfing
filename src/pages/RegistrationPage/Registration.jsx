// Miscellaneous
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <section className="pl-[21vw] pt-longer pr-shorter space-y-10">
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
          />
          <button
            type="button"
            className="bg-custom-light-blue text-white flex justify-center items-center gap-2 p-3 border-2 border-custom-light-blue rounded-lg w-[20%]"
          >
            <Icon icon="fluent:add-24-regular" fontSize={25} />
            Добавить участника
          </button>
        </div>
      </form>
    </section>
  );
}
// Miscellaneous
import { Icon } from "@iconify/react";

// Constants
import { sidenav_items } from "../../constants/constants";

export default function Sidebar() {
  return (
    <nav className="bg-white fixed left-0 h-full w-[320px] drop-shadow-[3px_3px_8px_#00000008] pt-normal">
      <button
        type="button"
        className="absolute -right-2 border border-custom-gray-2 rounded-lg p-1"
      >
        <Icon
          icon="ph:arrow-left-light"
          fontSize={23}
          className="text-custom-gray-2"
        />
      </button>
      <section className="flex flex-col justify-center items-center mt-shorter2">
        <section className="flex flex-col gap-5">
          {sidenav_items.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-5 text-custom-gray-2"
            >
              <Icon icon={item.icon} fontSize={40} />
              <p className="">{item.label}</p>
            </button>
          ))}
        </section>
        <div className=""></div>
      </section>
    </nav>
  );
}

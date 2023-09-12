// Miscellaneous
import { Icon } from "@iconify/react";

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
    </nav>
  );
}

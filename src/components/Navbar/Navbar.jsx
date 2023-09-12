// Assets
import logo from "../../assets/logo.png";

// Miscellaneous
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-shorter2 py-shorter4 border-b border-custom-gray">
      <figure>
        <img src={logo} alt="Brand's logo" />
      </figure>
      <section className="flex items-center gap-14">
        <div className="flex gap-5">
          <Icon
            icon="ic:baseline-favorite"
            fontSize={25}
            className="text-custom-gray"
          />
          <Icon icon="uiw:mail" fontSize={25} className="text-custom-gray" />
        </div>
        <div className="flex items-center gap-3">
          <p className="">Владислав</p>
          <div className="bg-custom-gray rounded-full overflow-hidden w-10 h-10 flex justify-center items-center">
            <Icon icon="mdi:user" fontSize={35} className="text-black" />
          </div>
          <button type="button">
            <Icon
              icon="ep:arrow-down-bold"
              fontSize={20}
              className="text-black"
            />
          </button>
        </div>
      </section>
    </nav>
  );
}

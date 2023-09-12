import { Icon } from "@iconify/react";
import portrait2 from "../assets/portrait2.jpg";

export default function CardLong({
  role,
  name,
  street,
  city,
  onClick,
  onClickDelete,
}) {
  return (
    <section
      className="flex items-center gap-6 border border-custom-gray hover:border-custom-gray-2 animate rounded-sm bg-white p-4 relative group hover:cursor-pointer"
      onClick={onClick}
    >
      <button
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 animate"
        onClick={onClickDelete}
      >
        <Icon
          icon="iconamoon:close-light"
          fontSize={30}
          className="text-custom-gray-2"
        />
      </button>
      <figure className="w-[60px] h-[60px] rounded-full overflow-hidden">
        <img src={portrait2} alt="Profile picture" />
      </figure>
      <section className="grid">
        <p className="text-secondary text-sm">{role}</p>
        <h3 className="text-primary">{name}</h3>
        <p className="text-secondary text-sm">
          {street}, {city}
        </p>
      </section>
    </section>
  );
}

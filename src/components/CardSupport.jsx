// Assets
import portrait2 from "../assets/portrait2.jpg";

export default function CardSupport() {
  return (
    <section className="border border-custom-gray-2 rounded-lg w-[246px] h-[264px] flex justify-center px-4 py-6">
      <div className="flex flex-col items-center gap-2">
        <figure className="w-[65px] h-[65px] rounded-full overflow-hidden">
          <img src={portrait2} alt="" />
        </figure>
        <h3 className="text-xl text-custom-gray-2">Кристина</h3>
        <p className="text-sm text-custom-gray-2 text-center">
          Ваш персональный помощник по работе с системой
        </p>
      </div>
    </section>
  );
}

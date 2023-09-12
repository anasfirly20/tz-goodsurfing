// Assets
import portrait2 from "../assets/portrait2.jpg";

// Components
import CustomButton from "./CustomButton";

export default function CardSupport() {
  return (
    <section className="border border-custom-gray-2 rounded-lg w-[85%] flex justify-center p-4">
      <div className="flex flex-col items-center gap-2">
        <figure className="w-[65px] h-[65px] rounded-full overflow-hidden">
          <img src={portrait2} alt="" />
        </figure>
        <h3 className="text-xl text-custom-gray-2">Кристина</h3>
        <p className="text-sm text-custom-gray-2 text-center">
          Ваш персональный помощник по работе с системой
        </p>
        <CustomButton
          label="Написать"
          className="text-custom-light-blue border border-custom-light-blue w-full py-2"
        />
        <p className="text-sm text-custom-gray-2 text-center">
          E-mail: support@goodsurfing.org
        </p>
      </div>
    </section>
  );
}

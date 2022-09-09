import Image from "next/image";
import iphonePic from "../assets/images/iphone.png";
import pr from "../assets/images/pr.png";
import eeuu from "../assets/images/eeuu.png";
import arg from "../assets/images/arg.png";
import mex from "../assets/images/mex.png";
import uy from "../assets/images/uy.png";
import pan from "../assets/images/pan.png";
import col from "../assets/images/col.png";

export const Iphone = () => {
  return (
    <div className="bg-[#F3F4F6] overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">Paises Disponibles</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Actualmente nuestra plataforma esta operativa en Estados Unidos,
          Puerto Rico y Argentina.
        </p>
        <div className="flex py-3 pt-6 justify-start">
          <div className="flex mx-3">
            <Image src={pr} width={40} height={40} />
          </div>
          <div className=" flex mx-3">
            <Image src={arg} width={40} height={40} />
          </div>
          <div className=" flex mx-3">
            <Image src={eeuu} width={40} height={40} />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-blacksm:text-4xl">
          <span className="block">Proximamente</span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Nuestros planes de expansión en latinoamerica contemplan Colombia,
          Uruguay, Panama y Mexico.
        </p>
        <div className=" flex py-3 pt-6 justify-start">
          <div className="flex mx-3">
            <Image src={uy} width={40} height={40} />
          </div>
          <div className="flex mx-3">
            <Image src={pan} width={40} height={40} />
          </div>
          <div className="flex mx-3">
            <Image src={mex} width={40} height={40} />
          </div>
          <div className="flex mx-3">
            <Image src={col} width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={iphonePic} className="rounded-lg w-1/2" alt="Tree" />
        <div></div>
      </div>
    </div>
  );
};

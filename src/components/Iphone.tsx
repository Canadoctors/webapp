import Image from "next/image";
import iphonePic from "../../public/images/iconFlags/iphone.png";
import pr from "../../public/images/iconFlags/pr.png";
import arg from "../../public/images/iconFlags/arg.png";
import Link from "next/link";

export const Iphone = () => {
  return (
    <div className="bg-[#F3F4F6] overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block text-center md:text-left">
            Preguntas Frecuentes
          </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Actualmente nuestra plataforma está operativa en Estados Unidos,
          Puerto Rico y Argentina.
        </p>
        <div className="flex py-3 pt-6 justify-center md:justify-start">
          <Link href={`/faq/ar`}>
            <div className="flex mx-3 cursor-pointer">
              <Image src={arg} width={40} height={40} />
            </div>
          </Link>

          <Link href={`/faq/pr`}>
            <div className="flex mx-3 cursor-pointer">
              <Image src={pr} width={40} height={40} />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <Image src={iphonePic} className="rounded-lg w-1/2" alt="Tree" />
        <div></div>
      </div>
    </div>
  );
};

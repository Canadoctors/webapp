import Image from "next/image";
import iphonePic from "../../public/images/iconFlags/iphone.png";
import pr from "../../public/images/iconFlags/pr.png";
import arg from "../../public/images/iconFlags/arg.png";
import Link from "next/link";

export const Iphone = () => {
  return (
    <main className="bg-[#F3F4F6] overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl text-center md:text-left">
          Preguntas Frecuentes
        </h2>
        <p className="text-md mt-4 text-gray-400">
          Actualmente nuestra plataforma está operativa en Estados Unidos,
          Puerto Rico y Argentina.
        </p>
        <div className="flex py-6 justify-center md:justify-start gap-4">
          <Link href="/faq/ar">
            <Image src={arg} width={40} height={40} alt="Bandera de Argentina" />
          </Link>
          <Link href="/faq/pr">
            <Image src={pr} width={40} height={40} alt="Bandera de Puerto Rico" />
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={iphonePic}
          className="rounded-lg w-1/2"
          alt=""
          aria-hidden="true" // Decorativa
        />
      </div>
    </main>
  );
};

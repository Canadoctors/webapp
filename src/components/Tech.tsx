import Link from "next/link";
import Image from "next/image";
import ImageOne from "../assets/images/tech1.png";
import ImageTwo from "../assets/images/tech2.png";
import ImageThree from "../assets/images/tech3.png";

export const Tech = () => {
  return (
    <div className="bg-[#F3F4F6] relative lg:flex lg:items-center h-[100vh]">
      <div className="flex items-center gap-8 p-8">
        <div className="grid grid-cols-6 col-span-2 gap-2 items-center">
          <div className="overflow-hidden rounded-xl col-span-3 max-h-[30rem]">
            <Image
              className="h-full w-full object-cover "
              src={ImageOne}
              alt=""
            />
          </div>

          <div className="overflow-hidden rounded-xl col-span-3 max-h-[25rem]">
            <Image src={ImageTwo} className="object-center" />
          </div>

          <div className="overflow-hidden rounded-xl col-span-3 max-h-[20rem]">
            <Image src={ImageTwo} className="object-center" />
          </div>

          <div className="overflow-hidden rounded-xl col-span-3 max-h-[24rem]">
            <Image src={ImageOne} className="object-center" />
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">
            {" "}
            Tecnologia aplicada a la industria del cannabis medicinal
          </span>
        </h2>
        <p className="text-lg mt-4 text-gray-400">
          Canadoctor te conecta con medicos especialistas en endocannabinologia
          licenciados y matricuclados
        </p>
      </div>
    </div>
  );
};

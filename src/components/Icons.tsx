import Image from "next/image";


type IconsProps = {
  icon: any;
  title1: string;
  shortDesc: string;
}

export const Icons = ({
  icon,
  title1,
  shortDesc,
}: IconsProps) => {
  return (
    <div className="sm:flex flex-wrap justify-evenly items-center text-center gap-8">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
        <div className="text-black">
          <Image src={icon} width={150} height={150} />
          <div className="font-bold text-xl ml-6">
            {" "}
            <h1>{title1}</h1>
          </div>
          <div className="ml-6">
            <p>
              {shortDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";

type IconsProps = {
  iconUrl: any;
  title1: string;
  shortDesc: string;
};

export const Icons = ({ iconUrl, title1, shortDesc }: IconsProps) => {
  return (
    <div className="w-full p-8 text-center">
      <div className="text-black">
        <Image src={iconUrl} width={150} height={150} />
        <div className="font-bold text-xl ml-6">
          <h1>{title1}</h1>
        </div>
        <div className="ml-6">
          <p>{shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

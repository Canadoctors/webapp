import Image from "next/image";

type IconsProps = {
  iconUrl: any;
  title1: string;
  shortDesc: string;
};

export const Icons = ({ iconUrl, title1, shortDesc }: IconsProps) => {
  return (
    <div className="w-full p-8">
      <Image src={iconUrl} width={150} height={150} />
      <div className="font-bold">
        <h1>{title1}</h1>
      </div>
      <p>{shortDesc}</p>
    </div>
  );
};

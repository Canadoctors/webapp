import Image from "next/image";

type IconsProps = {
  iconUrl: any;
  title1: string;
  shortDesc: string;
  wImg:number;
  hImg:number;
};

export const Icons = ({ iconUrl, title1, shortDesc, wImg, hImg }: IconsProps) => {
  return (
    <div className="w-full p-8">
      <div>
        <Image src={iconUrl} width={wImg} height={hImg} className="stroke-white" />
        <div className="font-bold ml-6">
          <h1>{title1}</h1>
        </div>
        <div className="ml-6">
          <p>{shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

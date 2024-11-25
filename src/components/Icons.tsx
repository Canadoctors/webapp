import Image, { StaticImageData } from "next/image";

type IconsProps = {
  iconUrl: string | StaticImageData; // Para URL dinámica o imágenes importadas
  title1: string;
  shortDesc: string;
};

export const Icons = ({ iconUrl, title1, shortDesc }: IconsProps) => {
  return (
    <div className="w-full p-8 text-center">
      <Image src={iconUrl} width={150} height={150} alt={title1} />
      <div className="font-bold">
        <h2 className="text-lg">{title1}</h2>
      </div>
      <p className="text-sm text-gray-600">{shortDesc}</p>
    </div>
  );
};

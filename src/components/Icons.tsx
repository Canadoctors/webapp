import Image from "next/image";
import React, { useState, useEffect } from "react";

type IconsProps = {
  iconUrl: any;
  title1: string;
  shortDesc: string;
  wImg:number;
  hImg:number;
};


export const Icons = ({ iconUrl, title1, shortDesc, wImg, hImg }: IconsProps) => {
  
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const wImgs = windowWidth < 640 ? windowWidth / 4 : wImg;
  const hImgs = windowWidth < 640 ? windowWidth / 4 : hImg;

  return (
    <div className="w-full p-8">
      <div>
        <Image src={iconUrl} width={wImgs} height={hImgs} className="stroke-white" />
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






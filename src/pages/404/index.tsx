import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../assets/images/icon404/404.png";

function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
      <Image src={Logo} alt="404" />
    </div>
  );
}

export default NotFound;

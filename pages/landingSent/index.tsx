import React from "react";
import Image from "next/image";

import canadoctorsLogo from "../../assets/images/logo.png";
import iconEmail from "../../assets/images/email.png";

function index() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-gradient-to-b from-[#00A099] h-full">
      <div className="max-w-xl px-5 text-center">
        <div className="mb-6">
          <Image src={canadoctorsLogo} height={80} width={350} alt="" />
        </div>
        <div>
          <Image src={iconEmail} height={200} width={200} alt="" />
        </div>
        <h2 className="mt-8 text-[30px] font-semibold text-[#5A5A5A]">
          Gracias, nos pondremos en contacto contigo a la brevedad.
        </h2>
      </div>
    </div>
  );
}

export default index;

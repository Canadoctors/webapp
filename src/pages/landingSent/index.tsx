import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "../../../public/images/logosCD/logopositivo.svg";
import iconEmail from "../../../public/images/iconCards/email.png";

function LandingSent() {
  const { query } = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 h-full">
      <div className="max-w-xl px-5 text-center">
        <div className="mb-6">
          <Image src={Logo} height={80} width={350} alt="" />
        </div>
        <div>
          <Image src={iconEmail} height={159} width={150} alt="" />
        </div>
        <h2 className="mt-8 text-[30px] font-semibold text-[#5A5A5A]">
          Gracias <span className="capitalize">{query.name}</span>, nos
          pondremos en contacto contigo a la brevedad.
        </h2>
      </div>
    </div>
  );
}

export default LandingSent;

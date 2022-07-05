import Image from "next/image";
import Link from "next/link";
import React from "react";
import canadoctorsLogo from "../assets/images/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const style = {
  wrapper: `absolute w-screen px-[1.2rem] py-[0.8rem] flex justify-between `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  headerItems: ` flex float-right items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image
            alt="cannadoctors"
            src={canadoctorsLogo}
            height={60}
            width={280}
          />
        </div>
      </Link>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../public/images/logosCD/logocanadoctorwhite.svg";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#8CBB93]/90 to-[#00A099]/90 bg-opacity-40 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <hr className="my-4" />
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="object-center">
              <Link href="/">
                <a>
                  <Image width={400} height={80} src={footerLogo} />
                </a>
              </Link>
            </div>
            <div className="mt-6 lg:mb-0 mb-6">
              <Link href="https://www.instagram.com/canadoctors/">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <div className="w-full flex justify-center items-center">
                    <FaInstagram className="text-2xl text-[#00A099]" />
                  </div>
                </button>
              </Link>

              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <div className="w-full flex justify-center items-center">
                  <FaFacebookF className="text-2xl text-[#00A099]" />
                </div>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <div className="w-full flex justify-center items-center">
                  <FaTwitter className="text-2xl text-[#00A099]" />
                </div>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-slate-50 text-md font-semibold mb-2">
                  Enlaces Utiles
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/">
                      <a className="text-slate-100 hover:text-opacity-75 font-semibold block pb-2 text-sm">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#Contact">
                      <a className="text-slate-100 hover:text-opacity-75 font-semibold block pb-2 text-sm">
                        Contacto
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://app.canadoctors.com/signup">
                      <a className="text-slate-100 hover:text-opacity-75 font-semibold block pb-2 text-sm">
                        Registrate
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-slate-50 text-md font-semibold mb-2">
                  Otros Enlaces
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="https://app.canadoctors.com/">
                      <a className="text-slate-100 hover:text-opacity-75 font-semibold block pb-2 text-sm">
                        Ingresar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <a className="text-slate-100 hover:text-opacity-75 font-semibold block pb-2 text-sm">
                        Terminos y condiciones
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">2022</span>
              <span> Canadoctors</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

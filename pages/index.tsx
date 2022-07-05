import Link from "next/link";
import Image from "next/image";

import Background from "../assets/images/backgroundDoctors.jpg";
import Logo from "../assets/images/LOGO.svg";

function Home() {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <Image
        className="absolute h-screen inset-0 object-cover"
        src={Background}
        alt=""
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-4xl text-center">
            <Image width={"400px"} src={Logo} alt="" />
            <h2 className="text-lg font-bold text-white sm:text-4xl md:text-3xl lg:text-4xl pt-2 pb-2">
              <span className="block">
                Canadoctors es la primer plataforma que conecta
              </span>
              <span className="block p-4">
                medicos y pacientes de cannabis medicinal.
              </span>
            </h2>
            <div className="mt-10 flex flex-col sm:-mx-2 sm:flex-row sm:justify-center">
              <Link href="/doctorForm">
                <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mr-4 mb-4 hover:opacity-90">
                  Participar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

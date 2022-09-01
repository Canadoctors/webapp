import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Background from "../assets/images/background2.jpg";
import Logo from "../assets/images/canadoctorLogoHite.svg";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cannadoctors</title>
        <meta
          name="description"
          content="Cannadoctors conectando medicos con pacientes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-[100vh] overflow-hidden relative flex">
        <Image
          className="absolute h-screen inset-0 object-cover"
          src={Background}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/70 bg-opacity-40">
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
                <Link href="/signin">
                  <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-10 py-2.5 text-center mr-4 mb-4 hover:opacity-90">
                    Iniciar Sesión
                  </button>
                </Link>
                <Link href="/patients">
                  <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-10 py-2.5 text-center mr-4 mb-4 hover:opacity-90">
                    Registrarte
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

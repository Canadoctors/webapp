import Link from "next/link";
import Image from "next/image";
import background from "../assets/images/backgroundDoctors.jpg";
import Logo from "../assets/images/logocanadoctorwhite.svg";

export const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden relative flex">
        <Image
          className="absolute h-screen inset-0 object-cover"
          src={background}
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-4xl text-center">
              <Image width={"400px"} src={Logo} alt="" />
              <h2 className="text-lg font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl pt-2 pb-2">
                <span className="block">
                  Canadoctors es la primer plataforma que conecta medicos y
                  pacientes de cannabis medicinal.
                </span>
              </h2>
              <div className="mt-10 flex flex-col sm:-mx-2 sm:flex-row sm:justify-center sm:space-x-4">
                <Link href="https://app.canadoctors.com/signup">
                  <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                    Registrate
                  </button>
                </Link>

                <Link href="https://app.canadoctors.com/">
                  <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                    Iniciar Sesion
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

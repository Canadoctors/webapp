import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import canadoctorsLogo from "../../assets/images/logo.png";
import imagePatient from "../../assets/images/patientDoctor.jpg";

type Inputs = {
  user: string;
  password: string;
};

const Signin: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-xl px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="cursor-pointer">
                <Link href="/">
                  <a>
                    <Image
                      src={canadoctorsLogo}
                      height={60}
                      width={280}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Usuario
                  </label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Ingrese su usuario"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600">Contraseña</label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-[#00A099] hover:text-[#00A099] hover:underline"
                    >
                      Olvidaste tu Contraseña
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#00A099] rounded-xl hover:opacity-80 focus:outline-none focus:bg-[#00A099]focus:ring focus:ring-[#00A099] focus:ring-opacity-50">
                    Iniciar Sesión
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                ¿Todavia no tenes tu usuario?{" "}
                <Link href="/patients">
                  <a className="text-[#00A099] focus:outline-none focus:underline hover:underline">
                    Registrate
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-1/2">
          <div className="bg-gradient-to-b from-[#00A099] flex flex-col h-full">
            <div className="basis-1/2 flex">
              <div className="m-auto text-center">
                <h2 className="text-lg text-white sm:text-4xl md:text-3xl lg:text-4xl pt-2 pb-2">
                  <span className="block">
                    Ingresa tus datos para registrar tu usuario
                  </span>
                  <span className="block p-4">en canadoctors</span>
                </h2>
              </div>
            </div>
            <div className="basis-1/2 relative">
              <Image
                src={imagePatient}
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                alt="Patient"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

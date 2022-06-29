import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import canadoctorsLogo from "../../assets/images/logo.png";
import imagePatient from "../../assets/images/patientDoctor.jpg";

type Inputs = {
  name: string;
  lastName: string;
  date: number;
  phone: number;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Patient: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="flex justify-center h-screen">
      <div className="flex items-center w-full max-w-xl px-6 mx-auto my-auto lg:w-2/6">
        <div className="flex-1">
          <div className="text-center">
            <div className="cursor-pointer">
              <Link href="/">
                <a>
                  <Image src={canadoctorsLogo} height={60} width={280} alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  autoComplete="none"
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("name")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="lastName"
                >
                  Apellido
                </label>
                <input
                  autoComplete="none"
                  type="text"
                  id="lastName"
                  placeholder="Apellido"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("lastName")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="date"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="date"
                  required={true}
                  className="block w-full text-gray-600 px-4 py-2 mt-2 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("date")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="phone"
                >
                  Teléfono
                </label>
                <input
                  autoComplete="none"
                  type="number"
                  id="phone"
                  placeholder="Teléfono"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("phone")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("email")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("password")}
                />
              </div>

              <div className="mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="passwordConfirm"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="Confirmar Contraseña"
                  required={true}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("passwordConfirm")}
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#00A099] rounded-xl hover:opacity-80 focus:outline-none focus:bg-[#00A099]focus:ring focus:ring-[#00A099] focus:ring-opacity-50">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden bg-cover lg:block lg:w-1/2">
        <div className="bg-gradient-to-b from-[#00A099] flex flex-col h-full ">
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
              layout="fill"
              objectFit="cover"
              alt="Patient"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;

import Image from "next/image";
import Link from "next/link";
import { saveNewDoctorAr } from "../../../application/api";

import canadoctorsLogo from "../../../assets/images/logosCD/logopositivo.svg";
import imagePatient from "../../../assets/images/bg/doctor1.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import Router from "next/router";
import { Home } from "../../../components/Home";
import { Icons } from "../../../components/Icons";

import background from "../../../assets/images/bg/background.jpg";
import icon1 from "../../../assets/images/iconCards/icon.svg";
import iconLaw from "../../../assets/images/iconCards/iconlaw.svg";

interface Inputs {
  name: string;
  lastName: string;
  phone: number;
  speciality: string;
  email: string;
  description: string;
  license: boolean;
  licenseNumber: string;
}

const NANE_DOCTOR = /^\S[a-zA-ZÀ-ÿ\s]+$/;
const EMAIL_DOCTOR = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_DOCTOR = /^[0-9]+$/;

const DoctorFormAr = () => {
  const styles = `block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    saveNewDoctorAr(data);
    Router.push({
      pathname: "/landingSent",
      query: { name: data.name },
    });
  };

  const IconsContent = [
    {
      id: 1,
      iconUrl: icon1,
      title1: "Profesionales",
      shortDesc:
        "Conecte con medicos especialistas en tratamientos de diversas patologías mediante cannabis medicinal",
      w: 100,
      h: 100,
    },
    {
      id: 3,
      iconUrl: iconLaw,
      title1: "Cumplimiento",
      shortDesc:
        "Nuestra plataforma cuenta con un proceso en cumplimiento con los estandares de seguridad internacional",
      w: 100,
      h: 100,
    },
  ];

  return (
    <>
      <Home
        imgSrc={background}
        textIntro={
          "Canadoctors es la primer plataforma que conecta médicos y pacientes de cannabis medicinal."
        }
        button1Url={"#formAr"}
        button2Url={""}
        button1Title={"Participar"}
        button2Title={""}
      />

      <div id="formAr" className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-2xl px-4 pt-4 pb-4 mx-auto my-auto lg:w-2/6">
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
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="md:flex justify-between gap-2">
                  <div className="sm:w-full">
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
                      maxLength={25}
                      className={`${styles}
                  ${errors.name &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                        }`}
                      {...register("name", {
                        required: {
                          value: true,
                          message: "El campo Nombre es requerido.",
                        },
                        maxLength: 25,
                        pattern: {
                          value: NANE_DOCTOR,
                          message: "El Nombre no es válido.",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:w-full md:mt-0 sm:mt-6 mt-6">
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
                      maxLength={20}
                      className={`${styles}                  
                  ${errors.lastName &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                        }`}
                      {...register("lastName", {
                        required: {
                          value: true,
                          message: "El campo Apellido es requerido.",
                        },
                        maxLength: 20,
                        pattern: {
                          value: NANE_DOCTOR,
                          message: "El Apellido no es válido.",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="md:flex justify-between gap-2">
                  <div className="mt-6 sm:w-full">
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
                      maxLength={40}
                      className={`${styles}                 
                   ${errors.email
                          ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                          : "border-gray-200"
                        }`}
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El campo Email es requerido.",
                        },
                        maxLength: 40,
                        pattern: {
                          value: EMAIL_DOCTOR,
                          message: "El Email no es válido.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 sm:w-full">
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
                      maxLength={15}
                      className={`${styles}                  
                  ${errors.phone
                          ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                          : "border-gray-200"
                        }`}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "El campo Teléfono es requerido.",
                        },
                        maxLength: 15,
                        pattern: {
                          value: PHONE_DOCTOR,
                          message: "El Teléfono no es válido.",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    className="block mb-2 text-sm text-gray-600"
                    htmlFor="specialty"
                  >
                    Especialidad
                  </label>
                  <input
                    autoComplete="none"
                    type="string"
                    id="speciality"
                    placeholder="Especialidad"
                    maxLength={25}
                    className={`${styles}                  
                  ${errors.speciality
                        ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                        : "border-gray-200"
                      }`}
                    {...register("speciality", {
                      required: {
                        value: true,
                        message: "El campo Especialidad es requerido.",
                      },
                      maxLength: 25,
                      pattern: {
                        value: NANE_DOCTOR,
                        message: "La Especialidad no es válida.",
                      },
                    })}
                  />
                  {errors.speciality && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.speciality.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <label
                    className="block mb-2 text-sm text-gray-600"
                    htmlFor="specialty"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    placeholder="¿Cómo utiliza el cannabis medicinal con sus pacientes?"
                    maxLength={200}
                    rows={4}
                    className={`${styles}                  
                  ${errors.description
                        ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                        : "border-gray-200"
                      }`}
                    {...register("description", {
                      required: {
                        value: true,
                        message: "El campo Descripción es requerido.",
                      },
                      maxLength: 200,
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#00A099] rounded-xl hover:opacity-80 focus:outline-none focus:bg-[#00A099]focus:ring focus:ring-[#00A099] focus:ring-opacity-50">
                    Conocer más
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-1/2 h-screen">
          <div className="bg-gradient-to-b from-[#00A099] flex flex-col h-full">
            <div className="basis-1/2 flex flex-col">
              <div className="m-auto text-center">
                <h2 className="text-lg text-white sm:text-4xl md:text-3xl lg:text-2xl pt-2 pb-2">
                  <span className="block">
                    Si queres conocer mas sobre la propuesta de canadoctors
                    dejanos tus datos y nos pondremos en contacto contigo
                  </span>
                </h2>
              </div>
              <div className="flex flex-row text-white text-sm text-center">
                {IconsContent.map((icon) => (
                  <Icons
                    key={icon.id}
                    iconUrl={icon.iconUrl}
                    title1={icon.title1}
                    shortDesc={icon.shortDesc}
                    wImg={icon.w}
                    hImg={icon.h}
                  />
                ))}
              </div>
            </div>
            <div className="basis-1/2 relative">
              <Image
                src={imagePatient}
                layout="fill"
                objectFit="cover"
                alt="Patient"
              />
              <div className="relative top-3/4 ml-[220px]">
                <Link href="https://www.canadoctors.com">
                  <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                    + info
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
export default DoctorFormAr;

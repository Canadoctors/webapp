import Image from "next/image";
import Link from "next/link";
import { saveNewDoctorPr } from "../../../application/api";
import { SubmitHandler, useForm } from "react-hook-form";
import Router from "next/router";
import { Home } from "../../../components/Home";
import { Icons } from "../../../components/Icons";

import canadoctorsLogo from "/public/images/logosCD/logopositivo.svg";
import imagePatient from "/public/images/bg/doctor1.jpg";
import icon1 from "/public/images/iconCards/icon.svg";
import iconLaw from "/public/images/iconCards/iconlaw.svg";
import FormField from "../../../components/FormFiel";

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  speciality: string;
  description: string;
  license: boolean;
  licenseNumber: string;
}

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

const DoctorForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const license = watch("license");

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    saveNewDoctorPr(data);
    Router.push({
      pathname: "/landingSent",
      query: { name: data.firstName },
    });
  };

  return (
    <>
      <Home
        imgSrc="bg/background2.jpg"
        textIntro={
          "Canadoctors es la primer plataforma que conecta médicos y pacientes de cannabis medicinal."
        }
        button1Url={"#formPr"}
        button2Url={""}
        button1Title={"Participar"}
        button2Title={""}
      />

      <div id="formPr" className="flex justify-center h-screen">
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
                <div className="space-y-2">
                  <div className="gap-4 sm:flex-col md:flex-row lg:flex-row xl:flex">
                    <div className="xl:w-1/2 ">
                      <FormField
                        id="firstName"
                        name="nombre"
                        required={true}
                        type="text"
                        maxLength={12}
                        placeholder="Nombre"
                        errors={errors}
                        register={register}
                        //validation={NAME}
                      />
                    </div>

                    <div className="xl:w-1/2">
                      <FormField
                        id="lastName"
                        name="apellido"
                        required={true}
                        type="text"
                        maxLength={20}
                        placeholder="Apellido"
                        errors={errors}
                        register={register}
                        //validation={NAME}
                      />
                    </div>
                  </div>

                  <div className="gap-4 sm:flex-col md:flex-row lg:flex-row xl:flex">
                    <div className="xl:w-1/2 ">
                      <FormField
                        id="email"
                        name="email"
                        required={true}
                        type="email"
                        maxLength={35}
                        placeholder="Correo Electrónico"
                        errors={errors}
                        register={register}
                        //validation={EMAIL}
                      />
                    </div>

                    <div className="xl:w-1/2">
                      <FormField
                        id="phone"
                        name="telefono"
                        required={true}
                        type="number"
                        maxLength={18}
                        placeholder="Teléfono"
                        errors={errors}
                        register={register}
                        //validation={PHONE}
                      />
                    </div>
                  </div>

                  <FormField
                    id="speciality"
                    name="especialidad"
                    required={true}
                    type="text"
                    placeholder="Especialidad"
                    errors={errors}
                    register={register}
                    //validation={PHONE}
                  />

                  <div className="relative w-full">
                    <FormField
                      id="description"
                      name="descripcion"
                      required={true}
                      type="textarea"
                      rows={6}
                      placeholder="¿Cómo utiliza el cannabis medicinal con sus pacientes?"
                      errors={errors}
                      register={register}
                    />
                  </div>

                  <FormField
                    id="license"
                    label="¿Cuenta con Licencia de Cannabis?"
                    name="licencia"
                    type="checkbox"
                    required={true}
                    errors={errors}
                    errorCheckbox="Debes aceptar los terminos y condiciones"
                    register={register}
                  />

                  {license && (
                    <FormField
                      id="licenseNumber"
                      name="numeroLicencia"
                      required={true}
                      type="text"
                      maxLength={30}
                      placeholder="Número de licencia"
                      errors={errors}
                      register={register}
                    />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorForm;

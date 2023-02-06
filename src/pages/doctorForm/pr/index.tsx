import Image from "next/image";
import Link from "next/link";
import { Home } from "../../../components/Home";
import { SubmitHandler, useForm } from "react-hook-form";
import Router from "next/router";
import { saveNewDoctorPr } from "../../../application/api";
import FormField from "../../../components/FormFiel";
import canadoctorsLogo from "/public/images/logosCD/logopositivo.svg";
import imagePatient from "/public/images/bg/doctor1.jpg";
import { FaChild, FaSistrix } from "react-icons/fa";

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

const DoctorFormPr = () => {
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
            <div className="basis-1/2 flex flex-col justify-center">
              <div className="container px-5  mx-auto">
                <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 mt-2">
                    Se parte de la comunidad
                  </h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
                    Forma parte de una amplia red de profesionales que buscan
                    mejorar la calidad de vida de sus pacientes.
                  </p>
                </div>
                <div className="flex flex-wrap justify-evenly sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <FaChild className="w-10 h-10 text-[#00A099]" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-white text-lg title-font font-medium mb-3">
                        Accesibilidad
                      </h2>
                      <p className="leading-relaxed text-white text-base">
                        Ofrecé un servicio más accesible y eficiente a tus
                        pacientes y lográ un mejor seguimiento sobre cada uno.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <FaSistrix className="w-10 h-10 text-[#00A099]" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-white text-lg title-font font-medium mb-3">
                        Trazabilidad
                      </h2>
                      <p className="leading-relaxed text-white text-base">
                        Obten un seguimiento personalizado de cada paciente y
                        accede de forma rápida y sencilla a su historial médico.
                      </p>
                    </div>
                  </div>
                </div>
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
export default DoctorFormPr;

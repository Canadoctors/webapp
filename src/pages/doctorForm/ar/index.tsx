"use client"

import Image from "next/image"
import Link from "next/link"
import { saveNewDoctorAr } from "../../../application/api"
import { type SubmitHandler, useForm } from "react-hook-form"
import Router from "next/router"
import { Home } from "../../../components/Home"
import canadoctorsLogo from "/public/images/logosCD/logopositivo.svg"
import imagePatient from "/public/images/bg/doctor1.jpg"
import FormField from "../../../components/FormFiel"
import { FaChild, FaSistrix } from "react-icons/fa"

interface Inputs {
  firstName: string
  lastName: string
  email: string
  phone: number
  speciality: string
  description: string
}

const DoctorFormAr = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmitHandler: SubmitHandler<Inputs> = (data) => {
    saveNewDoctorAr(data)
    Router.push({
      pathname: "/landingSent",
      query: { name: data.firstName },
    })
  }

  return (
    <>
      <Home
        imgSrc="bg/background.jpg"
        textIntro="Canadoctors es la primera plataforma que conecta médicos y pacientes de cannabis medicinal."
        button1Url="#formAr"
        button2Url=""
        button1Title="Participar"
        button2Title=""
      />

      <div id="formAr" className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-2xl px-4 py-4 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <Link href="/">
                <Image src={canadoctorsLogo} height={60} width={280} alt="Logo Canadoctors" />
              </Link>
            </div>
            <div className="mt-8">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-4">
                    <div className="w-full lg:w-1/2">
                      <FormField
                        id="firstName"
                        name="Nombre"
                        required={true}
                        type="text"
                        maxLength={12}
                        placeholder="Nombre"
                        errors={errors}
                        register={register}
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <FormField
                        id="lastName"
                        name="Apellido"
                        required={true}
                        type="text"
                        maxLength={20}
                        placeholder="Apellido"
                        errors={errors}
                        register={register}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="w-full lg:w-1/2">
                      <FormField
                        id="email"
                        name="Correo Electrónico"
                        required={true}
                        type="email"
                        maxLength={35}
                        placeholder="Correo Electrónico"
                        errors={errors}
                        register={register}
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <FormField
                        id="phone"
                        name="Teléfono"
                        required={true}
                        type="number"
                        maxLength={18}
                        placeholder="Teléfono"
                        errors={errors}
                        register={register}
                      />
                    </div>
                  </div>
                  <FormField
                    id="speciality"
                    name="Especialidad"
                    required={true}
                    type="text"
                    placeholder="Especialidad"
                    errors={errors}
                    register={register}
                  />
                  <FormField
                    id="description"
                    name="Descripción"
                    required={true}
                    type="textarea"
                    rows={6}
                    placeholder="¿Cómo utiliza el cannabis medicinal con sus pacientes?"
                    errors={errors}
                    register={register}
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white bg-[#00A099] rounded-xl hover:opacity-80 focus:outline-none focus:ring focus:ring-[#00A099] focus:ring-opacity-50"
                  >
                    Conocer más
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-1/2 h-screen">
          <div className="bg-gradient-to-b from-[#00A099] to-[#006F6F] flex flex-col h-full">
            <div className="basis-1/2 flex flex-col justify-center">
              <div className="container px-5 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="text-2xl sm:text-3xl font-medium text-white mb-4">Sé parte de la comunidad</h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
                    Formá parte de una amplia red de profesionales que buscan mejorar la calidad de vida de sus
                    pacientes.
                  </p>
                </div>
                <div className="flex flex-wrap justify-evenly gap-6">
                  <div className="p-4 flex flex-col text-center items-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 mb-5">
                      <FaChild className="w-10 h-10 text-[#00A099]" />
                    </div>
                    <h2 className="text-lg font-medium text-white mb-3">Accesibilidad</h2>
                    <p className="leading-relaxed text-white">
                      Ofrecé un servicio más accesible y eficiente a tus pacientes y lográ un mejor seguimiento sobre
                      cada uno.
                    </p>
                  </div>
                  <div className="p-4 flex flex-col text-center items-center">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100 mb-5">
                      <FaSistrix className="w-10 h-10 text-[#00A099]" />
                    </div>
                    <h2 className="text-lg font-medium text-white mb-3">Trazabilidad</h2>
                    <p className="leading-relaxed text-white">
                      Lográ un seguimiento personalizado de cada paciente y accedé de forma rápida y sencilla a su
                      historial médico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 relative">
              <Image src={imagePatient} layout="fill" objectFit="cover" alt="Paciente y médico interactuando" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorFormAr

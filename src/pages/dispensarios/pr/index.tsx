import { useForm, SubmitHandler } from "react-hook-form";
import canadoctorsLogo from "/public/images/logosCD/logopositivo.svg";
import FormField from "../../../components/FormFiel";
import Image from "next/image";
import Router from "next/router";
import { saveDispensaryPr } from "../../../application/api";

type Inputs = {
  dispensaryName: string;
  contactPerson: string;
  phone: number;
  countryCode: string;
  email: string;
  location: string;
  registrationDate: string;
  promotionCode: string;
  schedule: any;
  meetDate: any;
  turn: any;
  morning: any;
  afternoon: any;
  lapse: string;
};

type PropsForm = {
  register: any;
  errors: any;
  watch?: any;
};

function DispensaryForm() { // Cambiamos el nombre a uno que comienza con mayúscula
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const schedule = watch("schedule");
  const turn = watch("turn");
  const morning = watch("morning");
  const afternoon = watch("afternoon");

  const codigo = "CD2023GOLF";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let datos = {
      ...data,
      registrationDate: new Date().toISOString(),
    };
    saveDispensaryPr(datos);
    Router.push({
      pathname: "/landingSent",
      query: { name: data.contactPerson },
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#00A099]/80 to-[#8CBB93]/90 bg-opacity-40 min-h-screen flex justify-center items-center">
      <div className="py-12 px-14 m-4 w-full max-w-4xl bg-white rounded-2xl shadow-xl">
        <div className="w-full text-center">
          <Image
            src={canadoctorsLogo}
            height={60}
            width={400}
            alt="logo canadoctors"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <div className="sm:flex-col md:flex-row lg:flex-row xl:flex">
              <div className="flex-grow xl:w-1/4 xl:pr-2">
                <FormField
                  id="dispensaryName"
                  name="Nombre del dispensario"
                  required={true}
                  type="text"
                  maxLength={25}
                  placeholder="Nombre del dispensario"
                  errors={errors}
                  register={register}
                />
              </div>
              <div className="flex-grow">
                <FormField
                  id="contactPerson"
                  name="Persona de contacto"
                  required={true}
                  type="text"
                  maxLength={25}
                  placeholder="Persona de contacto"
                  errors={errors}
                  register={register}
                />
              </div>
            </div>

            {/* Continúa igual para el resto de los campos */}

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xl flex justify-center bg-[#00A099] hover:bg-[#8CBB93] text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
              >
                Enviar formulario
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DispensaryForm;

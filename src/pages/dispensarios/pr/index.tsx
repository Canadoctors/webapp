import { useForm, SubmitHandler } from "react-hook-form";
import canadoctorsLogo from "/public/images/logosCD/logopositivo.svg";
import FormField from "../../../components/FormFiel";
import Image from "next/image";
import Router from "next/router";
import { saveDispensaryPr } from "../../../application/api";

type UserSubmitForm = {
  dispensaryName: string;
  contactPerson: string;
  phone: number;
  countryCode: string;
  email: string;
  location: string;
  registrationDate: string;
};

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();

  const onSubmit: SubmitHandler<UserSubmitForm> = (data) => {
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
            <FormField
              id="dispensaryName"
              name="Nombre del dispensario"
              required={true}
              type="text"
              maxLength={25}
              placeholder="Nombre del dispensario"
              errors={errors}
              register={register}
              //validation={PHONE}
            />

            <FormField
              id="contactPerson"
              name="Persona de contacto"
              required={true}
              type="text"
              maxLength={25}
              placeholder="Persona de contacto"
              errors={errors}
              register={register}
              //validation={PHONE}
            />

            <FormField
              id="phone"
              name="Teléfono"
              required={true}
              type="number"
              maxLength={15}
              placeholder="Número de teléfono"
              errors={errors}
              register={register}
              //validation={PHONE}
            />

            <FormField
              id="email"
              name="Correo electrónico"
              required={true}
              type="text"
              maxLength={25}
              placeholder="Correo electrónico"
              errors={errors}
              register={register}
              //validation={PHONE}
            />

            <FormField
              id="location"
              name="Localidad"
              required={true}
              type="text"
              maxLength={25}
              placeholder="Localidad"
              errors={errors}
              register={register}
              //validation={PHONE}
            />

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xl flex justify-center bg-[#00A099]  hover:bg-[#8CBB93] text-gray-100 p-3 rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
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

export default index;

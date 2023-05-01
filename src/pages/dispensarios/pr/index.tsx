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
  time: number;
  lapse: string;

};

type PropsForm = {
  register: any;
  errors: any;
  watch?: any;
};



function index() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const schedule = watch ("schedule");

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
                  //validation={PHONE}
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
                  //validation={PHONE}
                />
              </div>
            </div>
            

            <div className="sm:flex-col md:flex-row lg:flex-row xl:flex">
              <div className="flex-grow xl:w-1/4 xl:pr-2">
                <FormField
                  id="countryCode"
                  name="codigo país"
                  required={true}
                  type="select"
                  errors={errors}
                  register={register}
                  options={[
                    { value: "", label: "Seleccionar País" },
                    { value: "+54", label: "🇦🇷 Argentina +54" },
                    { value: "+1242", label: "🇧🇸 Bahamas +1242" },
                    { value: "+591", label: "🇧🇴 Bolivia +591" },
                    { value: "+55", label: "🇧🇷 Brasil +55" },
                    { value: "+1", label: "🇨🇦 Canadá +1" },
                    { value: "+56", label: "🇨🇱 Chile +56" },
                    { value: "+57", label: "🇨🇴 Colombia +57" },
                    { value: "+506", label: "🇨🇷 Costa Rica +506" },
                    { value: "+53", label: "🇨🇺 Cuba +53" },
                    { value: "+1", label: "🇩🇴 República Dominicana +1" },
                    { value: "+593", label: "🇪🇨 Ecuador +593" },
                    { value: "+503", label: "🇸🇻 El Salvador +503" },
                    {
                      value: "+500",
                      label: "🇫🇰 Islas Malvinas (Falkland) +500",
                    },
                    { value: "+298", label: "🇫🇴 Islas Feroe +298" },
                    { value: "+299", label: "🇬🇱 Groenlandia +299" },
                    { value: "+502", label: "🇬🇹 Guatemala +502" },
                    { value: "+509", label: "🇭🇹 Haití +509" },
                    { value: "+504", label: "🇭🇳 Honduras +504" },
                    { value: "+1", label: "🇯🇲 Jamaica +1" },
                    { value: "+52", label: "🇲🇽 México +52" },
                    { value: "+505", label: "🇳🇮 Nicaragua +505" },
                    { value: "+1", label: "🇵🇦 Panamá +1" },
                    { value: "+595", label: "🇵🇾 Paraguay +595" },
                    { value: "+51", label: "🇵🇪 Perú +51" },
                    { value: "+1", label: "🇵🇷 Puerto Rico +1" },
                    { value: "+1", label: "🇺🇸 Estados Unidos +1" },
                    { value: "+598", label: "🇺🇾 Uruguay +598" },
                    { value: "+58", label: "🇻🇪 Venezuela +58" },
                    { value: "+43", label: "🇦🇹 Austria +43" },
                    { value: "+32", label: "🇧🇪 Bélgica +32" },
                    { value: "+359", label: "🇧🇬 Bulgaria +359" },
                    { value: "+385", label: "🇭🇷 Croacia +385" },
                    { value: "+357", label: "🇨🇾 Chipre +357" },
                    { value: "+420", label: "🇨🇿 República Checa +420" },
                    { value: "+45", label: "🇩🇰 Dinamarca +45" },
                    { value: "+372", label: "🇪🇪 Estonia +372" },
                    { value: "+358", label: "🇫🇮 Finlandia +358" },
                    { value: "+33", label: "🇫🇷 Francia +33" },
                    { value: "+49", label: "🇩🇪 Alemania +49" },
                    { value: "+30", label: "🇬🇷 Grecia +30" },
                    { value: "+36", label: "🇭🇺 Hungría +36" },
                    { value: "+354", label: "🇮🇸 Islandia +354" },
                    { value: "+353", label: "🇮🇪 Irlanda +353" },
                    { value: "+39", label: "🇮🇹 Italia +39" },
                    { value: "+371", label: "🇱🇻 Letonia +371" },
                    { value: "+423", label: "🇱🇮 Liechtenstein +423" },
                    { value: "+370", label: "🇱🇹 Lituania +370" },
                    { value: "+352", label: "🇱🇺 Luxemburgo +352" },
                    { value: "+356", label: "🇲🇹 Malta +356" },
                    { value: "+31", label: "🇳🇱 Países Bajos +31" },
                    { value: "+47", label: "🇳🇴 Noruega +47" },
                    { value: "+48", label: "🇵🇱 Polonia +48" },
                    { value: "+351", label: "🇵🇹 Portugal +351" },
                    { value: "+40", label: "🇷🇴 Rumania +40" },
                    { value: "+421", label: "🇸🇰 Eslovaquia +421" },
                    { value: "+386", label: "🇸🇮 Eslovenia +386" },
                    { value: "+34", label: "🇪🇸 España +34" },
                    { value: "+46", label: "🇸🇪 Suecia +46" },
                    { value: "+41", label: "🇨🇭 Suiza +41" },
                    { value: "+380", label: "🇺🇦 Ucrania +380" },
                    { value: "+44", label: "🇬🇧 Reino Unido +44" },
                  ]}
                />
              </div>
              <div className="flex-grow">
                <FormField
                  id="phone"
                  name="telefono"
                  required={true}
                  type="number"
                  maxLength={10}
                  minLength={8}
                  placeholder="Teléfono"
                  errors={errors}
                  register={register}
                  //validation={PHONE}
                />
              </div>
            </div>

            <FormField
              id="email"
              name="Correo electrónico"
              required={true}
              type="text"
              maxLength={25}
              placeholder="Correo electrónico"
              errors={errors}
              register={register}
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
            />

            <FormField
              id="schedule"
              label="Quiero agendar un horario para reunion"
              name="schedule"
              type="checkbox"
              required={false}
              errors={errors}
              register={register}
            />

            {schedule && (
              <>
              <div>
                <span>
                  <ul className="list-disc mx-5">
                    <li>
                    El dia de reunion elegido debe ser posterior al dia de hoy.
                    </li>
                    <li>
                    Horario de atención (hora PR): Lun a Vie de 9am-12pm y de 2pm-5pm.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="sm:flex-col md:flex-row lg:flex-row xl:flex gap-2">
                <div className="flex-grow">
                  <FormField
                    label="Fecha de Reunion"
                    id="meetDate"
                    required={true}
                    name="fecha de reunion"
                    type="date"
                    errors={errors}
                    register={register}
                      />
                </div>
                <div className="flex-grow">
                  <FormField
                    label="Hora"
                    id="time"
                    required={true}
                    name="seleccione una hora"
                    type="select"
                    errors={errors}
                    register={register}
                    options={[
                      {value: "",label: "selecciona una hora"},
                      {value: "2",label: "2"},
                      {value: "3",label: "3"},
                      {value: "4",label: "4"},
                      {value: "5",label: "5"},
                      {value: "6",label: "6"},
                      {value: "7",label: "7"},
                      {value: "8",label: "8"},
                      {value: "9",label: "9"},
                      {value: "10",label: "10" },
                      {value: "11",label: "11" },
                      {value: "12",label: "12" }
                    ]}
                    />
                </div>
                <div className="flex-grow">
                  <FormField
                    label="am-pm"
                    id="lapse"
                    required={true}
                    name="am o pm?"
                    type="select"
                    errors={errors}
                    register={register}
                    options={[
                      {value: "",label: "selecciona"},
                      {value: "am",label: "am"},
                      {value: "pm",label: "pm"}
                    ]}
                    />
                </div>
              </div>
              </> 
            )}

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

/*
<FormField
              id="promotionCode"
              type="text"
              maxLength={25}
              autocomplete="off"
              placeholder="Codigo de promoción"
              errors={errors}
              register={register}
              {...register("promotionCode", {
                validate: (value: string) =>
                  value === codigo ||
                  value === "" ||
                  "El código de promoción es incorrecto",
              })}
              name="Codigo de promoción"
            />
            */

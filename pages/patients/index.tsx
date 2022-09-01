import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";

import Logo from "../../assets/images/canadoctorLogoHite.svg";
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

const NANE_PATIENT = /^\S[a-zA-ZÀ-ÿ\s]+$/;
const EMAIL_PATIENT = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_PATIENT = /^[0-9]+$/;
const PASSWORD_PATIENT = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]+$/;

const Patient = () => {
  const [passwordInputType, toggleIcon] = usePasswordToggle();

  const styles = `block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-xl focus:border-[#00A099] focus:ring-[#00A099] focus:outline-none focus:ring focus:ring-opacity-40`;

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
                  <Image src={Logo} height={60} width={280} alt="" />
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
                  maxLength={25}
                  className={`${styles}
                  ${
                    errors.name &&
                    "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                  }`}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El campo Nombre es requerido.",
                    },
                    maxLength: 25,
                    pattern: {
                      value: NANE_PATIENT,
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
                  maxLength={20}
                  className={`${styles}                  
                ${
                  errors.lastName &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                }`}
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "El campo Apellido es requerido.",
                    },
                    maxLength: 20,
                    pattern: {
                      value: NANE_PATIENT,
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
                  maxLength={10}
                  className={`${styles}                  
                ${
                  errors.date &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                }`}
                  {...register("date", {
                    required: {
                      value: true,
                      message: "El campo Fecha es requerido.",
                    },
                    maxLength: 10,
                  })}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.date.message}
                  </p>
                )}
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
                  maxLength={15}
                  className={`${styles}                  
                  ${
                    errors.phone
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
                      value: PHONE_PATIENT,
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
                  maxLength={40}
                  className={`${styles}                 
                 ${
                   errors.email
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
                      value: EMAIL_PATIENT,
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

              <div className="relative mt-6">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type={passwordInputType as any}
                  id="password"
                  placeholder="Contraseña"
                  maxLength={10}
                  className={`${styles}                 
                 ${
                   errors.password
                     ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                     : "border-gray-200"
                 }`}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo Contraseña es requerido.",
                    },
                    maxLength: 10,
                    pattern: {
                      value: PASSWORD_PATIENT,
                      message: "La Contraseña no es válido.",
                    },
                  })}
                />
                {toggleIcon}
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mt-6 relative">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="passwordConfirm"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type={passwordInputType as any}
                  id="passwordConfirm"
                  placeholder="Confirmar Contraseña"
                  maxLength={10}
                  className={`${styles}                 
                 ${
                   errors.passwordConfirm
                     ? "focus:border-red-500 focus:ring-red-500 border-red-500 ring-red-500 ring ring-opacity-40"
                     : "border-gray-200"
                 }`}
                  {...register("passwordConfirm", {
                    required: {
                      value: true,
                      message: "El campo Contraseña es requerido.",
                    },
                    maxLength: 10,
                    pattern: {
                      value: PASSWORD_PATIENT,
                      message: "La Contraseña no es válido.",
                    },
                  })}
                />
                {toggleIcon}
                {errors.passwordConfirm && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.passwordConfirm.message}
                  </p>
                )}
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

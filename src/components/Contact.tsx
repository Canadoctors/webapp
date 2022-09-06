import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "./FormFiel";

type ContactSubmitForm = {
  fullName: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactSubmitForm>();

  const onSubmit: SubmitHandler<ContactSubmitForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-10 mb-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-7/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Ponte en contacto con nosotros
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                  Complete este formulario y nos pondremos en contacto con usted
                  lo antes posible.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3 mt-8">
                    <FormField
                      id="firstName"
                      name="nombre"
                      type="text"
                      maxLength={12}
                      placeholder="Nombre completo"
                      errors={errors}
                      register={register}
                      //validation={NAME}
                    />
                  </div>
                  <div className="relative w-full mb-3 mt-8">
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      maxLength={35}
                      placeholder="Correo Electrónico"
                      errors={errors}
                      register={register}
                      //validation={EMAIL}
                    />
                  </div>

                  <div className="relative w-full mb-3 mt-8">
                    <textarea
                      id="countryCode"
                      placeholder="Mensaje"
                      rows={4}
                      className={`block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-[#00A099] focus:outline-none focus:ring-2 focus:ring-[#00A099]
                ${
                  errors.message ? "border-red-500 border-2" : "border-gray-300"
                } `}
                      {...register("message", {
                        required: {
                          value: true,
                          message: "El campo codigo pais es requerido",
                        },
                        validate: (value) =>
                          value !== "" || "Seleccione un pais",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-[#32ADA2] text-white focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

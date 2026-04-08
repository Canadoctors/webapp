import { useForm, type SubmitHandler } from "react-hook-form"
import FormField from "./FormFiel"
import { contactForm } from "../application/api"
import { NAME } from "../validations/validations"

type ContactSubmitForm = {
  fullName: string
  email: string
  message: string
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSubmitForm>()

  const onSubmit: SubmitHandler<ContactSubmitForm> = (data) => {
    contactForm(data)
    try {
      alert("Mensaje enviado")
      reset()
    } catch (error) {
      alert("Error al enviar el mensaje")
    }
  }

  return (
    <>
      <div id="Contact" className="bg-gradient-to-b from-brand-primary/90 to-brand-tertiary/80 w-auto px-4 py-12">
        <div className="flex flex-wrap justify-center pt-8">
          <div className="w-full lg:w-7/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 mt-6 shadow-2xl rounded-2xl bg-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex-auto p-8 lg:p-12 relative z-10">
                <h4 className="text-3xl font-bold text-brand-neutral">Contáctenos</h4>
                <p className="leading-relaxed mt-2 mb-8 text-brand-neutral/50 font-light">
                  Complete este formulario y nos pondremos en contacto con usted lo antes posible.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="relative w-full">
                    <FormField
                      id="firstName"
                      name="nombre"
                      required={true}
                      type="text"
                      maxLength={12}
                      placeholder="Nombre"
                      errors={errors}
                      register={register}
                      validation={NAME}
                    />
                  </div>
                  <div className="relative w-full">
                    <FormField
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                      maxLength={35}
                      placeholder="Correo Electrónico"
                      errors={errors}
                      register={register}
                    />
                  </div>

                  <div className="sm:flex-col md:flex-row lg:flex-row xl:flex gap-4">
                    <div className="flex-grow xl:w-1/4 xl:pr-2">
                      <FormField
                        id="country"
                        name="pais"
                        required={true}
                        type="text"
                        maxLength={25}
                        placeholder="País"
                        errors={errors}
                        register={register}
                      />
                    </div>

                    <div className="flex-grow">
                      <FormField
                        id="countryCode"
                        name="código de área"
                        required={true}
                        type="number"
                        maxLength={8}
                        placeholder="Código de área"
                        errors={errors}
                        register={register}
                      />
                    </div>

                    <div className="flex-grow">
                      <FormField
                        id="phone"
                        name="telefono"
                        required={true}
                        type="number"
                        maxLength={18}
                        placeholder="Teléfono"
                        errors={errors}
                        register={register}
                      />
                    </div>
                  </div>

                  <div className="relative w-full">
                    <FormField
                      id="message"
                      name="mensaje"
                      required={true}
                      type="textarea"
                      rows={5}
                      placeholder="Mensaje"
                      errors={errors}
                      register={register}
                    />
                  </div>

                  <div className="text-center mt-8">
                    <button
                      className="bg-brand-primary text-white focus:outline-none font-medium rounded-full text-lg px-16 py-3 text-center hover:bg-brand-primary/90 transition-all duration-300 btn-magnetic"
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
  )
}

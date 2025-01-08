import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Metadata } from "next"
import Speaker from "../../assets/images/cannmedevent.jpeg"
import Cannmed from "../../assets/images/cannmed.png"
import Prich from "../../assets/images/prich.png"

export const metadata: Metadata = {
  title: 'Congreso Médico de Cannabis | CanaDoctors',
  description: 'Únete al Congreso Médico de Cannabis en Puerto Rico. Pre-evento especial el 14 de enero, 2024. Regístrate ahora para esta oportunidad única de aprendizaje y networking.',
}

export default function EventPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur">
                Pre-evento: 14 de enero, 2024
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Congreso Médico de Cannabis en Puerto Rico
              </h1>
              <p className="text-xl opacity-90">
                Únete a los expertos líderes en cannabis medicinal para un evento educativo exclusivo para profesionales de la salud.
              </p>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
                Registrarse Ahora
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={Speaker}
                alt="Medical Cannabis Conference"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              src="../../images/logosCD/logopositivo.svg"
              alt="CanaDoctors Logo"
              width={200}
              height={60}
              className="object-contain"
            />
            <Image
              src={Prich}
              alt="PrichBiotech Logo"
              width={150}
              height={60}
              className="object-contain"
            />

<Image
              src={Cannmed}
              alt="Cannmed"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Pre-Event Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Pre-Evento Especial</h2>
            <p className="text-xl text-gray-600">
              14 de enero, 2024 - Una oportunidad única para conectar con expertos y obtener información exclusiva sobre el congreso principal en junio.
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Beneficios del Pre-Evento</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Acceso temprano a material educativo</li>
                  <li>• Networking con profesionales del sector</li>
                  <li>• Descuentos especiales para el congreso</li>
                  <li>• Certificados de participación</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">¿Qué Aprenderás?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Últimas investigaciones en cannabis medicinal</li>
                  <li>• Marco regulatorio actualizado</li>
                  <li>• Casos clínicos relevantes</li>
                  <li>• Mejores prácticas de prescripción</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Registro para el Pre-Evento</h2>
              <p className="mt-2 text-gray-600">
                Asegura tu lugar para el pre-evento del 14 de enero
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input id="nombre" required />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <Input id="apellido" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <Input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <Input type="tel" id="telefono" required />
              </div>
              <div>
                <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700 mb-1">
                  Especialidad Médica
                </label>
                <Input id="especialidad" required />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje (Opcional)
                </label>
                <Textarea id="mensaje" />
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Enviar Registro
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <p className="text-gray-400">Email: info@canadoctors.com</p>
             
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Ubicación</h3>
              <p className="text-gray-400">Wyndham Grand Rio Mar Rainforest Beach and Golf Resort</p>
              <p className="text-gray-400">6000 Blvd. Río Mar, Rio Grande, 00745</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://canadoctors.com" className="hover:text-white">
                    CanaDoctors
                  </a>
                </li>
              
                <li>
                  <a href="https://app.canadoctors.com/signup/canadoctors" className="hover:text-white">
                   Get Medical Id
                  </a>
                </li>
              
                <li>
                  <a href="https://cannmedevents.com" className="hover:text-white">
                    CannMed Events
                  </a>
                </li>
                <li>
                  <a href="https://prichbiotech.com" className="hover:text-white">
                    Prich Biotech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
              <div className="flex space-x-4">
              <p className="text-gray-400">LinkedIn</p>
              <p className="text-gray-400">Instagram</p>
              
          
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CanaDoctors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


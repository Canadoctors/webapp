import type React from "react"

import { toast, Toaster } from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { useRef } from "react"
import { useRouter } from "next/router"
import { saveCannMed } from "@/application/api"

// Import all speaker images
import Speaker from "../../assets/images/cannmedevent.jpeg"
import Cannmed from "../../assets/images/cannmed.png"
import Prich from "../../assets/images/prich.png"
import SpeakerOne from "../../assets/images/cannmed/CanMed-Speakers-Bonnie.png"
import SpeakerTwo from "../../assets/images/cannmed/CanMed-Speakers-Sulak.png"
import SpeakerThree from "../../assets/images/cannmed/LM-headshot-2023.png"
import SpeakerFour from "../../assets/images/cannmed/Headshot-2.png"

export default function CannMedPage() {
  const router = useRouter()
  const registroRef = useRef<HTMLElement>(null)

  const scrollToRegistro = () => {
    registroRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await saveCannMed({
        nombre: formData.get("nombre") as string,
        apellido: formData.get("apellido") as string,
        email: formData.get("email") as string,
        telefono: formData.get("telefono") as string,
        especialidad: formData.get("especialidad") as string,
        ciudad: formData.get("ciudad") as string,
        direccion: formData.get("direccion") as string,
        hasPrescrito: formData.get("hasPrescrito") as string,
        conocimiento: formData.get("conocimiento") as string,
        interes: formData.get("interes") as string,
        licencia: formData.get("licencia") as string,
        fechaRegistro: new Date(),
      })

      toast.success("Registro exitoso. Hemos recibido tu solicitud. Te contactaremos pronto.")

      form.reset()

      // Espera 3 segundos antes de redirigir
      setTimeout(() => {
        router.push("https://canadoctors.com")
      }, 3000)
    } catch (error) {
      toast.error("Error en el registro. Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.")
    }
  }

  const speakers = [
    {
      name: "Bonni Goldstein, MD",
      specialty: "Medical Director / Owner",
      bio: "Canna-Centers Wellness",
      image: SpeakerOne,
    },
    {
      name: "Dustin Sulak, DO",
      specialty: "Co-Founder & Medical Director",
      bio: "Healer.com",
      image: SpeakerTwo,
    },
    {
      name: "Laszlo Mechtler, MD",
      specialty: "Chief Medical Officer",
      bio: "DENT Neurologic Institute",
      image: SpeakerThree,
    },
    {
      name: "Laura Barrett, MBA, BSN, RN",
      specialty: "Founder",
      bio: "Ask Nurse Laura",
      image: SpeakerFour,
    },
  ]

  return (
    <>
      <Head>
        <title>Congreso Médico de Cannabis | CanaDoctors</title>
        <meta
          name="description"
          content="Únete al Congreso Médico de Cannabis en Puerto Rico. Pre-evento especial el 14 de enero, 2024. Regístrate ahora para esta oportunidad única de aprendizaje y networking."
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm backdrop-blur">
                  Pre-evento: 14 de enero, 2024
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Congreso Médico de Cannabis en Puerto Rico</h1>
                <p className="text-xl opacity-90">
                  Únete a los expertos líderes en cannabis medicinal para un evento educativo exclusivo para
                  profesionales de la salud.
                </p>
                <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90" onClick={scrollToRegistro}>
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

        {/* Workshop Highlight Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
                ¡Oportunidad Exclusiva!
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Workshop Gratuito de Capacitación</h2>
              <p className="text-xl text-gray-600">
                Ofrecemos acceso gratuito a 22 médicos seleccionados para participar en nuestro workshop especializado
                de cannabis medicinal.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Capacitación Práctica</h3>
                    <p className="text-gray-600">Aprende directamente de expertos en cannabis medicinal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Certificación</h3>
                    <p className="text-gray-600">Obtén tu certificación oficial al completar el workshop</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Networking</h3>
                    <p className="text-gray-600">Conecta con otros profesionales del sector</p>
                  </CardContent>
                </Card>
              </div>
              <Link href="/cannmed/workshop">
                <Button size="lg" className="mt-8">
                  Ver Detalles del Workshop
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Speakers Section */}

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Speakers Destacados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-3 overflow-hidden rounded-full border-2 border-teal-500">
                      <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold">{speaker.name}</h3>
                    <p className="text-sm text-gray-600">{speaker.specialty}</p>
                    <p className="text-xs text-gray-500 mt-1">{speaker.bio}</p>
                  </CardContent>
                </Card>
              ))}
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
              <Image src={Prich} alt="PrichBiotech Logo" width={150} height={60} className="object-contain" />
              <Image src={Cannmed} alt="Cannmed" width={150} height={60} className="object-contain" />
            </div>
          </div>
        </section>

        {/* Pre-Event Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Pre-Evento Especial</h2>
              <p className="text-xl text-gray-600">
                14 de enero, 2024 - Una oportunidad única para conectar con expertos y obtener información exclusiva
                sobre el congreso principal en junio.
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
        <section className="py-16 bg-gray-50" id="registro" ref={registroRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Registro para el Workshop</h2>
                <p className="mt-2 text-gray-600">Complete el formulario para aplicar al workshop gratuito</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" name="nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" name="apellido" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input type="tel" id="telefono" name="telefono" required />
                </div>
                <div>
                  <Label htmlFor="especialidad">Especialidad Médica</Label>
                  <Input id="especialidad" name="especialidad" required />
                </div>
                <div>
                  <Label htmlFor="ciudad">Ciudad de Trabajo</Label>
                  <Input id="ciudad" name="ciudad" required />
                </div>
                <div>
                  <Label htmlFor="direccion">Dirección de Consultorio</Label>
                  <Input id="direccion" name="direccion" required />
                </div>
                <div className="space-y-4">
                  <Label>¿Ha prescrito cannabis medicinal anteriormente?</Label>
                  <RadioGroup defaultValue="no" name="hasPrescrito">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="prescrito-si" />
                      <Label htmlFor="prescrito-si">Sí</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="prescrito-no" />
                      <Label htmlFor="prescrito-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <Label>Nivel de conocimiento en cannabis medicinal</Label>
                  <RadioGroup defaultValue="basico" name="conocimiento">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ninguno" id="conocimiento-ninguno" />
                      <Label htmlFor="conocimiento-ninguno">Ninguno</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basico" id="conocimiento-basico" />
                      <Label htmlFor="conocimiento-basico">Básico</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermedio" id="conocimiento-intermedio" />
                      <Label htmlFor="conocimiento-intermedio">Intermedio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="avanzado" id="conocimiento-avanzado" />
                      <Label htmlFor="conocimiento-avanzado">Avanzado</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="interes">¿Por qué está interesado en aprender sobre cannabis medicinal?</Label>
                  <Textarea id="interes" name="interes" required />
                </div>
                <div className="space-y-4">
                  <Label>¿Está interesado en obtener una licencia de cannabis medicinal?</Label>
                  <RadioGroup defaultValue="si" name="licencia">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="si" id="licencia-si" />
                      <Label htmlFor="licencia-si">Sí</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="licencia-no" />
                      <Label htmlFor="licencia-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="talvez" id="licencia-talvez" />
                      <Label htmlFor="licencia-talvez">Ya poseo una</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Enviar Solicitud
                </Button>
              </form>
              <Toaster />
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} CanaDoctors. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


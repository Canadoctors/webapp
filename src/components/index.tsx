import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Congreso Médico de Cannabis | CanaDoctors</title>
        <meta name="description" content="Únete al Congreso Médico de Cannabis en Puerto Rico. Pre-evento especial el 14 de enero, 2024. Regístrate ahora para esta oportunidad única de aprendizaje y networking." />
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
                  src="/placeholder.svg?height=400&width=600"
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
              <h2 className="text-4xl font-bold text-gray-900">
                Workshop Gratuito de Capacitación
              </h2>
              <p className="text-xl text-gray-600">
                Ofrecemos acceso gratuito a 22 médicos seleccionados para participar en nuestro workshop especializado de cannabis medicinal.
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
              <Link href="/workshop">
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
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((speaker) => (
                <Card key={speaker}>
                  <CardContent className="pt-6">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={`/placeholder.svg?height=300&width=300`}
                        alt={`Speaker ${speaker}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Dr. Nombre del Speaker</h3>
                    <p className="text-gray-600">Especialidad / Institución</p>
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
                src="/placeholder.svg?height=60&width=200"
                alt="CanaDoctors Logo"
                width={200}
                height={60}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=60&width=200"
                alt="PrichBiotech Logo"
                width={200}
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
        <section className="py-16 bg-gray-50" id="registro">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Registro para el Workshop</h2>
                <p className="mt-2 text-gray-600">
                  Complete el formulario para aplicar al workshop gratuito
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input type="email" id="email" required />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input type="tel" id="telefono" required />
                </div>
                <div>
                  <Label htmlFor="especialidad">Especialidad Médica</Label>
                  <Input id="especialidad" required />
                </div>
                <div>
                  <Label htmlFor="ciudad">Ciudad de Trabajo</Label>
                  <Input id="ciudad" required />
                </div>
                <div>
                  <Label htmlFor="direccion">Dirección de Consultorio</Label>
                  <Input id="direccion" required />
                </div>
                <div className="space-y-4">
                  <Label>¿Ha prescrito cannabis medicinal anteriormente?</Label>
                  <RadioGroup defaultValue="no">
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
                  <RadioGroup defaultValue="basico">
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
                  <Textarea id="interes" required />
                </div>
                <div className="space-y-4">
                  <Label>¿Está interesado en obtener una licencia de cannabis medicinal?</Label>
                  <RadioGroup defaultValue="si">
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
                      <Label htmlFor="licencia-talvez">Tal vez</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                  Enviar Solicitud
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
                <p className="text-gray-400">Tel: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Ubicación</h3>
                <p className="text-gray-400">San Juan, Puerto Rico</p>
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
                    <a href="https://cannmedevents.com" className="hover:text-white">
                      CannMed Events
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
                <div className="flex space-x-4">
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
    </>
  )
}


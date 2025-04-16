import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { Phone, Mail, Video, Star, Heart, Menu, X } from "lucide-react"

interface Article {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
      large: { url: string }
      small: { url: string }
      medium: { url: string }
      thumbnail: { url: string }
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
export const metadata: Metadata = {
  title: "Cannabis Medicinal en Puerto Rico | CanaDoctors",
  description:
    "Obtén tu tarjeta de Cannabis Medicinal en Puerto Rico con CanaDoctors. Orientación experta, aprobaciones rápidas y atención compasiva. Comienza tu camino hacia el bienestar hoy.",
  openGraph: {
    title: "Cannabis Medicinal en Puerto Rico | CanaDoctors",
    description:
      "Obtén tu tarjeta de Cannabis Medicinal en Puerto Rico con CanaDoctors. Orientación experta, aprobaciones rápidas y atención compasiva.",
    url: "https://canadoctors.com/puerto-rico",
    siteName: "CanaDoctors",
    images: [
      {
        url: "https://canadoctors.com/og-image-puerto-rico.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es-PR",
    type: "website",
  },
}

export default function PuertoRicoLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          "https://strapi-dqjm.onrender.com/api/articles?sort=publishedAt:desc&pagination[limit]=3&populate=*",
          {
            headers: {
              Authorization: `Bearer 0f7bcb4965a447d2076e3576bda02197a9776e6a01828e692b0a0fcdd68208545f4a524fc39801617118041aafcd083503aed03b5743b0ab52796e3f7bd3c76322f706aaf495744a5e128d12b9be7a87473ce39cc2a0f805fe164689336d25f7b553bc0bac80bca3d64e7e0217287688f0f6cdd6900c2c26683b62f20f732d3f`,
            },
          },
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setArticles(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const BASE_URL = "https://strapi-dqjm.onrender.com"

  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="../images/logosCD/logopositivo.svg" alt="Logo de CanaDoctors" width={150} height={60} />
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link href="#beneficios" className="text-sm font-medium hover:underline underline-offset-4">
                Beneficios
              </Link>
              <Link href="#proceso" className="text-sm font-medium hover:underline underline-offset-4">
                Proceso
              </Link>
              <Link href="#servicios" className="text-sm font-medium hover:underline underline-offset-4">
                Servicios
              </Link>
              <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
                Preguntas Frecuentes
              </Link>
            </nav>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="https://app.canadoctors.com/signup/canadoctors">Reservar Consulta</Link>
            </Button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Alternar menú">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-gradient-to-r from-[rgb(0,160,153)] to-[rgb(140,187,147)]">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" aria-hidden="true" />
                <div className="relative h-full flex flex-col">
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-full bg-white/20 p-2"
                      aria-label="Cerrar menú"
                    >
                      <X className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <Link
                      href="#beneficios"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BENEFICIOS
                    </Link>
                    <Link
                      href="#proceso"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PROCESO
                    </Link>
                    <Link
                      href="#servicios"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SERVICIOS
                    </Link>
                    <Link
                      href="#faq"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PREGUNTAS FRECUENTES
                    </Link>
                    <Link
                      href="#contacto"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACTO
                    </Link>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="mt-4 bg-white/20 text-white hover:bg-white/30 border-2 border-white"
                      asChild
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link href="#reservar-consulta">RESERVAR CONSULTA</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          <section className="relative py-12 md:py-24 lg:py-32 max-h-[60vh] overflow-hidden bg-gradient-to-r from-[rgb(0,160,153,0.9)] to-[rgb(140,187,147,0.9)]">
            <div className="container relative z-10 mx-auto px-4 lg:px-8 xl:px-12 h-full max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                <Parallax translateY={[-20, 20]}>
                  <div className="flex flex-col items-start space-y-4 pb-32">
                    <span className="text-emerald-800 font-semibold">Médicos Certificados en Cannabis Medicinal</span>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                      Este Es Tu Año Para <span className="text-emerald-800">Sanar</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-[600px]">
                      Obtén tu Tarjeta de Cannabis Medicinal en Puerto Rico con orientación experta. Atención
                      profesional, aprobaciones rápidas y apoyo compasivo durante todo tu proceso.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                        <Link href="https://app.canadoctors.com/signup/canadoctors">Iniciar Solicitud</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-white bg-gray-800 hover:bg-gray-700"
                        asChild
                      >
                        <Link href="#beneficios">Más Información</Link>
                      </Button>
                    </div>
                  </div>
                </Parallax>
                <div className="relative h-full flex items-center justify-center lg:justify-end hidden md:flex">
                  <Parallax translateY={[20, -20]} className="h-full">
                    <div className="relative h-full">
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Video className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-4 right-8 z-10">
                        <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">Dra. Sofia Jaramillo</span>
                            <div className="flex text-emerald-800">
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 right-12 z-10 -translate-y-20">
                        <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500 fill-current" />
                          <span className="text-sm font-medium">Reseñas de Salud</span>
                        </div>
                      </div>
                      <Image
                        src="/images/md/prdoctor.png"
                        alt="Médico de Cannabis Medicinal"
                        width={800}
                        height={1200}
                        className="rounded-2xl object-cover object-center h-[65vh] w-auto -mt-16"
                      />
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </section>

          <section id="beneficios" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Beneficios del Cannabis Medicinal en Puerto Rico
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Manejo del Dolor", description: "Alivio efectivo para condiciones de dolor crónico." },
                  { title: "Reducción de Ansiedad", description: "Ayuda a manejar los síntomas de ansiedad y estrés." },
                  { title: "Mejora del Sueño", description: "Ayuda a lograr un sueño de mejor calidad." },
                  {
                    title: "Control de Náuseas",
                    description: "Reduce las náuseas, especialmente en pacientes con cáncer.",
                  },
                  {
                    title: "Estimulación del Apetito",
                    description: "Ayuda a aumentar el apetito en pacientes con ciertas condiciones.",
                  },
                  {
                    title: "Relajación Muscular",
                    description: "Ayuda a reducir los espasmos musculares y la tensión.",
                  },
                ].map((benefit, index) => (
                  <Parallax key={index} translateY={[20, -20]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="blog" className="py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Últimos Artículos
              </h2>
              {loading ? (
                <p className="text-center">Cargando artículos...</p>
              ) : error ? (
                <p className="text-center text-red-500">Error: {error}</p>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Parallax key={article.id} translateY={[10, -10]}>
                      <Card className="transition-all duration-300 hover:shadow-lg overflow-hidden">
                        <div className="aspect-video relative">
                          <Image
                            src={article.cover?.url || "/placeholder.svg"}
                            alt={article.cover?.alternativeText || article.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-2">
                            <Link href={`/blog/es/${article.slug}`} className="hover:underline">
                              {article.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="line-clamp-3 mb-4">{article.description}</p>
                          <Button variant="outline" asChild>
                            <Link href={`/blog/es/${article.slug}`}>Leer más</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </Parallax>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section id="proceso" className="py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Cómo Obtener Tu Tarjeta de Cannabis Medicinal en Puerto Rico
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: 1,
                    title: "Reservar Consulta",
                    description: "Programa tu cita con un médico certificado de CanaDoctors.",
                  },
                  {
                    step: 2,
                    title: "Evaluación Médica",
                    description: "Discute tu historial médico y condiciones con nuestro médico experto.",
                  },
                  {
                    step: 3,
                    title: "Recibir Certificación",
                    description: "Si se aprueba, recibe tu certificación médica para cannabis medicinal.",
                  },
                  {
                    step: 4,
                    title: "Registro Estatal",
                    description:
                      "Completa tu registro en el Programa de Cannabis Medicinal de Puerto Rico con nuestra guía.",
                  },
                ].map((step, index) => (
                  <Parallax key={index} translateY={[10, -10]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>
                          Paso {step.step}: {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{step.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="servicios" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Nuestros Servicios en Puerto Rico
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Consultas Presenciales",
                    description:
                      "Citas presenciales completas con médicos licenciados en Puerto Rico especializados en cannabis medicinal.",
                  },
                  {
                    title: "Asistencia con la Solicitud",
                    description:
                      "Orientación experta a través del proceso de solicitud del Programa de Cannabis Medicinal de Puerto Rico.",
                  },
                  {
                    title: "Seguimiento Médico",
                    description:
                      "Apoyo continuo y consultas de seguimiento para garantizar resultados óptimos del tratamiento.",
                  },
                  {
                    title: "Recursos Educativos",
                    description:
                      "Acceso a materiales educativos completos sobre el uso del cannabis medicinal y las regulaciones en Puerto Rico.",
                  },
                ].map((service, index) => (
                  <Parallax key={index} translateY={[15, -15]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{service.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonios" className="py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Historias de Éxito de Pacientes
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "María G.",
                    quote:
                      "CanaDoctors hizo que obtener mi tarjeta de cannabis medicinal fuera muy fácil. Sus médicos son conocedores y compasivos.",
                    image: "/images/reviews/sarha.png",
                  },
                  {
                    name: "Roberto S.",
                    quote:
                      "Al principio estaba dudoso, pero el equipo de CanaDoctors me guió en cada paso. Ahora tengo el alivio que necesitaba.",
                    image: "/images/reviews/michael.png",
                  },
                  {
                    name: "Carmen L.",
                    quote: "La consulta presencial fue minuciosa y profesional. ¡Altamente recomendado!",
                    image: "/images/reviews/emily.png",
                  },
                ].map((testimonial, index) => (
                  <Parallax key={index} translateY={[10, -10]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <CardTitle>{testimonial.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>&quot;{testimonial.quote}&quot;</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Preguntas Frecuentes
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {[
                  {
                    question: "¿Quién califica para el cannabis medicinal en Puerto Rico?",
                    answer:
                      "Pacientes con condiciones cualificantes como: Alzheimer, Anorexia, Artritis, Cáncer, Desórdenes de Ansiedad, Esclerosis Múltiple, Epilepsia, Fibromialgia, Hepatitis C, Infección del VIH, Migraña, Parkinson, entre otras. La lista completa está disponible en el sitio web del Departamento de Salud de Puerto Rico.",
                  },
                  {
                    question: "¿Cuánto tiempo toma el proceso de solicitud?",
                    answer:
                      "El proceso generalmente toma de 2 a 3 semanas desde la consulta hasta recibir tu tarjeta de cannabis medicinal.",
                  },
                  {
                    question: "¿Se requieren consultas presenciales?",
                    answer:
                      "Sí, Puerto Rico requiere consultas presenciales para las certificaciones de cannabis medicinal.",
                  },
                  {
                    question: "¿Cuánto cuesta obtener una tarjeta de cannabis medicinal en Puerto Rico?",
                    answer:
                      "El costo incluye la tarifa de solicitud estatal y la tarifa de consulta médica. Contáctanos para obtener información actualizada sobre los precios.",
                  },
                  {
                    question: "¿Cuánto tiempo es válida la tarjeta de cannabis medicinal en Puerto Rico?",
                    answer:
                      "Las tarjetas de cannabis medicinal en Puerto Rico son típicamente válidas por un año, pero pueden variar según la recomendación del médico.",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section id="reservar-consulta" className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para Comenzar Tu Camino?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Reserva tu consulta hoy y da el primer paso hacia el alivio natural con cannabis medicinal.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="https://app.canadoctors.com/signup/canadoctors">Reserva Tu Consulta Ahora</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl py-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="../images/logosCD/logopositivo.svg" alt="Logo de CanaDoctors" width={150} height={60} />
              </Link>
              <p className="text-sm">© 2024 CanaDoctors. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { BlogSidebar } from "@/components/blog-sidebar"
import { ShareButtons } from "@/components/share-buttons"

export default function LicenciaCannabisPage() {
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const articleTitle = "🩺 Cómo obtener tu licencia de cannabis medicinal en Puerto Rico: Guía paso a paso (2025)"
  const articleDescription =
    "Guía completa y actualizada para obtener tu licencia de cannabis medicinal en Puerto Rico de forma 100% online con CanaDoctors. Proceso rápido, seguro y legal."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta
          name="keywords"
          content="licencia cannabis medicinal Puerto Rico, cannabis medicinal PR, CanaDoctors, marihuana medicinal Puerto Rico, licencia cannabis 2025, cannabis terapéutico PR"
        />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png" />
        <meta property="og:site_name" content="CanaDoctors" />
        <meta property="og:locale" content="es_PR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:image" content="/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png" />

        {/* Article specific */}
        <meta property="article:published_time" content="2025-01-07T00:00:00Z" />
        <meta property="article:modified_time" content="2025-01-07T00:00:00Z" />
        <meta property="article:author" content="CanaDoctors" />
        <meta property="article:section" content="Salud" />
        <meta property="article:tag" content="cannabis medicinal" />
        <meta property="article:tag" content="Puerto Rico" />
        <meta property="article:tag" content="licencia médica" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: articleTitle,
              description: articleDescription,
              image: "/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png",
              author: {
                "@type": "Organization",
                name: "CanaDoctors",
              },
              publisher: {
                "@type": "Organization",
                name: "CanaDoctors",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
              datePublished: "2025-01-07",
              dateModified: "2025-01-07",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": currentUrl,
              },
            }),
          }}
        />
      </Head>

      <SiteHeader />

      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image
                  src="/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png"
                  alt="Licencia de cannabis medicinal en Puerto Rico - Guía paso a paso"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>

              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">
                  🩺 Cómo obtener tu licencia de cannabis medicinal en Puerto Rico: Guía paso a paso (2025)
                </CardTitle>

                <p className="text-sm text-muted-foreground">Publicado el 07/01/2025</p>

                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>

              <CardContent className="prose prose-lg prose-green max-w-none">
                {/* Introducción */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Introducción</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    El uso de cannabis medicinal en Puerto Rico está regulado desde 2017, y cada vez más pacientes
                    buscan alternativas naturales para tratar condiciones como dolor crónico, ansiedad, insomnio,
                    artritis, entre muchas otras.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Si estás considerando iniciar un tratamiento, el primer paso es obtener tu licencia oficial del
                    Departamento de Salud de Puerto Rico. En CanaDoctors te ayudamos a hacerlo de forma rápida, segura y
                    100% online.
                  </p>
                </div>

                {/* ¿Quién puede solicitar? */}
                <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                    ✅ ¿Quién puede solicitar la licencia de cannabis medicinal en Puerto Rico?
                  </h2>
                  <p className="mb-4">
                    Según la Ley Núm. 42-2017 y el reglamento vigente de la Junta Reglamentadora del Cannabis Medicinal,
                    pueden solicitar la licencia:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personas mayores de 21 años.</li>
                    <li>
                      Menores de edad con condiciones médicas aprobadas (con consentimiento de sus padres o tutor
                      legal).
                    </li>
                    <li>
                      Residentes de Puerto Rico (también se puede solicitar como visitante con visa médica especial).
                    </li>
                  </ul>
                </div>

                {/* Requisitos principales */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                    🧾 Requisitos principales
                  </h2>
                  <p className="mb-4">Para obtener la licencia, se necesita:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Evaluación médica con un profesional certificado.</li>
                    <li>Certificado médico digital firmado electrónicamente.</li>
                    <li>Formulario completo con información personal.</li>
                    <li>Copia de una identificación válida (licencia de conducir o tarjeta electoral).</li>
                    <li>Foto tipo pasaporte.</li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm">
                      <strong>⚠️ Importante:</strong> la foto debe ser en formato 4x4, con fondo claro, sin gorras,
                      sombreros, ni accesorios con brillo o lentejuelas, para que sea aceptada por el Departamento de
                      Salud.
                    </p>
                  </div>
                </div>

                {/* Proceso paso a paso */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-6 text-green-700 flex items-center gap-2">
                    🩺 Paso a paso para obtener tu licencia (100% digital con CanaDoctors)
                  </h2>

                  <div className="space-y-6">
                    {/* Paso 1 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Registrate y completá el formulario inicial</h3>
                        <p className="mb-3">Accedé a nuestro sistema e ingresá tus datos personales.</p>
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <Link href="https://app.canadoctors.com/signup/canadoctors">👉 Registrarme en CanaDoctors</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Te contactamos para tu cita médica virtual</h3>
                        <p>
                          Nuestro equipo se comunicará con vos para agendar una videollamada con uno de nuestros médicos
                          certificados. La consulta es confidencial y toma menos de 30 minutos.
                        </p>
                      </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Obtené tu recomendación médica</h3>
                        <p>
                          El profesional evaluará tu condición y, si calificás, emitirá una recomendación médica firmada
                          digitalmente.
                        </p>
                      </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Nosotros iniciamos el proceso ante el Departamento de Salud
                        </h3>
                        <p>
                          Una vez emitida tu recomendación, CanaDoctors se encarga de todo el proceso administrativo.
                          Vos no tenés que hacer ningún trámite adicional.
                        </p>
                      </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        5
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Recibí tu licencia digital y tu voucher de beneficios</h3>
                        <p>
                          Te avisamos cuando esté todo finalizado. Recibirás tu licencia oficial digital lista para usar
                          en dispensarios autorizados en todo Puerto Rico, junto con tu voucher exclusivo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Condiciones que califican */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                    💡 ¿Qué condiciones califican?
                  </h2>
                  <p className="mb-4">Algunas de las condiciones aprobadas por el Departamento de Salud incluyen:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dolor crónico</li>
                      <li>Cáncer</li>
                      <li>VIH/SIDA</li>
                      <li>Artritis</li>
                      <li>Epilepsia</li>
                    </ul>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Trastornos de ansiedad</li>
                      <li>Insomnio severo</li>
                      <li>Trastorno de estrés postraumático (PTSD)</li>
                      <li>Enfermedad de Crohn</li>
                      <li>Y muchas otras</li>
                    </ul>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <Link href="https://www.salud.pr.gov/CMS/364">👉 Ver lista completa de condiciones y agendar mi cita</Link>
                  </Button>
                </div>

                {/* Por qué elegir CanaDoctors */}
                <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                    🤝 ¿Por qué elegir CanaDoctors?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span>Médicos certificados por la Junta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span>Atención 100% remota</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span>Seguridad y confidencialidad total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✅</span>
                      <span>Soporte técnico y seguimiento personalizado</span>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <span className="text-green-600">✅</span>
                      <span>Aprobación rápida, en el mismo día en la mayoría de los casos</span>
                    </div>
                  </div>
                </div>

                {/* Call to Action Final */}
                <div className="mb-8 bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
                  <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                    📲 Empezá tu proceso hoy
                  </h2>
                  <p className="text-lg mb-6">
                    Obtener tu licencia nunca fue tan fácil.
                    <br />
                    En CanaDoctors te acompañamos en todo el camino.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                      <Link href="https://app.canadoctors.com/signup/canadoctors">👉 Solicitá tu evaluación médica ahora</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
                    >
                    <Link
  href="https://wa.me/17876062892?text=Hola%2C%20quer%C3%ADa%20informaci%C3%B3n%20para%20obtener%20mi%20licencia%20o%20renovar%20la%20m%C3%ADa"
  target="_blank"
  rel="noopener noreferrer"
>
  👉 Consultá a nuestro equipo por WhatsApp
</Link>

                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button variant="outline" size="lg" asChild className="mt-8 bg-transparent">
              <Link href="/blog/es" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Volver al blog
              </Link>
            </Button>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BlogSidebar currentSlug="como-obtener-licencia-cannabis-medicinal-puerto-rico-2025" />
          </aside>
        </div>
      </div>
    </>
  )
}

"use client"

import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { BlogSidebar } from "@/components/blog-sidebar"
import { ShareButtons } from "@/components/share-buttons"

export default function DiferenciasGeneticasCannabis() {
  const [currentUrl, setCurrentUrl] = useState("")

  useState(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }
  })

  const title =
    "Diferencias entre genéticas Sativa, Índica e Híbrida: ¿Cuál es mejor para tu tratamiento con cannabis medicinal?"
  const description =
    "Descubre las diferencias entre sativas, índicas e híbridas de cannabis medicinal. Guía completa sobre qué genética elegir según tu condición médica en Puerto Rico."
  const keywords =
    "cannabis medicinal, sativa, indica, hibrida, geneticas cannabis, tratamiento cannabis, cannabis Puerto Rico, CanaDoctors"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "CanaDoctors",
    },
    publisher: {
      "@type": "Organization",
      name: "CanaDoctors",
      logo: {
        "@type": "ImageObject",
        url: "https://canadoctors.com/logo.png",
      },
    },
    datePublished: "2025-01-07",
    dateModified: "2025-01-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    image: {
      "@type": "ImageObject",
      url: "/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png",
      width: 800,
      height: 400,
    },
  }

  return (
    <>
      <Head>
        <title>{title} | CanaDoctors</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png" />
        <meta property="og:site_name" content="CanaDoctors" />
        <meta property="article:published_time" content="2025-01-07" />
        <meta property="article:author" content="CanaDoctors" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png" />

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <SiteHeader />

      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image
                  src="/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png"
                  alt="Diferencias entre genéticas de cannabis medicinal: Sativa, Índica e Híbrida"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>

              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                  🌿 Diferencias entre genéticas Sativa, Índica e Híbrida: ¿Cuál es mejor para tu tratamiento con
                  cannabis medicinal?
                </CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 01/07/2025</p>
                <ShareButtons url={currentUrl} title={title} />
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none">
                {/* Introducción */}
                <div className="bg-green-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-800">Introducción</h2>
                  <p className="text-gray-700 leading-relaxed">
                    El cannabis medicinal es una herramienta terapéutica cada vez más utilizada en Puerto Rico y el
                    mundo. Existen diferentes <strong>genéticas</strong> de cannabis, cada una con perfiles únicos de
                    cannabinoides y terpenos que influyen en sus efectos. Las tres categorías principales son:{" "}
                    <strong>sativas</strong>,<strong>índicas</strong> e <strong>híbridas</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Comprender las diferencias entre estas variedades puede ayudarte, junto a tu médico, a elegir la que
                    mejor se adapte a tu condición de salud.
                  </p>
                </div>

                {/* Tabla comparativa */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    🌱 ¿Qué diferencia a una sativa de una índica?
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Característica</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Sativa</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Índica</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Híbrida</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Origen</td>
                          <td className="border border-gray-300 p-3">Regiones ecuatoriales (Colombia, Tailandia)</td>
                          <td className="border border-gray-300 p-3">Regiones montañosas (India, Pakistán)</td>
                          <td className="border border-gray-300 p-3">Cruce entre sativa e índica</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">Altura de planta</td>
                          <td className="border border-gray-300 p-3">Alta y delgada</td>
                          <td className="border border-gray-300 p-3">Baja y robusta</td>
                          <td className="border border-gray-300 p-3">Variable según dominante</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Efectos</td>
                          <td className="border border-gray-300 p-3">Energizantes, mentales, estimulantes</td>
                          <td className="border border-gray-300 p-3">Relajantes, físicos, sedantes</td>
                          <td className="border border-gray-300 p-3">Combinación de ambos</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">Usos comunes</td>
                          <td className="border border-gray-300 p-3">Depresión, fatiga, TDAH</td>
                          <td className="border border-gray-300 p-3">Dolor, insomnio, ansiedad</td>
                          <td className="border border-gray-300 p-3">Según perfil dominante</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Mejor horario</td>
                          <td className="border border-gray-300 p-3">Durante el día</td>
                          <td className="border border-gray-300 p-3">Por la noche</td>
                          <td className="border border-gray-300 p-3">Depende del perfil genético</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Respaldo científico */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-800">🧪 Respaldo científico: ¿cómo actúan?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Las diferencias no solo son morfológicas. Cada variedad tiene un{" "}
                    <strong>perfil distinto de cannabinoides y terpenos</strong>, responsables de sus efectos.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Sativas</strong> suelen tener más <strong>THC</strong> y terpenos como{" "}
                      <strong>limoneno</strong> o<strong>pineno</strong>, que favorecen el enfoque y la energía.
                    </li>
                    <li>
                      <strong>Índicas</strong> suelen tener mayor proporción de <strong>CBD</strong>,{" "}
                      <strong>CBN</strong>, y terpenos como <strong>mirceno</strong> o <strong>linalol</strong>, con
                      efecto relajante y analgésico.
                    </li>
                    <li>
                      <strong>Híbridas</strong> combinan estos perfiles y pueden adaptarse a terapias más
                      personalizadas.
                    </li>
                  </ul>
                  <blockquote className="mt-4 p-4 bg-white rounded border-l-4 border-blue-500 italic">
                    🧠 <em>Un estudio de Ethan Russo (2007)</em> sostiene que los efectos del cannabis están más ligados
                    a los <strong>terpenos y ratios THC/CBD</strong> que a la clasificación botánica clásica.
                  </blockquote>
                </div>

                {/* Patologías por genética */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    💊 ¿Qué patologías pueden tratarse con cada genética?
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Sativa */}
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-yellow-800">✔️ Sativa (estimulante y cerebral)</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Depresión</li>
                        <li>• Fatiga crónica</li>
                        <li>• Trastornos del ánimo</li>
                        <li>• Trastorno por déficit de atención (TDAH)</li>
                        <li>• Anorexia / pérdida de apetito</li>
                      </ul>
                    </div>

                    {/* Índica */}
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-purple-800">✔️ Índica (relajante y corporal)</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Dolor crónico</li>
                        <li>• Insomnio</li>
                        <li>• Ansiedad generalizada</li>
                        <li>• Trastornos musculares (espasmos, fibromialgia)</li>
                        <li>• Náuseas y vómitos asociados a quimioterapia</li>
                      </ul>
                    </div>

                    {/* Híbrida */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-green-800">✔️ Híbrida (uso personalizado)</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Artritis</li>
                        <li>• Epilepsia</li>
                        <li>• Estrés postraumático (PTSD)</li>
                        <li>• Enfermedades autoinmunes</li>
                        <li>• Dolor neuropático</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Formas de aplicación */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    💧 Formas de aplicación del cannabis medicinal
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La elección de la genética va de la mano con la <strong>forma de administración</strong>, que puede
                    afectar tanto el inicio como la duración del efecto terapéutico:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-green-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold">Vía de administración</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Ejemplo</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Inicio de acción</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Duración</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">Uso común</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Sublingual</td>
                          <td className="border border-gray-300 p-3">Aceite debajo de la lengua</td>
                          <td className="border border-gray-300 p-3">15-30 min</td>
                          <td className="border border-gray-300 p-3">4-6 h</td>
                          <td className="border border-gray-300 p-3">Dolor crónico, ansiedad</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">Inhalación</td>
                          <td className="border border-gray-300 p-3">Vaporizador, flor seca</td>
                          <td className="border border-gray-300 p-3">1-5 min</td>
                          <td className="border border-gray-300 p-3">2-4 h</td>
                          <td className="border border-gray-300 p-3">Episodios agudos, insomnio</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium">Oral</td>
                          <td className="border border-gray-300 p-3">Cápsulas, comestibles</td>
                          <td className="border border-gray-300 p-3">30-90 min</td>
                          <td className="border border-gray-300 p-3">6-8 h</td>
                          <td className="border border-gray-300 p-3">Uso diario, epilepsia</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">Tópico</td>
                          <td className="border border-gray-300 p-3">Cremas, geles, parches</td>
                          <td className="border border-gray-300 p-3">Variable</td>
                          <td className="border border-gray-300 p-3">Variable</td>
                          <td className="border border-gray-300 p-3">Artritis, inflamación local</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <p className="text-gray-700">
                      ⚠️{" "}
                      <em>
                        Siempre consultá con un médico certificado antes de comenzar un tratamiento. En CanaDoctors te
                        acompañamos paso a paso.
                      </em>
                    </p>
                  </div>
                </div>

                {/* Cómo elegir */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">🧭 ¿Cómo elegir la variedad adecuada?</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En <strong>CanaDoctors</strong>, nuestros médicos evaluarán tu caso clínico de forma personalizada y
                    te ayudarán a seleccionar la variedad y forma de uso ideal para vos, considerando tus síntomas,
                    estilo de vida y objetivos terapéuticos.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                      <Link href="https://form.canadoctors.com/">Solicitá tu evaluación médica ahora</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="https://wa.me/17876062892?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20diferencias%20entre%20las%20gen%C3%A9ticas%20de%20cannabis%20medicinal">
                        Consultá por WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Fuentes */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">📚 Fuentes consultadas:</h2>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • Russo, E. (2007).{" "}
                      <em>Taming THC: potential cannabis synergy and phytocannabinoid-terpenoid entourage effects</em>.
                      British Journal of Pharmacology.
                    </li>
                    <li>
                      • Hazekamp, A. et al. (2016). <em>Cannabis: From Cultivar to Chemovar</em>. Drug Testing and
                      Analysis.
                    </li>
                    <li>• Departamento de Salud de Puerto Rico – Junta Reglamentadora del Cannabis Medicinal.</li>
                  </ul>
                </div>

                {/* Call to action final */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">📲 Empezá tu tratamiento personalizado hoy</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Nuestros médicos certificados te ayudarán a elegir la genética ideal para tu condición.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary">
                      <Link href="https://form.canadoctors.com/">Obtener mi licencia ahora</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-green-700"
                    >
                      <Link href="https://wa.me/17876062892?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20diferencias%20entre%20las%20gen%C3%A9ticas%20de%20cannabis%20medicinal">
                        Hablar con un especialista
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
            <BlogSidebar currentSlug="diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal" />
          </aside>
        </div>
      </div>
    </>
  )
}

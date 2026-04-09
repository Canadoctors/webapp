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

export default function ProgramaEncrucijadaPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "El Cannabis Medicinal en Puerto Rico: Un Programa en Encrucijada (2026)"
  const articleDescription = "Análisis del estado del programa de cannabis medicinal en Puerto Rico basado en el estudio de V2A Consulting para la JRCM. Datos de pacientes, médicos, precios y proyecciones."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="cannabis medicinal puerto rico 2026, mercado cannabis PR, estadísticas cannabis puerto rico, JRCM, V2A Consulting, programa cannabis medicinal" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/cannabis-medicinal-puerto-rico-programa-encrucijada-2026" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://canadoctors.com/images/blog/cannabis-medicinal-pr-encrucijada-2026.png" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://canadoctors.com/images/blog/cannabis-medicinal-pr-encrucijada-2026.png" />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: articleTitle, description: articleDescription, image: "https://canadoctors.com/images/blog/cannabis-medicinal-pr-encrucijada-2026.png", author: { "@type": "Organization", name: "CanaDoctors" }, publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } }, datePublished: "2026-04-08", inLanguage: "es" }) }} />
      </Head>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image src="/images/blog/cannabis-medicinal-pr-encrucijada-2026.png" alt="Estado del programa de cannabis medicinal en Puerto Rico 2026" fill className="object-cover" priority />
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026 | Fuente: V2A Consulting / JRCM</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos, tratamientos ni consejos médicos. Toda decisión de tratamiento debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017 del Departamento de Salud de Puerto Rico.</p>
                </div>

                <div className="mb-8">
                  <p className="text-lg leading-relaxed mb-4">El programa de cannabis medicinal de Puerto Rico atraviesa un momento crítico. Según la actualización del <strong>Estudio de Mercado de la Industria del Cannabis Medicinal en Puerto Rico</strong> elaborado por V2A Consulting para la Junta Reglamentadora de Cannabis Medicinal (JRCM), presentado en febrero de 2026, el programa muestra señales claras de maduración y tensión estructural que requieren atención urgente.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Un Programa que Alcanzó su Techo</h2>
                  <p className="text-lg leading-relaxed mb-4">Luego de años de crecimiento acelerado, el programa registró su <strong>primer año de caída en renovaciones de licencias en 2025</strong>, con una reducción del 12%. Los datos son reveladores:</p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
                    <ul className="space-y-2">
                      <li>Base de pacientes activos estable entre <strong>100,000 y 120,000 por seis años consecutivos</strong>, cerrando 2025 en <strong>108,000 pacientes</strong></li>
                      <li>Pacientes nuevos en pico durante 2020-2021, en <strong>declive constante</strong> desde entonces</li>
                      <li>Proporción de pacientes que no renuevan: pasó del <strong>30% en 2018 al 60% en 2024</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">El Médico: El Eslabón más Débil de la Cadena</h2>
                  <p className="text-lg leading-relaxed mb-4">Uno de los hallazgos más preocupantes tiene que ver con la participación médica:</p>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-4">
                    <ul className="space-y-2">
                      <li>En 2025, solo <strong>84 doctores permanecían activos</strong> haciendo recomendaciones — una caída del <strong>69% desde el pico de 273 médicos</strong> en 2019</li>
                      <li>El <strong>97% de las recomendaciones</strong> son realizadas por médicos generalistas</li>
                      <li>La participación de especialistas <strong>prácticamente desapareció</strong></li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed mb-4">Puerto Rico es, entre todas las jurisdicciones comparadas, la que <strong>mayores barreras de entrada impone a los médicos</strong>:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Licencia específica ante la JRCM con arancel de <strong>$1,500</strong></li>
                    <li>Educación continua de <strong>6 horas anuales</strong></li>
                    <li>Evidencia de relación médico-paciente <em>bona fide</em></li>
                    <li>Mantenimiento de récords médicos por <strong>5 años</strong></li>
                  </ul>
                  <p className="text-lg leading-relaxed">En comparación, jurisdicciones como Oklahoma o Canadá permiten que <strong>cualquier médico practicante</strong> recomiende cannabis medicinal sin certificaciones adicionales.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Exceso de Oferta y Presión sobre los Precios</h2>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <ul className="space-y-2">
                      <li>Oferta total superó la demanda en <strong>27 millones de gramos</strong> en 2025</li>
                      <li>Capacidad instalada excede en un <strong>31%</strong> los pies cuadrados necesarios</li>
                      <li>Precio promedio por gramo de flor cayó <strong>69%</strong>: de $8.91 (2020) a <strong>$2.73</strong> (2025)</li>
                      <li>Consumo individual aumentó de <strong>42 a 67 gramos mensuales</strong> (2023-2025)</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed">Según entrevistas a 33 participantes del programa, se estima que el <strong>80% de los establecimientos quebrarán eventualmente</strong>. Solo las operaciones más grandes pueden sobrevivir la consolidación del mercado.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Las Condiciones Cambian, el Perfil del Paciente También</h2>
                  <p className="text-lg leading-relaxed mb-4">Se documenta un cambio significativo en el perfil clínico:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Condiciones psicológicas (insomnio, ansiedad, depresión) = <strong>61% de recomendaciones en 2025</strong> vs 42% en 2018</li>
                    <li>Condiciones físicas (dolor crónico, artritis, espasmos) en <strong>declive constante</strong></li>
                    <li>Segmento <strong>21-30 años</strong> es el que más creció</li>
                    <li>Población <strong>mayor de 70 años</strong> disminuyó en el programa a pesar de crecimiento demográfico</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Recomendaciones del Estudio</h2>
                  <h3 className="text-lg font-semibold mb-3">Política Pública</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Eliminar el requisito de licenciamiento</strong> de médicos al programa</li>
                    <li>Destinar fondos a <strong>estudios clínicos</strong> sobre cannabis</li>
                    <li>Incluir <strong>representación de pacientes</strong> en la JRCM</li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-3">Operaciones de la JRCM</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Aprovechar tecnología y <strong>análisis de datos</strong> (BioTrack) para fiscalización</li>
                    <li>Generar <strong>reportes de alertas automatizados</strong></li>
                    <li>Mayor <strong>visibilidad pública</strong> sobre el estado del programa (como Florida y Colorado)</li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-3">Licencias de Dispensarios</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Decisiones basadas en <strong>índice de saturación municipal</strong></li>
                    <li>Métricas de concentración de mercado (índice HHI)</li>
                    <li>Satisfacción de pacientes y ventas por establecimiento</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Proyecciones para 2028</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead><tr className="bg-green-50">
                        <th className="border border-gray-200 p-3 text-left">Escenario</th>
                        <th className="border border-gray-200 p-3 text-left">Pacientes</th>
                        <th className="border border-gray-200 p-3 text-left">Demanda (gramos)</th>
                      </tr></thead>
                      <tbody>
                        <tr><td className="border border-gray-200 p-3">Sin cambios de política</td><td className="border border-gray-200 p-3">En declive</td><td className="border border-gray-200 p-3">125 millones</td></tr>
                        <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold text-green-700">Reformas regulatorias completas</td><td className="border border-gray-200 p-3 font-semibold">242,000</td><td className="border border-gray-200 p-3 font-semibold">235 millones</td></tr>
                        <tr><td className="border border-gray-200 p-3">Conservador (intermedio)</td><td className="border border-gray-200 p-3">173,000</td><td className="border border-gray-200 p-3">175 millones</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿Necesitas tu tarjeta de cannabis medicinal?</h3>
                  <p className="text-green-100 mb-4">CanaDoctors te conecta con médicos certificados de forma rápida.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación</Link>
                  </Button>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg text-sm text-gray-600 mb-6">
                  <h3 className="font-semibold mb-2">Fuente</h3>
                  <p>V2A Consulting. &ldquo;Actualización del Estudio de Mercado de la Industria del Cannabis Medicinal en Puerto Rico — Resumen Ejecutivo de los resultados para la Junta de Directores JRCM.&rdquo; RFP-SP-2022-2023-038-JRCM. Febrero 26, 2026. Datos provistos por XUVO Technologies, BioTrack PR y la JRCM.</p>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> Este artículo es informativo y basado en datos públicos. CanaDoctors es una plataforma que conecta pacientes con médicos certificados y no ofrece diagnósticos ni consejos médicos.</p>
                </div>
                <div className="mt-8"><Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button></div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar />
        </div>
      </div>
    </>
  )
}

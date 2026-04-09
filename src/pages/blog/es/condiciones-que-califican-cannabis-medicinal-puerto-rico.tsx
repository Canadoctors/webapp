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

export default function CondicionesCalificanPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])

  const articleTitle = "Condiciones que califican para cannabis medicinal en Puerto Rico: Lista completa (2026)"
  const articleDescription = "Conoce las 25 condiciones debilitantes que califican para obtener tu tarjeta de cannabis medicinal en Puerto Rico según la Ley 42-2017 y el Reglamento 9038."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="condiciones cannabis medicinal puerto rico, enfermedades cannabis medicinal, dolor crónico cannabis PR, ansiedad cannabis medicinal, lista condiciones cannabis PR, Ley 42-2017" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/condiciones-que-califican-cannabis-medicinal-puerto-rico" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://canadoctors.com/blog/es/condiciones-que-califican-cannabis-medicinal-puerto-rico" />
        <meta property="og:image" content="/images/blog/condiciones-cannabis-medicinal-pr.png" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <meta property="article:author" content="CanaDoctors" />
        <meta property="article:section" content="Guías" />
        <meta property="article:tag" content="condiciones debilitantes" />
        <meta property="article:tag" content="cannabis medicinal" />
        <meta property="article:tag" content="Puerto Rico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: articleTitle, description: articleDescription,
          image: "/images/blog/condiciones-cannabis-medicinal-pr.png",
          author: { "@type": "Organization", name: "CanaDoctors" },
          publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } },
          datePublished: "2026-04-08", dateModified: "2026-04-08",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://canadoctors.com/blog/es/condiciones-que-califican-cannabis-medicinal-puerto-rico" },
          inLanguage: "es", articleSection: "Guías",
          keywords: "condiciones cannabis medicinal, puerto rico, Ley 42-2017"
        }) }} />
      </Head>

      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <div className="w-full h-full bg-gradient-to-br from-brand-primary to-brand-tertiary flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold text-center px-8">Condiciones que Califican<br />Cannabis Medicinal PR</h2>
                </div>
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">

                {/* Disclaimer */}
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos, tratamientos ni consejos médicos. Toda decisión de tratamiento debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017 del Departamento de Salud de Puerto Rico.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Introducción</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    El Programa de Cannabis Medicinal de Puerto Rico, establecido bajo la <strong>Ley Núm. 42-2017</strong> y regulado por el <strong>Reglamento 9038</strong>, define una lista específica de condiciones debilitantes que califican a los pacientes para obtener una tarjeta de cannabis medicinal. Según datos de la Junta Reglamentadora de Cannabis Medicinal (JRCM), el programa cuenta con más de 108,000 pacientes activos.
                  </p>
                  <p className="text-lg leading-relaxed">
                    A continuación, presentamos la lista completa de las 25 condiciones reconocidas oficialmente, con información sobre cómo el cannabis medicinal puede contribuir al manejo de cada una bajo supervisión médica.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Las 25 Condiciones Debilitantes Reconocidas</h2>
                  <p className="mb-4">Según el Reglamento 9038 de la JRCM, las siguientes condiciones califican para el uso de cannabis medicinal en Puerto Rico:</p>
                </div>

                {/* Condiciones mentales */}
                <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">Condiciones de Salud Mental</h3>
                  <p className="mb-3">Las condiciones psicológicas representaron el <strong>61% de todas las recomendaciones</strong> en 2025, según el estudio de V2A Consulting para la JRCM:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Desórdenes de Ansiedad</strong> (según definidos en el DSM-V) — Estudios como el de Blessing et al. (2015, <em>Neurotherapeutics</em>) demuestran que el CBD tiene propiedades ansiolíticas significativas.</li>
                    <li><strong>Depresión</strong> — La investigación de Linge et al. (2016, <em>Neuropharmacology</em>) mostró efectos antidepresivos del CBD en modelos preclínicos.</li>
                    <li><strong>Insomnio</strong> — Shannon et al. (2019, <em>The Permanente Journal</em>) reportaron mejoras en el sueño en el 66.7% de los pacientes tratados con CBD.</li>
                    <li><strong>Trastorno Bipolar</strong></li>
                    <li><strong>Síndrome de Estrés Postraumático (PTSD)</strong> — Elms et al. (2019, <em>Journal of Alternative and Complementary Medicine</em>) documentaron reducciones significativas en síntomas de PTSD.</li>
                    <li><strong>Autismo</strong></li>
                  </ul>
                </div>

                {/* Condiciones de dolor */}
                <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">Condiciones de Dolor y Musculoesqueléticas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Dolor crónico</strong> — La National Academies of Sciences (2017) concluyó que existe evidencia sustancial de que el cannabis es efectivo para el dolor crónico en adultos.</li>
                    <li><strong>Artritis</strong> — Blake et al. (2006, <em>Rheumatology</em>) encontraron mejoras significativas en el dolor y la calidad del sueño.</li>
                    <li><strong>Fibromialgia</strong> — Sagy et al. (2019, <em>Journal of Clinical Medicine</em>) reportaron mejoras en dolor y calidad de vida en el 81% de los pacientes.</li>
                    <li><strong>Migraña</strong></li>
                    <li><strong>Neuropatías Periferales</strong></li>
                    <li><strong>Lesiones en el Cordón Espinal</strong></li>
                    <li><strong>Náuseas severas o espasmos musculares persistentes</strong></li>
                  </ul>
                </div>

                {/* Condiciones neurológicas */}
                <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">Condiciones Neurológicas y Degenerativas</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Epilepsia</strong> — Devinsky et al. (2017, <em>New England Journal of Medicine</em>) demostraron que el CBD redujo las convulsiones en un 39% en pacientes con síndrome de Dravet.</li>
                    <li><strong>Alzheimer</strong></li>
                    <li><strong>Parkinson</strong> — Lotan et al. (2014, <em>Clinical Neuropharmacology</em>) observaron mejoras en temblores, rigidez y bradicinesia.</li>
                    <li><strong>Esclerosis Múltiple</strong></li>
                    <li><strong>Esclerosis Lateral Amiotrófica (ELA)</strong></li>
                    <li><strong>Enfermedad Inflamatoria Intestinal</strong></li>
                  </ul>
                </div>

                {/* Otras condiciones */}
                <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">Otras Condiciones</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cáncer</strong> y el tratamiento de quimioterapia — Whiting et al. (2015, <em>JAMA</em>) encontraron evidencia de que los cannabinoides reducen náuseas y vómitos inducidos por quimioterapia.</li>
                    <li><strong>VIH Positivo / SIDA</strong></li>
                    <li><strong>Hepatitis C</strong></li>
                    <li><strong>Glaucoma</strong></li>
                    <li><strong>Anorexia</strong></li>
                    <li><strong>Enfermedades incurables y avanzadas</strong> que requieran cuidado paliativo</li>
                    <li><strong>Cualquier condición que cause caquexia</strong></li>
                    <li>Cualquier otra condición que el <strong>Cuerpo Asesor Médico</strong> recomiende y la Junta apruebe mediante Determinación Administrativa</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Cómo saber si mi condición califica?</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Si padeces alguna de las condiciones listadas, el siguiente paso es una <strong>evaluación médica con un profesional certificado</strong>. El médico autorizado evaluará tu historial clínico y determinará si el cannabis medicinal es una alternativa terapéutica apropiada para tu caso.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Es importante saber que incluso si tu condición no aparece explícitamente en la lista, el <strong>Cuerpo Asesor Médico de la JRCM</strong> puede aprobar condiciones adicionales. Consulta con un médico autorizado para explorar tus opciones.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Requisitos para pacientes</h2>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Ser mayor de 21 años (menores requieren 2 recomendaciones médicas + autorización de padres)</li>
                    <li>Tener una condición debilitante de la lista oficial</li>
                    <li>Obtener recomendación de un médico autorizado ante la JRCM</li>
                    <li>Completar el registro ante el Departamento de Salud de PR</li>
                  </ul>
                  <p className="text-lg leading-relaxed">Los pacientes no residentes de Puerto Rico también pueden acceder al programa con documentación válida de su jurisdicción de origen.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Obtén tu tarjeta con CanaDoctors</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    En CanaDoctors te conectamos con médicos certificados que evaluarán tu condición y te guiarán en todo el proceso para obtener tu tarjeta de cannabis medicinal en Puerto Rico.
                  </p>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">¿Tu condición califica?</h3>
                  <p className="text-green-100 mb-4">Consulta con un médico certificado hoy mismo.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación Médica</Link>
                  </Button>
                </div>

                {/* References */}
                <div className="mt-8 p-5 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <h3 className="font-semibold mb-2">Referencias</h3>
                  <ul className="space-y-1">
                    <li>Blessing, E.M. et al. (2015). Cannabidiol as a Potential Treatment for Anxiety Disorders. <em>Neurotherapeutics</em>, 12(4), 825-836.</li>
                    <li>Devinsky, O. et al. (2017). Trial of Cannabidiol for Drug-Resistant Seizures in the Dravet Syndrome. <em>NEJM</em>, 376(21), 2011-2020.</li>
                    <li>National Academies of Sciences (2017). The Health Effects of Cannabis and Cannabinoids.</li>
                    <li>Shannon, S. et al. (2019). Cannabidiol in Anxiety and Sleep. <em>The Permanente Journal</em>, 23, 18-041.</li>
                    <li>Whiting, P.F. et al. (2015). Cannabinoids for Medical Use: A Systematic Review. <em>JAMA</em>, 313(24), 2456-2473.</li>
                    <li>V2A Consulting (2026). Actualización del Estudio de Mercado — JRCM. RFP-SP-2022-2023-038-JRCM.</li>
                    <li>Ley Núm. 42-2017 y Reglamento 9038 del Departamento de Salud de Puerto Rico.</li>
                  </ul>
                </div>

                {/* Disclaimer bottom */}
                <div className="mt-6 bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> Este artículo es meramente informativo. CanaDoctors es una plataforma que conecta pacientes con médicos certificados y no ofrece diagnósticos ni consejos médicos. Consulta siempre con un profesional de la salud autorizado.</p>
                </div>

                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/blog/es">← Volver al blog</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="condiciones-que-califican-cannabis-medicinal-puerto-rico" />
        </div>
      </div>
    </>
  )
}

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

export default function MedicinalVsRecreativoPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "Cannabis medicinal vs. recreativo: Diferencias clave que debes conocer"
  const articleDescription = "Entiende las diferencias fundamentales entre el cannabis medicinal y recreativo, el marco legal en Puerto Rico bajo la Ley 42-2017 y por qué importa."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="cannabis medicinal vs recreativo, diferencia cannabis medicinal, uso medicinal cannabis, cannabis legal puerto rico, Ley 42-2017" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/cannabis-medicinal-vs-recreativo-diferencias" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: articleTitle, description: articleDescription, author: { "@type": "Organization", name: "CanaDoctors" }, publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } }, datePublished: "2026-04-08", inLanguage: "es" }) }} />
      </Head>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image src="/images/blog/cannabis-medicinal-vs-recreativo.png" alt="Cannabis medicinal vs recreativo - diferencias clave" fill className="object-cover" priority />
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos ni consejos médicos. Toda decisión de tratamiento debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Introducción</h2>
                  <p className="text-lg leading-relaxed mb-4">Existe una confusión común entre el cannabis medicinal y el recreativo. Aunque provienen de la misma planta, las diferencias en propósito, regulación, calidad y acceso son significativas. En Puerto Rico, <strong>solo el cannabis medicinal es legal</strong>, regulado bajo la Ley Núm. 42-2017 y el Reglamento 9038.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué es el cannabis medicinal?</h2>
                  <p className="text-lg leading-relaxed mb-4">Según el Reglamento 9038 de la JRCM, el cannabis medicinal se define como: <em>&ldquo;todo compuesto, producto, derivado, mezcla o preparación de todas las partes de la planta Cannabis Sativa y Cannabis Indica y cualquier híbrido de éstas, de sus semillas, de su flor o de su resina incluyendo el cannabidiol.&rdquo;</em></p>
                  <p className="text-lg leading-relaxed">Se utiliza como <strong>alternativa terapéutica paliativa</strong> para condiciones debilitantes, bajo prescripción de un médico autorizado y con seguimiento clínico. Los productos son analizados en laboratorio, con concentraciones estandarizadas de cannabinoides (THC, CBD, etc.).</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué es el cannabis recreativo?</h2>
                  <p className="text-lg leading-relaxed mb-4">El cannabis recreativo se refiere al uso de la planta con fines de entretenimiento o placer personal, sin prescripción médica ni supervisión clínica. <strong>En Puerto Rico, el uso recreativo del cannabis es ilegal.</strong> Solo el uso medicinal está autorizado bajo el marco de la Ley 42-2017.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Principales diferencias</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 text-sm">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="border border-gray-200 p-3 text-left font-semibold">Aspecto</th>
                          <th className="border border-gray-200 p-3 text-left font-semibold text-green-700">Cannabis Medicinal</th>
                          <th className="border border-gray-200 p-3 text-left font-semibold text-gray-500">Cannabis Recreativo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-gray-200 p-3 font-medium">Propósito</td><td className="border border-gray-200 p-3">Tratamiento terapéutico de condiciones debilitantes</td><td className="border border-gray-200 p-3">Entretenimiento personal</td></tr>
                        <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Legalidad en PR</td><td className="border border-gray-200 p-3 text-green-700 font-semibold">Legal (Ley 42-2017)</td><td className="border border-gray-200 p-3 text-red-600 font-semibold">Ilegal</td></tr>
                        <tr><td className="border border-gray-200 p-3 font-medium">Supervisión médica</td><td className="border border-gray-200 p-3">Requiere médico autorizado por JRCM</td><td className="border border-gray-200 p-3">Sin supervisión</td></tr>
                        <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Control de calidad</td><td className="border border-gray-200 p-3">Análisis de laboratorio, trazabilidad (BioTrack)</td><td className="border border-gray-200 p-3">Sin regulación</td></tr>
                        <tr><td className="border border-gray-200 p-3 font-medium">Dosificación</td><td className="border border-gray-200 p-3">Concentraciones estandarizadas y controladas</td><td className="border border-gray-200 p-3">Variable e incierta</td></tr>
                        <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-medium">Acceso</td><td className="border border-gray-200 p-3">Dispensarios autorizados con tarjeta de paciente</td><td className="border border-gray-200 p-3">Mercado ilícito</td></tr>
                        <tr><td className="border border-gray-200 p-3 font-medium">Protección legal</td><td className="border border-gray-200 p-3">Protegido por la ley</td><td className="border border-gray-200 p-3">Riesgo de consecuencias legales</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Marco legal en Puerto Rico</h2>
                  <p className="text-lg leading-relaxed mb-4">El programa de cannabis medicinal de Puerto Rico opera bajo:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ley Núm. 42 de 9 de julio de 2017</strong>, según enmendada — establece el marco legal del programa</li>
                    <li><strong>Reglamento Núm. 9038</strong> — reglamento vigente que define requisitos para médicos, pacientes y operadores</li>
                    <li><strong>Junta Reglamentadora de Cannabis Medicinal (JRCM)</strong> — entidad adscrita al Departamento de Salud que administra y fiscaliza el programa</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4">La JRCM tiene su oficina central en el <strong>Edificio 3, Oficina 301, Metro Office Park, Guaynabo PR 00968</strong>.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Calidad y seguridad del cannabis medicinal</h2>
                  <p className="text-lg leading-relaxed mb-4">Una de las ventajas más importantes del cannabis medicinal sobre el recreativo es el <strong>control de calidad riguroso</strong>:</p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <ul className="space-y-2">
                      <li><strong>Trazabilidad completa:</strong> El sistema BioTrack registra cada producto desde el cultivo hasta el punto de venta</li>
                      <li><strong>Análisis de laboratorio:</strong> Pruebas de potencia, pesticidas, metales pesados, moho y microbiología</li>
                      <li><strong>Etiquetado preciso:</strong> Concentraciones exactas de THC, CBD y otros cannabinoides</li>
                      <li><strong>Dispensarios regulados:</strong> Personal capacitado para orientar sobre productos</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Beneficios de tener tu tarjeta de cannabis medicinal</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Protección legal completa</strong> — Acceso y posesión dentro del marco de la ley</li>
                    <li><strong>Productos de calidad certificada</strong> — Analizados en laboratorio, seguros</li>
                    <li><strong>Guía médica profesional</strong> — Dosificación y productos recomendados por médicos</li>
                    <li><strong>Variedad de productos</strong> — Flores, aceites, cápsulas, tópicos, comestibles</li>
                    <li><strong>Acceso a dispensarios regulados</strong> — Red de dispensarios a nivel isla</li>
                  </ul>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Accede legalmente al cannabis medicinal</h3>
                  <p className="text-green-100 mb-4">Obtén tu tarjeta con médicos certificados en CanaDoctors.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación</Link>
                  </Button>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <h3 className="font-semibold mb-2">Referencias legales</h3>
                  <ul className="space-y-1">
                    <li>Ley Núm. 42-2017 del Estado Libre Asociado de Puerto Rico</li>
                    <li>Reglamento Núm. 9038, Departamento de Salud de Puerto Rico</li>
                    <li>V2A Consulting (2026). Estudio de Mercado Cannabis Medicinal PR — JRCM.</li>
                  </ul>
                </div>

                <div className="mt-6 bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> CanaDoctors conecta pacientes con médicos certificados. No ofrece diagnósticos ni consejos médicos.</p>
                </div>
                <div className="mt-8"><Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button></div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="cannabis-medicinal-vs-recreativo-diferencias" />
        </div>
      </div>
    </>
  )
}

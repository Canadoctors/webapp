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

export default function RenovarTarjetaPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "Cómo renovar tu tarjeta de cannabis medicinal en Puerto Rico (2026)"
  const articleDescription = "Guía paso a paso para renovar tu tarjeta de cannabis medicinal en Puerto Rico. Requisitos, costos y proceso actualizado para 2026."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="renovar tarjeta cannabis medicinal, renovación licencia cannabis PR, tarjeta cannabis vencida, renovar cannabis medicinal 2026 puerto rico" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/renovar-tarjeta-cannabis-medicinal-puerto-rico" />
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
                <Image src="/images/blog/renovar-tarjeta-cannabis-pr.png" alt="Renovar tarjeta de cannabis medicinal en Puerto Rico" fill className="object-cover" priority />
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos ni consejos médicos. Toda decisión debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Cuándo debo renovar mi tarjeta?</h2>
                  <p className="text-lg leading-relaxed mb-4">Tu tarjeta de cannabis medicinal en Puerto Rico tiene una <strong>vigencia de un año</strong> desde la fecha de emisión. Es fundamental renovarla antes de su vencimiento para mantener el acceso legal a tus tratamientos.</p>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm"><strong>Dato importante:</strong> Según el estudio de V2A Consulting (2026), el 60% de los pacientes no renueva su licencia al expirar. Si tu tarjeta vence, es como si estuviera cancelada — perderás el acceso legal al cannabis medicinal.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Requisitos para la renovación</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tarjeta de cannabis medicinal vigente o recientemente vencida</li>
                    <li>Evaluación médica actualizada con un médico autorizado</li>
                    <li>Identificación con foto vigente</li>
                    <li>Pago de los aranceles correspondientes</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Proceso paso a paso</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div><h3 className="font-semibold mb-1">Programa tu cita de renovación</h3><p>Regístrate en CanaDoctors y solicita una evaluación de renovación con un médico certificado.</p></div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div><h3 className="font-semibold mb-1">Evaluación médica</h3><p>El médico revisará tu historial y confirmará que la condición sigue requiriendo cannabis medicinal.</p></div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div><h3 className="font-semibold mb-1">Nueva recomendación médica</h3><p>Si se aprueba, recibirás una nueva recomendación médica firmada electrónicamente.</p></div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div><h3 className="font-semibold mb-1">Registro ante el Departamento de Salud</h3><p>Completa el proceso de renovación ante la JRCM con tu nueva recomendación.</p></div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué pasa si mi tarjeta ya venció?</h2>
                  <p className="text-lg leading-relaxed mb-4">Si tu tarjeta ya está vencida, se considera como cancelada. Necesitarás iniciar el proceso nuevamente como si fuera una solicitud nueva. Por eso recomendamos renovar <strong>al menos 30 días antes</strong> del vencimiento.</p>
                  <p className="text-lg leading-relaxed">Para cancelaciones voluntarias, debes acudir presencialmente a la oficina central: <strong>Metro Office Park, Edificio 3, Oficina 301, Guaynabo PR 00968</strong> en horario laboral, sin cita previa, con tu voucher/licencia e identificación con foto.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Por qué renovar con CanaDoctors?</h2>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <ul className="space-y-2">
                      <li><strong>Proceso ágil:</strong> Te conectamos rápidamente con médicos certificados</li>
                      <li><strong>Médicos autorizados:</strong> Todos nuestros médicos cumplen con los requisitos del Reglamento 9038</li>
                      <li><strong>Acompañamiento:</strong> Te guiamos en todo el proceso de renovación</li>
                      <li><strong>Experiencia:</strong> Más de 25,000 pacientes atendidos con 99.9% de tasa de aprobación</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿Tu tarjeta está por vencer?</h3>
                  <p className="text-green-100 mb-4">No pierdas tu acceso. Renueva con CanaDoctors.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Renovar Mi Tarjeta</Link>
                  </Button>
                </div>

                <div className="mt-6 bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> CanaDoctors conecta pacientes con médicos certificados. No ofrece diagnósticos ni consejos médicos.</p>
                </div>
                <div className="mt-8"><Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button></div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="renovar-tarjeta-cannabis-medicinal-puerto-rico" />
        </div>
      </div>
    </>
  )
}

"use client"
import { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { BlogSidebar } from "@/components/blog-sidebar"
import { ShareButtons } from "@/components/share-buttons"

export default function MejoresDispensariosPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "Guía de los mejores dispensarios de cannabis medicinal en Puerto Rico (2026)"
  const articleDescription = "Conoce los dispensarios de cannabis medicinal más destacados en Puerto Rico. Calidad, variedad de productos, atención al paciente y ubicaciones."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="dispensarios cannabis medicinal puerto rico, mejores dispensarios PR, Tetra dispensario, donde comprar cannabis medicinal PR, dispensarios cannabis 2026" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/mejores-dispensarios-cannabis-medicinal-puerto-rico" />
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
                <div className="w-full h-full bg-gradient-to-br from-brand-tertiary to-brand-primary flex items-center justify-center"><h2 className="text-white text-3xl font-bold text-center px-8">Mejores Dispensarios<br />Cannabis Medicinal PR</h2></div>
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos ni consejos médicos. La mención de dispensarios es informativa y no constituye un endoso médico. Consulta siempre con tu médico autorizado.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué buscar en un dispensario de cannabis medicinal?</h2>
                  <p className="text-lg leading-relaxed mb-4">No todos los dispensarios ofrecen la misma experiencia. Al elegir dónde adquirir tu cannabis medicinal, considera:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Variedad de productos:</strong> Flores, aceites, tinturas, cápsulas, tópicos, comestibles</li>
                    <li><strong>Calidad y certificaciones:</strong> Pruebas de laboratorio, trazabilidad BioTrack</li>
                    <li><strong>Atención al paciente:</strong> Personal capacitado (budtenders) que puedan orientarte</li>
                    <li><strong>Ubicación y horarios:</strong> Accesibilidad para tu rutina</li>
                    <li><strong>Educación:</strong> Recursos para que entiendas tus opciones de tratamiento</li>
                  </ul>
                </div>

                <div className="mb-8 bg-green-50 p-6 rounded-lg border-2 border-green-500">
                  <h2 className="text-2xl font-bold mb-4 text-green-700">Tetra — Dispensario Destacado</h2>
                  <p className="text-lg leading-relaxed mb-4">Entre los dispensarios que más se han destacado en Puerto Rico por su enfoque en la <strong>experiencia del paciente</strong> y la <strong>calidad de sus productos</strong> se encuentra <strong>Tetra</strong>.</p>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">¿Por qué Tetra se destaca?</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Enfoque centrado en el paciente:</strong> Personal altamente capacitado que ofrece orientación personalizada según tu condición y necesidades</li>
                    <li><strong>Variedad premium de productos:</strong> Amplia selección de flores, concentrados, aceites y comestibles de alta calidad</li>
                    <li><strong>Control de calidad riguroso:</strong> Todos los productos pasan por análisis de laboratorio exhaustivos</li>
                    <li><strong>Ambiente profesional:</strong> Instalaciones modernas y cómodas diseñadas para una experiencia positiva</li>
                    <li><strong>Educación continua:</strong> Compromiso con educar a los pacientes sobre opciones de tratamiento y uso responsable</li>
                    <li><strong>Integración tecnológica:</strong> Sistemas modernos para gestión de pacientes y pedidos</li>
                  </ul>
                  <p className="text-lg leading-relaxed">Tetra representa el estándar de lo que un dispensario de cannabis medicinal debe ser: profesional, educativo y centrado en el bienestar del paciente.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">El contexto del mercado de dispensarios en PR</h2>
                  <p className="text-lg leading-relaxed mb-4">Según el estudio de V2A Consulting (2026) para la JRCM, el mercado de dispensarios en Puerto Rico enfrenta cambios significativos:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>El <strong>precio por gramo de flor cayó un 69%</strong> entre 2020 y 2025 (de $8.91 a $2.73)</li>
                    <li>Se estima que el <strong>80% de los establecimientos</strong> podrían cerrar eventualmente</li>
                    <li>Solo las operaciones que priorizan la <strong>calidad, experiencia del paciente e innovación</strong> sobrevivirán la consolidación</li>
                    <li>El estudio recomienda que la apertura de nuevas licencias se base en el <strong>índice de saturación municipal</strong></li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué preguntar en tu primera visita al dispensario?</h2>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <ul className="space-y-2">
                      <li>¿Qué productos recomiendan para mi condición específica?</li>
                      <li>¿Cuáles son las concentraciones de THC y CBD en cada producto?</li>
                      <li>¿Tienen resultados de análisis de laboratorio disponibles?</li>
                      <li>¿Qué método de consumo es más adecuado para mi caso?</li>
                      <li>¿Cuál es la dosificación recomendada para comenzar?</li>
                      <li>¿Ofrecen seguimiento o consultas posteriores?</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Primero necesitas tu tarjeta</h2>
                  <p className="text-lg leading-relaxed mb-4">Para acceder a cualquier dispensario de cannabis medicinal en Puerto Rico necesitas una <strong>tarjeta de paciente vigente</strong> emitida por el Departamento de Salud. El proceso comienza con una evaluación médica con un profesional certificado.</p>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿Aún no tienes tu tarjeta?</h3>
                  <p className="text-green-100 mb-4">Obtén tu evaluación médica con CanaDoctors y accede a los mejores dispensarios.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Obtener Mi Tarjeta</Link>
                  </Button>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> CanaDoctors conecta pacientes con médicos certificados. La mención de establecimientos es informativa. La elección de dispensario y productos debe hacerse en consulta con tu médico tratante.</p>
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

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
                <Image src="/images/blog/mejores-dispensarios-cannabis-pr.png" alt="Mejores dispensarios de cannabis medicinal en Puerto Rico" fill className="object-cover" priority />
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

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Ranking: Los mejores dispensarios de cannabis medicinal en Puerto Rico</h2>
                  <p className="text-lg leading-relaxed mb-6">Basándonos en variedad de productos, atención al paciente, calidad, ubicaciones y reputación en la comunidad, estos son los dispensarios más destacados en la isla:</p>
                </div>

                {/* #1 Tetra */}
                <div className="mb-8 bg-green-50 p-6 rounded-lg border-2 border-green-500 relative">
                  <div className="absolute -top-4 left-6 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">#1 Recomendado</div>
                  <h3 className="text-2xl font-bold mb-3 text-green-700 mt-2">Tetra</h3>
                  <p className="text-lg leading-relaxed mb-4">Tetra se ha posicionado como el dispensario líder en Puerto Rico por su enfoque integral en la <strong>experiencia del paciente</strong> y la <strong>calidad premium de sus productos</strong>.</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Enfoque centrado en el paciente:</strong> Personal altamente capacitado con orientación personalizada según condición y necesidades</li>
                    <li><strong>Variedad premium:</strong> Amplia selección de flores, concentrados, aceites, comestibles y tópicos de alta calidad</li>
                    <li><strong>Control de calidad riguroso:</strong> Todos los productos con análisis de laboratorio exhaustivos</li>
                    <li><strong>Instalaciones modernas:</strong> Ambiente profesional y cómodo diseñado para una experiencia positiva</li>
                    <li><strong>Educación al paciente:</strong> Compromiso con informar sobre opciones de tratamiento y uso responsable</li>
                    <li><strong>Tecnología integrada:</strong> Sistemas modernos de gestión de pacientes y pedidos</li>
                  </ul>
                  <p className="text-lg leading-relaxed font-medium text-green-700">Tetra representa el estándar de lo que un dispensario de cannabis medicinal debe ser.</p>
                </div>

                {/* #2 FarmaVerde */}
                <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full">#2</span>
                    <h3 className="text-xl font-bold text-gray-800">FarmaVerde</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3">Una de las cadenas más grandes y reconocidas de Puerto Rico, con múltiples ubicaciones a nivel isla y un enfoque farmacéutico profesional.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Amplia red de sucursales en toda la isla</li>
                    <li>Enfoque farmacéutico con asesoría sobre dosificación e interacciones</li>
                    <li>Gran variedad de productos: flores, aceites, cápsulas, tópicos y comestibles</li>
                    <li>Estándares altos de control de calidad</li>
                  </ul>
                </div>

                {/* #3 BWell */}
                <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full">#3</span>
                    <h3 className="text-xl font-bold text-gray-800">BWell</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3">Dispensario con fuerte presencia en la industria, conocido por su compromiso con el bienestar integral del paciente y productos de calidad consistente.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Marca consolidada con buena reputación en la comunidad</li>
                    <li>Personal capacitado en orientación terapéutica</li>
                    <li>Productos propios y de terceros seleccionados por calidad</li>
                  </ul>
                </div>

                {/* #4 First Medical */}
                <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full">#4</span>
                    <h3 className="text-xl font-bold text-gray-800">First Medical</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3">Dispensario con enfoque clínico que prioriza la relación médico-paciente y el seguimiento del tratamiento terapéutico.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Orientación médica personalizada para cada paciente</li>
                    <li>Variedad de productos con etiquetado detallado de cannabinoides</li>
                    <li>Ambiente profesional y confidencial</li>
                  </ul>
                </div>

                {/* #5 Frontiers */}
                <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full">#5</span>
                    <h3 className="text-xl font-bold text-gray-800">Frontiers</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3">Dispensario innovador que se destaca por su selección de genéticas exclusivas y productos premium para pacientes exigentes.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Selección curada de genéticas premium</li>
                    <li>Productos de alta potencia y pureza</li>
                    <li>Equipo con conocimiento especializado en genéticas y terpenos</li>
                  </ul>
                </div>

                {/* #6 Weedco */}
                <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full">#6</span>
                    <h3 className="text-xl font-bold text-gray-800">Weedco</h3>
                  </div>
                  <p className="text-lg leading-relaxed mb-3">Cadena accesible con buena presencia en la isla, enfocada en ofrecer precios competitivos sin sacrificar calidad.</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Precios competitivos y ofertas frecuentes para pacientes</li>
                    <li>Variedad de productos para diferentes presupuestos</li>
                    <li>Múltiples ubicaciones para fácil acceso</li>
                  </ul>
                </div>

                <div className="mb-8 p-5 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm"><strong>Nota:</strong> Este ranking es informativo y se basa en factores como variedad, atención, reputación y accesibilidad. La experiencia puede variar según la ubicación. Siempre consulta con tu médico sobre los productos más adecuados para tu condición.</p>
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
          <BlogSidebar currentSlug="mejores-dispensarios-cannabis-medicinal-puerto-rico" />
        </div>
      </div>
    </>
  )
}

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

export default function AnsiedadDepresionPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "Cannabis medicinal para ansiedad y depresión en Puerto Rico: Guía completa"
  const articleDescription = "Guía sobre cómo el cannabis medicinal puede ayudar a tratar la ansiedad y depresión bajo supervisión médica en Puerto Rico."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="cannabis medicinal ansiedad, cannabis medicinal depresión, CBD ansiedad puerto rico, tratamiento ansiedad natural, salud mental cannabis PR" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/cannabis-medicinal-ansiedad-depresion-puerto-rico" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: articleTitle, description: articleDescription, author: { "@type": "Organization", name: "CanaDoctors" }, publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } }, datePublished: "2026-04-08", dateModified: "2026-04-08", inLanguage: "es" }) }} />
      </Head>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-brand-primary flex items-center justify-center"><h2 className="text-white text-3xl font-bold text-center px-8">Cannabis Medicinal<br />Ansiedad y Depresión</h2></div>
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos, tratamientos ni consejos médicos. Toda decisión debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">La crisis de salud mental en Puerto Rico</h2>
                  <p className="text-lg leading-relaxed mb-4">Puerto Rico enfrenta una crisis significativa de salud mental. Según datos del estudio de V2A Consulting (2026), las condiciones psicológicas como insomnio, ansiedad y depresión representaron el <strong>61% de todas las recomendaciones de cannabis medicinal en 2025</strong>, un aumento dramático desde el 42% en 2018.</p>
                  <p className="text-lg leading-relaxed">Tanto la ansiedad (Desórdenes de Ansiedad según el DSM-V) como la depresión son condiciones debilitantes reconocidas oficialmente por la Ley 42-2017 para el acceso al cannabis medicinal.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué dice la ciencia sobre cannabis y ansiedad?</h2>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Blessing et al. (2015, Neurotherapeutics)</h3>
                    <p>Revisión que concluyó que el CBD muestra <strong>propiedades ansiolíticas consistentes</strong> en estudios preclínicos y clínicos. El CBD redujo la ansiedad en modelos de trastorno de ansiedad generalizada, trastorno de pánico, TOC y PTSD.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Zuardi et al. (2017, Frontiers in Pharmacology)</h3>
                    <p>Demostró que una dosis de 300mg de CBD redujo significativamente la ansiedad durante una prueba simulada de habla pública, con resultados comparables al ipsapirona (ansiolítico de referencia).</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Shannon et al. (2019, The Permanente Journal)</h3>
                    <p>Estudio con 72 adultos: el <strong>79.2% reportó mejora en ansiedad</strong> y el 66.7% mejoró la calidad del sueño durante el primer mes de tratamiento con CBD.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Cannabis medicinal y depresión</h2>
                  <p className="text-lg leading-relaxed mb-4">La depresión involucra desbalances en neurotransmisores como serotonina, dopamina y norepinefrina. El sistema endocannabinoide modula estos sistemas:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Linge et al. (2016, Neuropharmacology)</strong> demostraron que el CBD produce efectos antidepresivos rápidos al actuar sobre el receptor 5-HT1A de serotonina.</li>
                    <li><strong>Sartim et al. (2016)</strong> encontraron que el CBD redujo comportamientos depresivos en modelos animales de estrés crónico.</li>
                    <li><strong>Crippa et al. (2018, Frontiers in Immunology)</strong> revisaron la evidencia y confirmaron el potencial terapéutico del CBD para trastornos del ánimo.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">CBD vs THC para salud mental</h2>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <ul className="space-y-3">
                      <li><strong>CBD:</strong> No psicoactivo. Ansiolítico, antidepresivo. Recomendado como primera línea para ansiedad. Sin riesgo de paranoia.</li>
                      <li><strong>THC:</strong> Psicoactivo. En dosis bajas puede reducir ansiedad; en dosis altas puede empeorarla. Útil para insomnio asociado.</li>
                      <li><strong>Combinación:</strong> Muchos médicos recomiendan ratios específicos CBD:THC. Las formulaciones altas en CBD (20:1, 10:1) son preferidas para ansiedad.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Quién califica en Puerto Rico?</h2>
                  <p className="text-lg leading-relaxed mb-4">Bajo la Ley 42-2017, califican pacientes diagnosticados con:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Desórdenes de Ansiedad (según DSM-V)</li>
                    <li>Depresión</li>
                    <li>Insomnio</li>
                    <li>PTSD</li>
                    <li>Trastorno Bipolar</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4">Se requiere evaluación por un médico autorizado ante la JRCM que confirme el diagnóstico y determine si el cannabis medicinal es una alternativa terapéutica apropiada.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Consideraciones importantes</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <ul className="space-y-2">
                      <li>El cannabis medicinal <strong>no sustituye</strong> la terapia psicológica ni otros tratamientos prescritos.</li>
                      <li>Si tomas medicamentos psiquiátricos, <strong>consulta con tu médico</strong> sobre posibles interacciones.</li>
                      <li>Comienza siempre con dosis bajas y aumenta gradualmente bajo supervisión médica.</li>
                      <li>Informa a tu médico tratante sobre el uso de cannabis medicinal.</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿La ansiedad o depresión afectan tu vida?</h3>
                  <p className="text-green-100 mb-4">Consulta con un médico certificado sobre opciones de tratamiento.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación</Link>
                  </Button>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <h3 className="font-semibold mb-2">Referencias</h3>
                  <ul className="space-y-1">
                    <li>Blessing, E.M. et al. (2015). Cannabidiol as a Potential Treatment for Anxiety Disorders. <em>Neurotherapeutics</em>, 12(4).</li>
                    <li>Shannon, S. et al. (2019). Cannabidiol in Anxiety and Sleep. <em>The Permanente Journal</em>, 23.</li>
                    <li>Linge, R. et al. (2016). Cannabidiol induces rapid-acting antidepressant effects. <em>Neuropharmacology</em>, 110.</li>
                    <li>Zuardi, A.W. et al. (2017). Inverted U-Shaped Dose-Response Curve of CBD. <em>Frontiers in Pharmacology</em>, 8.</li>
                    <li>V2A Consulting (2026). Estudio de Mercado Cannabis Medicinal PR — JRCM.</li>
                  </ul>
                </div>

                <div className="mt-6 bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> CanaDoctors conecta pacientes con médicos certificados. No ofrece diagnósticos ni consejos médicos. Consulta siempre con un profesional autorizado.</p>
                </div>
                <div className="mt-8"><Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button></div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="cannabis-medicinal-ansiedad-depresion-puerto-rico" />
        </div>
      </div>
    </>
  )
}

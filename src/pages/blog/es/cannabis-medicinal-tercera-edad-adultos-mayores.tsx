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

export default function TerceraEdadPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])
  const articleTitle = "Cannabis medicinal y la tercera edad: Beneficios, seguridad y consideraciones en Puerto Rico"
  const articleDescription = "Guía sobre el uso de cannabis medicinal en adultos mayores en Puerto Rico. Evidencia científica, condiciones comunes, seguridad y proceso para obtener la tarjeta."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="cannabis medicinal tercera edad, adultos mayores cannabis, personas mayores cannabis medicinal puerto rico, CBD tercera edad, dolor crónico ancianos" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/cannabis-medicinal-tercera-edad-adultos-mayores" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://canadoctors.com/images/blog/cannabis-medicinal-tercera-edad.png" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://canadoctors.com/images/blog/cannabis-medicinal-tercera-edad.png" />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: articleTitle, description: articleDescription, image: "https://canadoctors.com/images/blog/cannabis-medicinal-tercera-edad.png", author: { "@type": "Organization", name: "CanaDoctors" }, publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } }, datePublished: "2026-04-08", inLanguage: "es" }) }} />
      </Head>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image src="/images/blog/cannabis-medicinal-tercera-edad.png" alt="Cannabis medicinal para adultos mayores en Puerto Rico" fill className="object-cover" priority />
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">
                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos ni consejos médicos. Toda decisión debe ser tomada por un médico autorizado. Esto es especialmente importante en adultos mayores que suelen tomar múltiples medicamentos.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Una población desatendida</h2>
                  <p className="text-lg leading-relaxed mb-4">Según el estudio de V2A Consulting (2026) para la JRCM, la población <strong>mayor de 70 años es el segmento que más ha disminuido</strong> en el programa de cannabis medicinal de Puerto Rico, a pesar de ser un grupo demográfico en crecimiento en la isla. Esta desconexión representa una oportunidad perdida, ya que los adultos mayores son precisamente quienes más podrían beneficiarse de las propiedades terapéuticas del cannabis medicinal.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Por qué el cannabis medicinal para adultos mayores?</h2>
                  <p className="text-lg leading-relaxed mb-4">Los adultos mayores enfrentan múltiples condiciones crónicas que figuran en la lista oficial de condiciones debilitantes de Puerto Rico:</p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
                    <ul className="space-y-2">
                      <li><strong>Dolor crónico y artritis</strong> — Las condiciones más prevalentes. Briscoe & Casarett (2018, <em>Annals of Internal Medicine</em>) encontraron que el 93% de adultos mayores que usaron cannabis medicinal reportaron mejoras en el dolor.</li>
                      <li><strong>Insomnio</strong> — Afecta al 40-70% de adultos mayores. Suraev et al. (2020, <em>Sleep Medicine Reviews</em>) documentaron mejoras significativas en calidad del sueño con cannabinoides.</li>
                      <li><strong>Alzheimer y Parkinson</strong> — Watt & Karl (2017, <em>Frontiers in Pharmacology</em>) revisaron el potencial neuroprotector del CBD en enfermedades neurodegenerativas.</li>
                      <li><strong>Ansiedad y depresión</strong> — Común en adultos mayores, especialmente con aislamiento social.</li>
                      <li><strong>Pérdida de apetito (caquexia)</strong> — El THC es un conocido estimulante del apetito.</li>
                      <li><strong>Glaucoma</strong> — Prevalencia aumenta significativamente después de los 60 años.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Lo que dice la ciencia</h2>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Abuhasira et al. (2018, European Journal of Internal Medicine)</h3>
                    <p>Estudio prospectivo con <strong>2,736 pacientes mayores de 65 años</strong> en tratamiento con cannabis medicinal. A los 6 meses: el <strong>93.7% reportó mejora en su condición</strong>, la intensidad del dolor se redujo de 8/10 a 4/10, y el <strong>18.1% dejó o redujo el uso de opioides</strong>.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Minerbi et al. (2019, PLoS ONE)</h3>
                    <p>Estudio con adultos mayores de 50 años mostró que el cannabis medicinal fue <strong>bien tolerado con efectos adversos leves</strong> y mejoró significativamente la calidad de vida.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Bahji & Bhatt (2020, Journal of Geriatric Psychiatry)</h3>
                    <p>Revisión que concluyó que el cannabis medicinal en adultos mayores tiene un <strong>perfil de seguridad aceptable</strong> cuando se administra bajo supervisión médica, especialmente formulaciones altas en CBD.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Consideraciones especiales para adultos mayores</h2>
                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <ul className="space-y-3">
                      <li><strong>Interacciones medicamentosas:</strong> Muchos adultos mayores toman múltiples medicamentos. El CBD puede interactuar con anticoagulantes (warfarina), estatinas y algunos antihipertensivos. <strong>Es esencial informar al médico sobre todos los medicamentos que se toman.</strong></li>
                      <li><strong>Metabolismo más lento:</strong> El hígado y los riñones procesan las sustancias más lentamente. Se recomienda <strong>&ldquo;empezar bajo, ir despacio&rdquo;</strong> (start low, go slow).</li>
                      <li><strong>Riesgo de caídas:</strong> El THC puede causar mareos. Las formulaciones altas en CBD con THC mínimo son generalmente preferidas.</li>
                      <li><strong>Método de administración:</strong> Aceites sublinguales y cápsulas son preferidos sobre fumar, que puede afectar la salud pulmonar.</li>
                      <li><strong>Condiciones cardiovasculares:</strong> Pacientes con problemas cardíacos deben tener especial precaución con el THC.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Productos recomendados para adultos mayores</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Aceites de CBD (ratio alto CBD:THC)</strong> — Fáciles de dosificar, sin necesidad de fumar</li>
                    <li><strong>Cápsulas</strong> — Dosificación precisa, familiar para quienes toman medicamentos</li>
                    <li><strong>Tópicos</strong> — Para dolor localizado (artritis, inflamación) sin efectos sistémicos</li>
                    <li><strong>Tinturas sublinguales</strong> — Absorción rápida, control preciso de dosis</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Cannabis medicinal como alternativa a opioides</h2>
                  <p className="text-lg leading-relaxed mb-4">Los adultos mayores son particularmente vulnerables a los efectos adversos de los opioides: estreñimiento severo, confusión, riesgo de caídas y dependencia. Estudios como el de <strong>Bachhuber et al. (2014, JAMA Internal Medicine)</strong> mostraron que estados con programas de cannabis medicinal tienen <strong>24.8% menos muertes por sobredosis de opioides</strong>.</p>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿Eres adulto mayor o cuidas de uno?</h3>
                  <p className="text-green-100 mb-4">Consulta con un médico certificado sobre opciones de cannabis medicinal.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación</Link>
                  </Button>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg text-sm text-gray-600 mb-6">
                  <h3 className="font-semibold mb-2">Referencias</h3>
                  <ul className="space-y-1">
                    <li>Abuhasira, R. et al. (2018). Epidemiological characteristics, safety and efficacy of medical cannabis in the elderly. <em>European Journal of Internal Medicine</em>, 49, 44-50.</li>
                    <li>Bahji, A. & Bhatt, N. (2020). Medical Cannabis Use in Older Adults. <em>J Geriatric Psychiatry</em>.</li>
                    <li>Briscoe, J. & Casarett, D. (2018). Medical Marijuana Use in Older Adults. <em>JAGS</em>, 66(5).</li>
                    <li>Suraev, A. et al. (2020). Cannabinoid therapies in the management of sleep disorders. <em>Sleep Medicine Reviews</em>, 53.</li>
                    <li>Watt, G. & Karl, T. (2017). In vivo Evidence for Therapeutic Properties of Cannabidiol for Alzheimer. <em>Frontiers in Pharmacology</em>, 8.</li>
                    <li>V2A Consulting (2026). Estudio de Mercado Cannabis Medicinal PR — JRCM.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> Este artículo es informativo. CanaDoctors conecta pacientes con médicos certificados. No ofrece diagnósticos ni consejos médicos. En adultos mayores es especialmente importante la supervisión médica.</p>
                </div>
                <div className="mt-8"><Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button></div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="cannabis-medicinal-tercera-edad-adultos-mayores" />
        </div>
      </div>
    </>
  )
}

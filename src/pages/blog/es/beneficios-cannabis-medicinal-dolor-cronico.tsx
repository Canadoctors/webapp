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

export default function DolorCronicoPage() {
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => { setCurrentUrl(window.location.href) }, [])

  const articleTitle = "Beneficios del cannabis medicinal para el dolor crónico: Lo que dice la ciencia"
  const articleDescription = "Descubre la evidencia científica detrás del uso del cannabis medicinal para tratar el dolor crónico de forma segura y efectiva en Puerto Rico."

  return (
    <>
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="cannabis medicinal dolor crónico, beneficios cannabis medicinal, tratamiento dolor crónico natural, cannabis terapéutico puerto rico, CBD dolor" />
        <meta name="author" content="CanaDoctors" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://canadoctors.com/blog/es/beneficios-cannabis-medicinal-dolor-cronico" />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://canadoctors.com/blog/es/beneficios-cannabis-medicinal-dolor-cronico" />
        <meta property="og:locale" content="es_PR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="article:published_time" content="2026-04-08T00:00:00Z" />
        <meta property="article:section" content="Educación" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Article",
          headline: articleTitle, description: articleDescription,
          author: { "@type": "Organization", name: "CanaDoctors" },
          publisher: { "@type": "Organization", name: "CanaDoctors", logo: { "@type": "ImageObject", url: "https://canadoctors.com/images/logosCD/logopositivo.svg" } },
          datePublished: "2026-04-08", dateModified: "2026-04-08",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://canadoctors.com/blog/es/beneficios-cannabis-medicinal-dolor-cronico" },
          inLanguage: "es"
        }) }} />
      </Head>

      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-brand-primary flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold text-center px-8">Cannabis Medicinal<br />y Dolor Crónico</h2>
                </div>
              </div>
              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight">{articleTitle}</CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 08/04/2026</p>
                <ShareButtons url={currentUrl} title={articleTitle} />
              </CardHeader>
              <CardContent className="prose prose-lg prose-green max-w-none">

                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 mb-8">
                  <p className="text-sm"><strong>Aviso importante:</strong> CanaDoctors es una plataforma tecnológica que conecta pacientes con médicos certificados. No proporcionamos diagnósticos, tratamientos ni consejos médicos. Toda decisión de tratamiento debe ser tomada por un médico autorizado conforme al Reglamento 9038 y la Ley 42-2017.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Introducción</h2>
                  <p className="text-lg leading-relaxed mb-4">El dolor crónico afecta a millones de personas en todo el mundo y es una de las principales causas de discapacidad. En Puerto Rico, el dolor crónico es una de las <strong>25 condiciones debilitantes</strong> reconocidas por el programa de cannabis medicinal bajo la Ley 42-2017.</p>
                  <p className="text-lg leading-relaxed">La evidencia científica cada vez más robusta sugiere que el cannabis medicinal ofrece una alternativa terapéutica significativa para pacientes que no responden adecuadamente a tratamientos convencionales.</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Qué es el dolor crónico?</h2>
                  <p className="text-lg leading-relaxed mb-4">El dolor crónico se define como aquel que persiste por más de 3 a 6 meses, más allá del tiempo normal de curación de una lesión. Puede ser:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Nociceptivo:</strong> causado por daño tisular (artritis, lesiones)</li>
                    <li><strong>Neuropático:</strong> causado por daño al sistema nervioso (neuropatía diabética, ciática)</li>
                    <li><strong>Nociplástico:</strong> sin daño tisular evidente (fibromialgia)</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Cómo funciona el cannabis medicinal contra el dolor?</h2>
                  <p className="text-lg leading-relaxed mb-4">El cuerpo humano tiene un <strong>sistema endocannabinoide (SEC)</strong> que regula el dolor, la inflamación, el estado de ánimo y el sueño. Los cannabinoides de la planta interactúan con los receptores CB1 y CB2 de este sistema:</p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-4">
                    <ul className="space-y-3">
                      <li><strong>THC (tetrahidrocannabinol):</strong> Se une al receptor CB1 en el sistema nervioso central, modulando la percepción del dolor. Tiene propiedades analgésicas, antiinflamatorias y relajantes musculares.</li>
                      <li><strong>CBD (cannabidiol):</strong> Actúa indirectamente sobre los receptores cannabinoides y modula la señalización serotoninérgica. Tiene propiedades antiinflamatorias, ansiolíticas y neuroprotectoras sin efectos psicoactivos.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Evidencia científica</h2>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">National Academies of Sciences (2017)</h3>
                    <p>La revisión más completa hasta la fecha concluyó que existe <strong>&ldquo;evidencia sustancial&rdquo;</strong> de que el cannabis es efectivo para el tratamiento del dolor crónico en adultos. Analizaron más de 10,000 estudios científicos.</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Whiting et al. (2015, JAMA)</h3>
                    <p>Esta revisión sistemática de 79 ensayos clínicos con 6,462 participantes encontró evidencia moderada de que los cannabinoides son efectivos para el dolor crónico neuropático, con un <strong>NNT (number needed to treat) de 24</strong>.</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Aviram & Samuelly-Leichtag (2017, Journal of Pain Research)</h3>
                    <p>Meta-análisis que demostró que el cannabis medicinal reduce significativamente el dolor crónico con un <strong>efecto estadísticamente significativo (p&lt;0.001)</strong> en comparación con placebo.</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-4">
                    <h3 className="font-semibold mb-2">Stockings et al. (2018, Pain)</h3>
                    <p>Revisión de 104 estudios que encontró que los cannabinoides son <strong>30% más efectivos que el placebo</strong> para reducir la intensidad del dolor crónico.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Condiciones de dolor que responden al cannabis</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Artritis reumatoide y osteoartritis</strong> — Blake et al. (2006, <em>Rheumatology</em>) documentaron mejoras en dolor al movimiento, dolor en reposo y calidad del sueño.</li>
                    <li><strong>Fibromialgia</strong> — Sagy et al. (2019) reportaron que el 81% de los pacientes experimentaron mejoras significativas.</li>
                    <li><strong>Neuropatía periférica</strong> — Wilsey et al. (2013, <em>The Journal of Pain</em>) encontraron que dosis bajas de THC redujeron significativamente el dolor neuropático.</li>
                    <li><strong>Migraña</strong> — Rhyne et al. (2016) encontraron una reducción del 39.7% en la frecuencia de migrañas.</li>
                    <li><strong>Dolor post-quirúrgico</strong></li>
                    <li><strong>Dolor oncológico</strong></li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">Cannabis medicinal vs. opioides</h2>
                  <p className="text-lg leading-relaxed mb-4">Una de las ventajas más significativas del cannabis medicinal es su perfil de seguridad en comparación con los opioides:</p>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <ul className="space-y-2">
                      <li><strong>Menor riesgo de adicción:</strong> Bachhuber et al. (2014, <em>JAMA Internal Medicine</em>) encontraron que los estados con leyes de cannabis medicinal tuvieron un <strong>24.8% menos de muertes por sobredosis de opioides</strong>.</li>
                      <li><strong>Sin riesgo de sobredosis fatal:</strong> A diferencia de los opioides, no existe dosis letal conocida de cannabis.</li>
                      <li><strong>Menor tolerancia:</strong> Los pacientes no desarrollan tolerancia al cannabis al mismo ritmo que a los opioides.</li>
                      <li><strong>Efecto sinérgico:</strong> Algunos estudios sugieren que el cannabis puede potenciar los efectos analgésicos de los opioides, permitiendo reducir dosis.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-green-700">¿Es seguro el cannabis medicinal?</h2>
                  <p className="text-lg leading-relaxed mb-4">El cannabis medicinal tiene un perfil de seguridad favorable, pero no está exento de efectos secundarios. Los más comunes incluyen: boca seca, somnolencia, mareos y cambios en el apetito. Es fundamental que el tratamiento sea <strong>supervisado por un médico autorizado</strong> que pueda ajustar la dosificación y monitorear la respuesta del paciente.</p>
                </div>

                <div className="text-center bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-xl mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">¿Sufres de dolor crónico?</h3>
                  <p className="text-green-100 mb-4">Consulta con un médico certificado si el cannabis medicinal es adecuado para ti.</p>
                  <Button asChild className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8">
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación Médica</Link>
                  </Button>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <h3 className="font-semibold mb-2">Referencias</h3>
                  <ul className="space-y-1">
                    <li>National Academies of Sciences (2017). The Health Effects of Cannabis and Cannabinoids.</li>
                    <li>Whiting, P.F. et al. (2015). Cannabinoids for Medical Use. <em>JAMA</em>, 313(24), 2456-2473.</li>
                    <li>Aviram, J. & Samuelly-Leichtag, G. (2017). Efficacy of Cannabis-Based Medicines. <em>Journal of Pain Research</em>, 10, 515-525.</li>
                    <li>Stockings, E. et al. (2018). Cannabis and cannabinoids for chronic non-cancer pain. <em>Pain</em>, 159(10), 1932-1954.</li>
                    <li>Bachhuber, M.A. et al. (2014). Medical Cannabis Laws and Opioid Deaths. <em>JAMA Internal Medicine</em>, 174(10), 1668-1673.</li>
                    <li>Sagy, I. et al. (2019). Safety and Efficacy of Medical Cannabis in Fibromyalgia. <em>J Clin Med</em>, 8(6), 807.</li>
                  </ul>
                </div>

                <div className="mt-6 bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                  <p className="text-sm"><strong>Descargo de responsabilidad:</strong> Este artículo es informativo y no sustituye la consulta médica. CanaDoctors conecta pacientes con médicos certificados conforme a la Ley 42-2017 de Puerto Rico.</p>
                </div>

                <div className="mt-8">
                  <Button variant="outline" asChild><Link href="/blog/es">← Volver al blog</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <BlogSidebar currentSlug="beneficios-cannabis-medicinal-dolor-cronico" />
        </div>
      </div>
    </>
  )
}

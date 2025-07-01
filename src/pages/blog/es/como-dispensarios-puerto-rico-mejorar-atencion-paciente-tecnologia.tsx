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

export default function DispensariosTecnologiaAtencionPaciente() {
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const title =
    "Cómo los dispensarios en Puerto Rico pueden mejorar la atención al paciente con tecnología y seguimiento en tiempo real"
  const description =
    "Descubre cómo los dispensarios de cannabis medicinal en Puerto Rico pueden revolucionar la atención al paciente usando CRM, trazabilidad y dashboards con CanaDoctors."
  const keywords =
    "dispensarios Puerto Rico, cannabis medicinal, CRM dispensarios, trazabilidad cannabis, POS cannabis, CanaDoctors, budtender, atención paciente"

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
      url: "/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png",
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
        <meta
          property="og:image"
          content="/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png"
        />
        <meta property="og:site_name" content="CanaDoctors" />
        <meta property="article:published_time" content="2025-01-07" />
        <meta property="article:author" content="CanaDoctors" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png"
        />

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
                  src="/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png"
                  alt="Dispensarios de cannabis medicinal en Puerto Rico mejorando atención con tecnología"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>

              <CardHeader className="space-y-4">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  🌿 Cómo los dispensarios en Puerto Rico pueden mejorar la atención al paciente con tecnología y
                  seguimiento en tiempo real
                </CardTitle>
                <p className="text-sm text-muted-foreground">Publicado el 01/07/2025</p>
                <ShareButtons url={currentUrl} title={title} />
              </CardHeader>

              <CardContent className="prose prose-lg max-w-none">
                {/* Introducción */}
                <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                  <h2 className="text-xl font-semibold mb-4 text-blue-800">Introducción</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En el competitivo mercado del cannabis medicinal en Puerto Rico, brindar una atención personalizada,
                    eficiente y basada en datos se ha convertido en un factor clave para el éxito de los dispensarios.
                    Ya no basta con vender productos; ahora es necesario construir relaciones con los pacientes,
                    entender sus necesidades y anticiparse a sus renovaciones y consultas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Herramientas como <strong>CanaDoctors</strong> están revolucionando este proceso al integrar CRM,
                    trazabilidad, seguimiento clínico, fidelización, y dashboards de gestión en una sola plataforma
                    adaptada al ecosistema puertorriqueño.
                  </p>
                </div>

                {/* Orientación a pacientes */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    👥 Cómo orientar correctamente a los pacientes desde el dispensario
                  </h2>

                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El <strong>rol del budtender</strong> ha evolucionado. Hoy es crucial que puedan acceder en tiempo
                      real al historial clínico del paciente, entender su tratamiento y recomendar productos adecuados
                      según la patología y la recomendación médica.
                    </p>
                    <p className="text-gray-700 font-medium mb-4">Gracias a CanaDoctors, los budtenders pueden:</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          Ver la información clínica relevante del paciente (con consentimiento).
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Identificar productos compatibles con su tratamiento.</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          Acceder a documentación adjunta como autorizaciones, recetas y certificados.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">
                          Actualizar documentación faltante directamente desde el perfil del paciente.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm md:col-span-2">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Registrar notas de cada interacción para seguimiento futuro.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CRM y seguimiento */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    🧠 CRM y seguimiento automatizado: mejorando la experiencia del paciente
                  </h2>

                  <div className="bg-purple-50 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      CanaDoctors ofrece un <strong>CRM especializado para dispensarios</strong>, que permite:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Alertas de vencimiento</h3>
                        <p className="text-gray-700">Ver alertas de pacientes cuya licencia está próxima a vencer.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Recordatorios automáticos</h3>
                        <p className="text-gray-700">
                          Recordar automáticamente vencimientos y enviar notificaciones por email o WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Segmentación inteligente</h3>
                        <p className="text-gray-700">
                          Realizar segmentación por condición, frecuencia de compra o producto recomendado.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Flujos automatizados</h3>
                        <p className="text-gray-700">
                          Configurar tareas para cada miembro del equipo con flujos automatizados.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700">
                      Esto no solo mejora la atención, sino que también{" "}
                      <strong>aumenta la tasa de retención de pacientes</strong>, al evitar pérdidas por vencimientos o
                      falta de seguimiento.
                    </p>
                  </div>
                </div>

                {/* Trazabilidad y POS */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    🔗 Conexión con trazabilidad y POS
                  </h2>

                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La integración con sistemas de <strong>trazabilidad y puntos de venta (POS)</strong> permite:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Validación automática</h3>
                      <p className="text-gray-700 text-sm">
                        Validar automáticamente si el producto vendido está autorizado para el paciente.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Sincronización dual</h3>
                      <p className="text-gray-700 text-sm">
                        Cargar ventas en el sistema de salud y en el POS en simultáneo.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📦</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Trazabilidad completa</h3>
                      <p className="text-gray-700 text-sm">
                        Mantener una trazabilidad de lote y batch desde cultivo hasta venta final.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-orange-200 shadow-sm">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Prevención de errores</h3>
                      <p className="text-gray-700 text-sm">Prevenir errores de dispensación.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700">
                      Esto garantiza <strong>cumplimiento regulatorio</strong> y eficiencia operativa.
                    </p>
                  </div>
                </div>

                {/* Fidelización y marketing */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    🎯 Fidelización y marketing personalizado
                  </h2>

                  <div className="bg-pink-50 p-6 rounded-lg mb-6 border-l-4 border-pink-500">
                    <p className="text-gray-700 leading-relaxed">
                      Con la integración de <strong>email marketing y automatización</strong>, CanaDoctors permite:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-600 text-xl">📧</span>
                        <h3 className="font-semibold text-gray-900">Newsletters segmentados</h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Enviar newsletters segmentados por tipo de producto o condición.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-600 text-xl">🎁</span>
                        <h3 className="font-semibold text-gray-900">Descuentos automáticos</h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Ofrecer descuentos automáticos a pacientes recurrentes o que cumplieron años.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-600 text-xl">🔄</span>
                        <h3 className="font-semibold text-gray-900">Recuperación de pacientes</h3>
                      </div>
                      <p className="text-gray-700 text-sm">Realizar campañas de recuperación de pacientes inactivos.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-pink-200 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-600 text-xl">📊</span>
                        <h3 className="font-semibold text-gray-900">Encuestas automáticas</h3>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Automatizar encuestas de satisfacción y Net Promoter Score (NPS).
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700">
                      Estas estrategias generan <strong>mayor engagement y ventas recurrentes</strong>, fortaleciendo la
                      comunidad de pacientes.
                    </p>
                  </div>
                </div>

                {/* Dashboards e indicadores */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    📊 Indicadores clave y dashboards para gerentes y dueños de cadena
                  </h2>

                  <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La plataforma cuenta con un <strong>dashboard de indicadores</strong> para la toma de decisiones
                      estratégicas. Entre los KPIs más usados:
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">📈</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Pacientes activos</h3>
                      </div>
                      <p className="text-gray-600 text-xs">Cantidad de pacientes activos vs. inactivos.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">🕐</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Tiempo de atención</h3>
                      </div>
                      <p className="text-gray-600 text-xs">Tiempo promedio de atención por budtender.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">✅</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Vencimientos</h3>
                      </div>
                      <p className="text-gray-600 text-xs">Licencias por vencer en los próximos 30, 60 o 90 días.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">💰</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Ticket promedio</h3>
                      </div>
                      <p className="text-gray-600 text-xs">Ticket promedio por categoría de producto.</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">👤</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Nuevos pacientes</h3>
                      </div>
                      <p className="text-gray-600 text-xs">
                        Nuevos pacientes ingresados por canal (web, app, presencial).
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-indigo-600">📦</span>
                        <h3 className="font-semibold text-gray-900 text-sm">Top productos</h3>
                      </div>
                      <p className="text-gray-600 text-xs">Top productos dispensados por condición médica.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-700">
                      Además, los dashboards son <strong>personalizables por sucursal</strong>, ideal para cadenas de
                      dispensarios que necesitan comparar rendimientos o unificar métricas.
                    </p>
                  </div>
                </div>

                {/* Onboarding digital */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                    🛫 Onboarding digital para nuevos pacientes
                  </h2>

                  <div className="bg-teal-50 p-6 rounded-lg mb-6 border-l-4 border-teal-500">
                    <p className="text-gray-700 leading-relaxed">
                      CanaDoctors ofrece un <strong>onboarding digital personalizado</strong> para cada dispensario,
                      con:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold text-sm">📋</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Formularios precargados</h3>
                        <p className="text-gray-700 text-sm">
                          Formularios precargados adaptados a la normativa del Departamento de Salud.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold text-sm">📷</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Captura optimizada</h3>
                        <p className="text-gray-700 text-sm">
                          Captura de documentos en formato adecuado (ej. 4x4, fondo blanco).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold text-sm">📅</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Agenda integrada</h3>
                        <p className="text-gray-700 text-sm">Agenda de citas con médicos autorizados.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold text-sm">🔄</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Registro automático</h3>
                        <p className="text-gray-700 text-sm">Registro automático en la plataforma del dispensario.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-bold text-sm">💬</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Seguimiento personalizado</h3>
                        <p className="text-gray-700 text-sm">
                          Seguimiento por WhatsApp o email desde el primer contacto.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700">
                      Este flujo <strong>acelera la conversión de interesados en pacientes activos</strong>, sin
                      fricción.
                    </p>
                  </div>
                </div>

                {/* Conclusión */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Conclusión</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mejorar la atención al paciente en dispensarios de cannabis medicinal en Puerto Rico ya no es solo
                    una cuestión de amabilidad o stock: se trata de integrar tecnología, seguimiento y personalización
                    para crear una experiencia clínica segura, eficiente y cercana.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Con <strong>CanaDoctors</strong>, tu dispensario puede convertirse en un referente de innovación y
                    cuidado del paciente, generando más fidelidad, ventas y cumplimiento normativo.
                  </p>
                </div>

                {/* Call to action final */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">¿Querés conocer cómo CanaDoctors puede ayudarte?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Descubre cómo revolucionar la atención en tu dispensario con tecnología de vanguardia.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary">
                      <Link href="https://app.canadoctors.com/signup/canadoctors">Obtener mi licencia ahora</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-green-700"
                    >
                      <Link href="https://wa.me/17876062892?text=Hola%2C%20quiero%20una%20demo%20de%20CanaDoctors%20para%20mi%20dispensario">
                        Solicitar demo personalizada
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
            <BlogSidebar currentSlug="como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia" />
          </aside>
        </div>
      </div>
    </>
  )
}

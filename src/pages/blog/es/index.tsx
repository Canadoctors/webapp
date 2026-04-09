"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { BlogSidebar } from "@/components/blog-sidebar"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

export const metadata: Metadata = {
  title: "Blog de Cannabis Medicinal | CanaDoctors Puerto Rico",
  description:
    "Artículos informativos sobre cannabis medicinal en Puerto Rico. Guías, consejos y noticias actualizadas para pacientes y profesionales de la salud.",
  keywords:
    "blog cannabis medicinal, artículos cannabis puerto rico, información cannabis medicinal, guías cannabis PR",
  openGraph: {
    title: "Blog de Cannabis Medicinal | CanaDoctors Puerto Rico",
    description:
      "Artículos informativos sobre cannabis medicinal en Puerto Rico. Guías, consejos y noticias actualizadas.",
    url: "https://canadoctors.com/blog/es",
    siteName: "CanaDoctors",
    images: [
      {
        url: "https://canadoctors.com/og-blog-cannabis-medicinal.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es-PR",
    type: "website",
  },
}

const blogArticles = [
  {
    id: 1,
    title: "Cómo obtener tu licencia de cannabis medicinal en Puerto Rico: Guía paso a paso (2025)",
    description:
      "Guía completa actualizada para obtener tu licencia de cannabis medicinal en Puerto Rico de forma rápida y segura con CanaDoctors.",
    slug: "como-obtener-licencia-cannabis-medicinal-puerto-rico-2025",
    cover: {
      url: "/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png",
      alternativeText: "Guía para obtener licencia de cannabis medicinal en Puerto Rico",
    },
    publishedAt: "2025-01-07",
    category: "Guías",
  },
  {
    id: 2,
    title: "Diferencias entre genéticas Sativa, Índica e Híbrida: ¿Cuál es mejor para tu tratamiento?",
    description:
      "Descubre las diferencias entre las genéticas de cannabis medicinal y cuál es la más adecuada para tu condición de salud.",
    slug: "diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal",
    cover: {
      url: "/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png",
      alternativeText: "Diferencias entre genéticas de cannabis medicinal",
    },
    publishedAt: "2025-01-07",
    category: "Educación",
  },
  {
    id: 3,
    title: "Cómo los dispensarios en Puerto Rico pueden mejorar la atención al paciente con tecnología",
    description:
      "Descubre cómo la tecnología y el seguimiento en tiempo real están revolucionando la atención en dispensarios de cannabis medicinal.",
    slug: "como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia",
    cover: {
      url: "/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png",
      alternativeText: "Tecnología en dispensarios de cannabis medicinal",
    },
    publishedAt: "2025-01-07",
    category: "Tecnología",
  },
  {
    id: 4,
    title: "Condiciones que califican para cannabis medicinal en Puerto Rico: Lista completa",
    description:
      "Conoce todas las condiciones médicas que califican para obtener tu tarjeta de cannabis medicinal en Puerto Rico según la Ley 42-2017.",
    slug: "condiciones-que-califican-cannabis-medicinal-puerto-rico",
    cover: {
      url: "/images/blog/condiciones-cannabis-medicinal-pr.png",
      alternativeText: "Condiciones que califican para cannabis medicinal en Puerto Rico",
    },
    publishedAt: "2026-04-08",
    category: "Guías",
  },
  {
    id: 5,
    title: "Beneficios del cannabis medicinal para el dolor crónico: Lo que dice la ciencia",
    description:
      "Descubre la evidencia científica detrás del uso del cannabis medicinal para tratar el dolor crónico de forma segura y efectiva.",
    slug: "beneficios-cannabis-medicinal-dolor-cronico",
    cover: {
      url: "/images/blog/beneficios-cannabis-dolor-cronico.png",
      alternativeText: "Beneficios del cannabis medicinal para el dolor crónico",
    },
    publishedAt: "2026-04-08",
    category: "Educación",
  },
  {
    id: 6,
    title: "Cannabis medicinal para ansiedad y depresión en Puerto Rico: Guía completa",
    description:
      "Guía sobre cómo el cannabis medicinal puede ayudar a tratar la ansiedad y depresión bajo supervisión médica en Puerto Rico.",
    slug: "cannabis-medicinal-ansiedad-depresion-puerto-rico",
    cover: {
      url: "/images/blog/cannabis-ansiedad-depresion-pr.png",
      alternativeText: "Cannabis medicinal para ansiedad y depresión",
    },
    publishedAt: "2026-04-08",
    category: "Educación",
  },
  {
    id: 7,
    title: "Cómo renovar tu tarjeta de cannabis medicinal en Puerto Rico (2026)",
    description:
      "Paso a paso para renovar tu tarjeta de cannabis medicinal en Puerto Rico. Requisitos, costos y proceso actualizado.",
    slug: "renovar-tarjeta-cannabis-medicinal-puerto-rico",
    cover: {
      url: "/images/blog/renovar-tarjeta-cannabis-pr.png",
      alternativeText: "Renovar tarjeta cannabis medicinal Puerto Rico",
    },
    publishedAt: "2026-04-08",
    category: "Guías",
  },
  {
    id: 8,
    title: "Cannabis medicinal vs. recreativo: Diferencias clave que debes conocer",
    description:
      "Entiende las diferencias fundamentales entre el cannabis medicinal y recreativo, y el marco legal en Puerto Rico.",
    slug: "cannabis-medicinal-vs-recreativo-diferencias",
    cover: {
      url: "/images/blog/cannabis-medicinal-vs-recreativo.png",
      alternativeText: "Cannabis medicinal vs recreativo diferencias",
    },
    publishedAt: "2026-04-08",
    category: "Educación",
  },
  {
    id: 9,
    title: "El Cannabis Medicinal en Puerto Rico: Un Programa en Encrucijada (2026)",
    description:
      "Análisis del estado del programa basado en el estudio de V2A Consulting para la JRCM. Datos de pacientes, médicos, precios y proyecciones.",
    slug: "cannabis-medicinal-puerto-rico-programa-encrucijada-2026",
    cover: {
      url: "/images/blog/cannabis-medicinal-pr-encrucijada-2026.png",
      alternativeText: "Estado del programa de cannabis medicinal PR 2026",
    },
    publishedAt: "2026-04-08",
    category: "Industria",
  },
  {
    id: 10,
    title: "Guía de los mejores dispensarios de cannabis medicinal en Puerto Rico",
    description:
      "Conoce los dispensarios más destacados en Puerto Rico. Calidad, variedad de productos y atención al paciente.",
    slug: "mejores-dispensarios-cannabis-medicinal-puerto-rico",
    cover: {
      url: "/images/blog/mejores-dispensarios-cannabis-pr.png",
      alternativeText: "Mejores dispensarios cannabis medicinal Puerto Rico",
    },
    publishedAt: "2026-04-08",
    category: "Guías",
  },
  {
    id: 11,
    title: "Cannabis medicinal y la tercera edad: Beneficios, seguridad y consideraciones",
    description:
      "Guía sobre el uso de cannabis medicinal en adultos mayores. Evidencia científica, condiciones comunes y consideraciones especiales.",
    slug: "cannabis-medicinal-tercera-edad-adultos-mayores",
    cover: {
      url: "/images/blog/cannabis-medicinal-tercera-edad.png",
      alternativeText: "Cannabis medicinal para adultos mayores",
    },
    publishedAt: "2026-04-08",
    category: "Educación",
  },
]

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const categories = ["Todos", "Guías", "Educación", "Tecnología", "Industria"]

  const filteredArticles =
    selectedCategory === "Todos"
      ? blogArticles
      : blogArticles.filter((article) => article.category === selectedCategory)

  return (
    <ParallaxProvider>
      <>
        <SiteHeader />
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Blog de Cannabis Medicinal
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Información actualizada, guías prácticas y consejos de expertos sobre cannabis medicinal en Puerto
                  Rico
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {filteredArticles.map((article, index) => (
                  <Parallax key={article.id} translateY={[10, -10]}>
                    <Card className="transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
                      <div className="aspect-video relative">
                        <Image
                          src={article.cover.url || "/placeholder.svg"}
                          alt={article.cover.alternativeText}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform hover:scale-105 duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-2 text-lg">
                          <Link href={`/blog/es/${article.slug}`} className="hover:underline">
                            {article.title}
                          </Link>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Publicado el {new Date(article.publishedAt).toLocaleDateString("es-PR")}
                        </p>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <p className="line-clamp-3 mb-4 flex-1">{article.description}</p>
                        <Button variant="outline" asChild className="w-full bg-transparent">
                          <Link href={`/blog/es/${article.slug}`}>Leer artículo completo</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
                <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu tratamiento?</h2>
                <p className="mb-6 opacity-90">
                  Nuestros médicos certificados están listos para ayudarte a obtener tu licencia de cannabis medicinal
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="https://form.canadoctors.com/">Solicitar Evaluación Médica</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="https://wa.me/17876062892?text=Hola%2C%20quisiera%20información%20sobre%20cannabis%20medicinal">
                      Consultar por WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <BlogSidebar currentSlug="" />
            </aside>
          </div>
        </div>
      </>
    </ParallaxProvider>
  )
}

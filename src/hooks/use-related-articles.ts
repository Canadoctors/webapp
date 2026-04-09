import { useState, useEffect } from "react"

interface RelatedArticle {
  id: number
  title: string
  slug: string
  description: string
}

const allArticles: RelatedArticle[] = [
  { id: 1, title: "Cómo obtener tu licencia de cannabis medicinal en Puerto Rico (2025)", slug: "como-obtener-licencia-cannabis-medicinal-puerto-rico-2025", description: "Guía paso a paso para obtener tu licencia de cannabis medicinal en Puerto Rico." },
  { id: 2, title: "Diferencias entre genéticas Sativa, Índica e Híbrida", slug: "diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal", description: "Descubre cuál genética es mejor para tu tratamiento." },
  { id: 3, title: "Cómo los dispensarios pueden mejorar la atención con tecnología", slug: "como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia", description: "Tecnología y seguimiento en tiempo real en dispensarios." },
  { id: 4, title: "Condiciones que califican para cannabis medicinal en PR", slug: "condiciones-que-califican-cannabis-medicinal-puerto-rico", description: "Lista completa de las 25 condiciones debilitantes según la Ley 42-2017." },
  { id: 5, title: "Beneficios del cannabis medicinal para el dolor crónico", slug: "beneficios-cannabis-medicinal-dolor-cronico", description: "Evidencia científica sobre cannabis y dolor crónico." },
  { id: 6, title: "Cannabis medicinal para ansiedad y depresión en PR", slug: "cannabis-medicinal-ansiedad-depresion-puerto-rico", description: "Cómo el cannabis medicinal puede ayudar con la salud mental." },
  { id: 7, title: "Cómo renovar tu tarjeta de cannabis medicinal (2026)", slug: "renovar-tarjeta-cannabis-medicinal-puerto-rico", description: "Proceso paso a paso para renovar tu tarjeta en PR." },
  { id: 8, title: "Cannabis medicinal vs. recreativo: Diferencias clave", slug: "cannabis-medicinal-vs-recreativo-diferencias", description: "Marco legal y diferencias fundamentales en Puerto Rico." },
  { id: 9, title: "El Cannabis Medicinal en PR: Un Programa en Encrucijada", slug: "cannabis-medicinal-puerto-rico-programa-encrucijada-2026", description: "Análisis del estudio V2A Consulting 2026 para la JRCM." },
  { id: 10, title: "Mejores dispensarios de cannabis medicinal en PR", slug: "mejores-dispensarios-cannabis-medicinal-puerto-rico", description: "Guía de los dispensarios más destacados en Puerto Rico." },
  { id: 11, title: "Cannabis medicinal y la tercera edad", slug: "cannabis-medicinal-tercera-edad-adultos-mayores", description: "Beneficios, seguridad y consideraciones para adultos mayores." },
]

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function useRelatedArticles(currentSlug: string) {
  const [articles, setArticles] = useState<RelatedArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const filtered = allArticles.filter((a) => a.slug !== currentSlug)
    const shuffled = shuffleArray(filtered)
    setArticles(shuffled.slice(0, 3))
    setLoading(false)
  }, [currentSlug])

  return { articles, loading }
}

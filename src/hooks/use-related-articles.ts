import { useState, useEffect } from "react"

interface RelatedArticle {
  id: number
  title: string
  slug: string
  description: string
}

export function useRelatedArticles(currentSlug: string) {
  const [articles, setArticles] = useState<RelatedArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const response = await fetch(
          `https://strapi-dqjm.onrender.com/api/articles?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&sort=publishedAt:desc`,
          {
            headers: {
              Authorization: `Bearer 0f7bcb4965a447d2076e3576bda02197a9776e6a01828e692b0a0fcdd68208545f4a524fc39801617118041aafcd083503aed03b5743b0ab52796e3f7bd3c76322f706aaf495744a5e128d12b9be7a87473ce39cc2a0f805fe164689336d25f7b553bc0bac80bca3d64e7e0217287688f0f6cdd6900c2c26683b62f20f732d3f`,
            },
          },
        )

        if (!response.ok) throw new Error("Failed to fetch related articles")

        const data = await response.json()
        setArticles(
          data.data.map((article: any) => ({
            id: article.id,
            title: article.title,
            slug: article.slug,
            description: article.description,
          })),
        )
      } catch (error) {
        console.error("Error fetching related articles:", error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    if (currentSlug) {
      fetchRelatedArticles()
    }
  }, [currentSlug])

  return { articles, loading }
}


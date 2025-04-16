"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface Article {
  id: number
  documentId: string
  title: string
  description: string
  slug: string | null
  createdAt: string
  publishedAt: string
  updatedAt: string
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch("https://strapi-dqjm.onrender.com/api/articles", {
          headers: {
            Authorization: `Bearer 0f7bcb4965a447d2076e3576bda02197a9776e6a01828e692b0a0fcdd68208545f4a524fc39801617118041aafcd083503aed03b5743b0ab52796e3f7bd3c76322f706aaf495744a5e128d12b9be7a87473ce39cc2a0f805fe164689336d25f7b553bc0bac80bca3d64e7e0217287688f0f6cdd6900c2c26683b62f20f732d3f`,
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setArticles(data.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-destructive">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog de Cannabis Medicinal</h1>
        <p className="text-muted-foreground">Información actualizada sobre cannabis medicinal en Puerto Rico</p>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {new Date(article.publishedAt).toLocaleDateString("es-PR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-3 text-muted-foreground">{article.description}</p>
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white hover:from-teal-600 hover:to-green-600"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

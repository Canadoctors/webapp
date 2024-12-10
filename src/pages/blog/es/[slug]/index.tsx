'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface Article {
  id: number
  documentId: string
  title: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  cover: {
    id: number
    documentId: string
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
      large: { url: string }
      small: { url: string }
      medium: { url: string }
      thumbnail: { url: string }
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  blocks: Array<{
    __component: string
    id: number
    body: string
  }>
}

export default function BlogPost() {
  const params = useParams()
  const slug = params?.slug as string
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('No se proporcionó un slug válido')
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://strapi-dqjm.onrender.com/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
          headers: {
            Authorization: `Bearer 0f7bcb4965a447d2076e3576bda02197a9776e6a01828e692b0a0fcdd68208545f4a524fc39801617118041aafcd083503aed03b5743b0ab52796e3f7bd3c76322f706aaf495744a5e128d12b9be7a87473ce39cc2a0f805fe164689336d25f7b553bc0bac80bca3d64e7e0217287688f0f6cdd6900c2c26683b62f20f732d3f`,
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        if (data.data && data.data.length > 0) {
          setArticle(data.data[0])
        } else {
          throw new Error('Artículo no encontrado')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  if (loading) return <div className="container mx-auto px-4 py-8">Cargando artículo...</div>
  if (error) return <div className="container mx-auto px-4 py-8">Error: {error}</div>
  if (!article) return <div className="container mx-auto px-4 py-8">Artículo no encontrado</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <div className="aspect-video relative">
          <Image
            src={article.cover?.url || "/placeholder.svg"}
            alt={article.cover?.alternativeText || article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
          <p className="text-sm text-gray-500">
            Publicado el {new Date(article.publishedAt).toLocaleDateString('es-PR')}
          </p>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{article.description}</p>
          {article.blocks.map((block, index) => (
            <div key={index} className="mb-4">
              {block.__component === 'shared.rich-text' && (
                <div dangerouslySetInnerHTML={{ __html: block.body }} />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Volver a la página principal</Link>
        </Button>
      </div>
    </div>
  )
}


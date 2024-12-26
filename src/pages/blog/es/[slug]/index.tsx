'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from '@/components/site-header'
import { BlogSidebar } from '@/components/blog-sidebar'

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

  if (loading) return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">Cargando artículo...</div>
    </>
  )
  
  if (error) return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">Error: {error}</div>
    </>
  )
  
  if (!article) return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">Artículo no encontrado</div>
    </>
  )

  const BASE_URL = "https://strapi-dqjm.onrender.com"

  return (
    <>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_350px] xl:gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video relative lg:aspect-[2/1]">
                <Image
                  src={article.cover?.url || '/placeholder.svg'}
                  alt={article.cover?.alternativeText || article.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl lg:text-3xl font-bold">{article.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Publicado el {new Date(article.publishedAt).toLocaleDateString('es-PR')}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{article.description}</p>
                {article.blocks.map((block, index) => (
                  <div key={index} className="prose prose-lg prose-green max-w-none">
                    {block.__component === 'shared.rich-text' && (
                      <div 
                        dangerouslySetInnerHTML={{ __html: block.body }}
                        className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4
                                   [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3
                                   [&>p]:leading-relaxed [&>p]:mb-4
                                   [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
                                   [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
                                   [&>blockquote]:border-l-4 [&>blockquote]:border-green-500 
                                   [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
                                   [&>a]:text-green-600 [&>a]:underline-offset-4 [&>a]:hover:text-green-700"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
            <Button variant="outline" size="lg" asChild className="mt-8">
              <Link href="/" className="flex items-center gap-2">
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
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Volver a la página principal
              </Link>
            </Button>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BlogSidebar currentSlug={slug} />
          </aside>
        </div>
      </div>
    </>
  )
}


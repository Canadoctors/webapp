import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Clock, Newspaper } from "lucide-react"
import { useRelatedArticles } from "@/hooks/use-related-articles"
import { Skeleton } from "@/components/ui/skeleton"

interface BlogSidebarProps {
  currentSlug: string
}

export function BlogSidebar({ currentSlug }: BlogSidebarProps) {
  const { articles, loading } = useRelatedArticles(currentSlug)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Enlaces Rápidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://form.canadoctors.com/">
              <FileText className="mr-2 h-4 w-4" />
              Obtén tu licencia hoy
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://app.canadoctors.com/estado">
              <Clock className="mr-2 h-4 w-4" />
              Consultar estado de mi trámite
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://cannabismedicinal.pr.gov/" target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Junta de Cannabis Medicinal PR
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Artículos Relacionados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <>
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </>
          ) : articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id} className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-left" asChild>
                  <Link href={`/blog/es/${article.slug}`}>
                    <Newspaper className="mr-2 h-4 w-4 shrink-0" />
                    <span className="line-clamp-2">{article.title}</span>
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground line-clamp-2 pl-6">{article.description}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No hay artículos relacionados</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

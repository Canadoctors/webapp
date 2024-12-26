import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Clock, Newspaper } from 'lucide-react'

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enlaces Rápidos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="https://app.canadoctors.com/cuidadeti">
              <FileText className="mr-2 h-4 w-4" />
              Obtén tu licencia hoy
            </Link>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/consultar-estado">
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
          <CardTitle>Artículos Relacionados</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/blog/beneficios-cannabis-medicinal">
              <Newspaper className="mr-2 h-4 w-4" />
              Beneficios del Cannabis Medicinal
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/blog/proceso-licencia">
              <Newspaper className="mr-2 h-4 w-4" />
              Proceso de Licencia
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/blog/condiciones-cualifican">
              <Newspaper className="mr-2 h-4 w-4" />
              Condiciones que Cualifican
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


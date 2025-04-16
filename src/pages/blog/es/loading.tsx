import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-[300px]" />
        <Skeleton className="mx-auto h-6 w-[500px]" />
      </div>

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
    </div>
  )
}

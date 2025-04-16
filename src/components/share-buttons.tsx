import { Facebook, Twitter, Share2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "_blank")
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, "_blank")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      alert("¡Enlace copiado!")
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" className="text-blue-600 hover:text-blue-700" onClick={shareOnFacebook}>
        <Facebook className="h-4 w-4 mr-2" />
        Facebook
      </Button>
      <Button variant="outline" size="sm" className="text-sky-500 hover:text-sky-600" onClick={shareOnTwitter}>
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>
      <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700" onClick={shareOnWhatsApp}>
        <Send className="h-4 w-4 mr-2" />
        WhatsApp
      </Button>
      <Button variant="outline" size="sm" onClick={copyToClipboard}>
        <Share2 className="h-4 w-4 mr-2" />
        Copiar enlace
      </Button>
    </div>
  )
}

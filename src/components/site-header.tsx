"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-brand-primary/5">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        <Link href="https://canadoctors.com/" className="flex items-center">
          <Image src="/images/logosCD/logopositivo.svg" alt="CanaDoctors" width={140} height={56} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "Beneficios", href: "https://canadoctors.com/#beneficios" },
            { label: "Proceso", href: "https://canadoctors.com/#proceso" },
            { label: "Servicios", href: "https://canadoctors.com/#servicios" },
            { label: "FAQ", href: "https://canadoctors.com/#faq" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-neutral/70 hover:text-brand-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Button
          className="hidden lg:inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 h-11 text-sm font-medium btn-magnetic"
          asChild
        >
          <Link href="https://form.canadoctors.com/">
            Reservar Consulta
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-brand-primary/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menú"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-brand-neutral" /> : <Menu className="h-6 w-6 text-brand-neutral" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-700 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-brand-primary">
          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between p-6">
              <Image src="/images/logosCD/logopositivo.svg" alt="CanaDoctors" width={120} height={48} className="brightness-0 invert" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start justify-center px-12 gap-6">
              {["Beneficios", "Proceso", "Servicios", "FAQ", "Contacto"].map((item) => (
                <Link
                  key={item}
                  href={`https://canadoctors.com/#${item.toLowerCase()}`}
                  className="text-4xl font-light text-white/80 hover:text-white transition-all duration-300 hover:translate-x-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}

              <Button
                size="lg"
                className="mt-8 bg-white text-brand-primary hover:bg-white/90 rounded-full px-10 h-14 text-base font-medium"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="https://form.canadoctors.com/">Reservar Consulta</Link>
              </Button>
            </div>

            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-secondary/20" />
          </div>
        </div>
      </div>
    </header>
  )
}

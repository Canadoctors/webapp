'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logosCD/logopositivo.svg" alt="Logo de CanaDoctors" width={150} height={60} />
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link href="#beneficios" className="text-sm font-medium hover:underline underline-offset-4">Beneficios</Link>
          <Link href="#proceso" className="text-sm font-medium hover:underline underline-offset-4">Proceso</Link>
          <Link href="#servicios" className="text-sm font-medium hover:underline underline-offset-4">Servicios</Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">Preguntas Frecuentes</Link>
        </nav>
        <Button className="hidden md:inline-flex" asChild>
          <Link href="https://app.canadoctors.com/cuidadeti">Reservar Consulta</Link>
        </Button>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menú"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-gradient-to-r from-[rgb(0,160,153)] to-[rgb(140,187,147)]">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" aria-hidden="true" />
            <div className="relative h-full flex flex-col">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-white/20 p-2"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8">
                <Link
                  href="#beneficios"
                  className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BENEFICIOS
                </Link>
                <Link
                  href="#proceso"
                  className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROCESO
                </Link>
                <Link
                  href="#servicios"
                  className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICIOS
                </Link>
                <Link
                  href="#faq"
                  className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PREGUNTAS FRECUENTES
                </Link>
                <Link
                  href="#contacto"
                  className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACTO
                </Link>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="mt-4 bg-white/20 text-white hover:bg-white/30 border-2 border-white"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="#reservar-consulta">RESERVAR CONSULTA</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, Video, Star, Heart, Menu, X, ArrowRight, ArrowUpRight, ChevronDown, Leaf, Shield, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Cannabis Medicinal en Puerto Rico | CanaDoctors",
  description:
    "Obtén tu tarjeta de Cannabis Medicinal en Puerto Rico con CanaDoctors. Orientación experta, aprobaciones rápidas y atención compasiva. Comienza tu camino hacia el bienestar hoy.",
  openGraph: {
    title: "Cannabis Medicinal en Puerto Rico | CanaDoctors",
    description:
      "Obtén tu tarjeta de Cannabis Medicinal en Puerto Rico con CanaDoctors. Orientación experta, aprobaciones rápidas y atención compasiva.",
    url: "https://canadoctors.com/puerto-rico",
    siteName: "CanaDoctors",
    images: [
      {
        url: "https://canadoctors.com/og-image-puerto-rico.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es-PR",
    type: "website",
  },
}

// Hook for scroll-triggered animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const staticArticles = [
  {
    id: 1,
    title: "Cómo obtener tu licencia de cannabis medicinal en Puerto Rico",
    description:
      "Guía completa actualizada para obtener tu licencia de cannabis medicinal en Puerto Rico de forma rápida y segura.",
    slug: "como-obtener-licencia-cannabis-medicinal-puerto-rico-2025",
    cover: {
      url: "/images/blog/como-obtener-tu-licencia-canabis-medicinal-puerto-rico.png",
      alternativeText: "Guía para obtener licencia de cannabis medicinal en Puerto Rico",
    },
    publishedAt: "2025-01-07",
  },
  {
    id: 2,
    title: "Diferencias entre genéticas Sativa, Índica e Híbrida",
    description:
      "Descubre las diferencias entre las genéticas de cannabis medicinal y cuál es la más adecuada para tu condición.",
    slug: "diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal",
    cover: {
      url: "/images/blog/diferencias-geneticas-sativa-indica-hibrida-cannabis-medicinal.png",
      alternativeText: "Diferencias entre genéticas de cannabis medicinal",
    },
    publishedAt: "2025-01-07",
  },
  {
    id: 3,
    title: "Cómo los dispensarios pueden mejorar la atención con tecnología",
    description:
      "Descubre cómo la tecnología y el seguimiento en tiempo real revolucionan la atención en dispensarios.",
    slug: "como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia",
    cover: {
      url: "/images/blog/como-dispensarios-puerto-rico-mejorar-atencion-paciente-tecnologia.png",
      alternativeText: "Tecnología en dispensarios de cannabis medicinal",
    },
    publishedAt: "2025-01-07",
  },
]

export default function PuertoRicoLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerOpacity = Math.min(scrollY / 100, 1)

  return (
    <div className="flex flex-col min-h-screen grain overflow-x-hidden">
      {/* ═══════════ HEADER ═══════════ */}
      <header
        className="fixed top-0 z-50 w-full transition-all duration-500"
        style={{
          backgroundColor: scrollY > 20 ? "rgba(247, 249, 247, 0.95)" : "transparent",
          backdropFilter: scrollY > 20 ? "blur(20px)" : "none",
          borderBottom: scrollY > 20 ? "1px solid rgba(26, 100, 95, 0.08)" : "1px solid transparent",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
          <Link href="/" className="flex items-center">
            <Image src="../images/logosCD/logopositivo.svg" alt="CanaDoctors" width={140} height={56} />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: "Beneficios", href: "#beneficios" },
              { label: "Proceso", href: "#proceso" },
              { label: "Servicios", href: "#servicios" },
              { label: "Blog", href: "/blog/es" },
              { label: "FAQ", href: "#faq" },
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

          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 h-11 text-sm font-medium btn-magnetic transition-all duration-300"
              asChild
            >
              <Link href="https://form.canadoctors.com/">
                Reservar Consulta
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

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
                <Image src="../images/logosCD/logocanadoctorwhite.svg" alt="CanaDoctors" width={120} height={48} className="brightness-0 invert" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-start justify-center px-12 gap-6">
                {["Beneficios", "Proceso", "Servicios", "Blog", "FAQ", "Contacto"].map((item, i) => (
                  <Link
                    key={item}
                    href={item === "Blog" ? "/blog/es" : `#${item.toLowerCase()}`}
                    className="text-4xl font-light text-white/80 hover:text-white transition-all duration-300 hover:translate-x-4"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      transitionDelay: isMenuOpen ? `${i * 80}ms` : "0ms",
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    }}
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

              {/* Decorative circle */}
              <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-secondary/20" />
              <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-brand-tertiary/10" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ═══════════ HERO ═══════════ */}
        <section className="relative min-h-[100dvh] max-h-[100dvh] overflow-hidden bg-[#f7f9f7]">
          {/* Subtle background shapes */}
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-primary/[0.03] rounded-bl-[60px] md:rounded-bl-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-brand-tertiary/10 blur-[80px]" />

          <div className="relative z-10 h-[100dvh] flex flex-col pt-20 md:pt-24">
            {/* Top: Text content */}
            <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-5 pt-2 md:pt-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse-soft" />
                  <span className="text-xs sm:text-sm font-medium text-brand-primary">Médicos Certificados en Cannabis Medicinal</span>
                </div>

                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-brand-neutral px-2"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(40px)",
                    transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
                  }}
                >
                  Tu Bienestar, Nuestra{" "}
                  <span className="font-display italic text-brand-primary">Prioridad</span>
                </h1>

                <p
                  className="text-sm sm:text-base md:text-lg text-brand-neutral/50 max-w-2xl leading-relaxed font-light px-4 sm:px-0"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                  }}
                >
                  Obtén tu Tarjeta de Cannabis Medicinal en Puerto Rico con orientación experta, aprobaciones rápidas y atención compasiva.
                </p>

                <div
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
                  }}
                >
                  <Button
                    size="lg"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 sm:px-10 h-11 sm:h-12 text-sm sm:text-base font-medium btn-magnetic group shadow-lg shadow-brand-primary/20 w-full sm:w-auto"
                    asChild
                  >
                    <Link href="https://form.canadoctors.com/">
                      Reservar Consulta
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-brand-neutral/70 hover:text-brand-primary border-brand-neutral/15 hover:border-brand-primary/30 rounded-full px-8 h-11 sm:h-12 text-sm sm:text-base font-medium w-full sm:w-auto"
                    asChild
                  >
                    <Link href="#beneficios">Más Información</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div
                  className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 pt-2 sm:pt-4"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transition: "opacity 1s ease 1.2s",
                  }}
                >
                  {[
                    { number: "25K+", label: "Pacientes" },
                    { number: "99.9%", label: "Aprobación" },
                    { number: "24h", label: "Respuesta" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-primary">{stat.number}</span>
                      <span className="text-[10px] sm:text-[11px] text-brand-neutral/40 uppercase tracking-wider mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Doctors image - full width, anchored to bottom */}
            <div
              className="flex-1 flex items-end justify-center relative mt-2 sm:mt-4 min-h-0"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
              }}
            >
              <div className="relative">
                <Image
                  src="/images/md/hero-doctors.png"
                  alt="Equipo de médicos certificados en cannabis medicinal de CanaDoctors"
                  width={900}
                  height={600}
                  className="object-contain object-bottom relative z-10 drop-shadow-2xl max-h-[35vh] sm:max-h-[40vh] md:max-h-[45vh]"
                  priority
                />

                {/* Floating card - rating */}
                <div className="absolute -left-2 sm:left-0 top-[15%] z-20 animate-float hidden sm:block">
                  <div className="bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-xl border border-black/5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-primary fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-brand-neutral/40">Rating</p>
                      <p className="text-xs sm:text-sm font-bold text-brand-neutral">4.9 / 5.0</p>
                    </div>
                  </div>
                </div>

                {/* Floating card - patients */}
                <div className="absolute -right-2 sm:right-0 top-[10%] z-20 hidden sm:block" style={{ animation: "float 6s ease-in-out 2s infinite" }}>
                  <div className="bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl border border-black/5">
                    <p className="text-[10px] sm:text-[11px] text-brand-neutral/40">Pacientes Atendidos</p>
                    <p className="text-base sm:text-lg font-bold text-brand-primary">25,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ MARQUEE ═══════════ */}
        <section className="py-6 border-y border-brand-primary/10 bg-background overflow-hidden">
          <div className="animate-marquee marquee-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center shrink-0">
                {["Cannabis Medicinal", "Puerto Rico", "Médicos Certificados", "Aprobación Rápida", "Atención Profesional", "Bienestar Natural"].map((text, i) => (
                  <span key={i} className="flex items-center shrink-0 mx-8">
                    <span className="w-2 h-2 rounded-full bg-brand-secondary mr-8" />
                    <span className="text-sm font-medium text-brand-neutral/40 uppercase tracking-[0.2em] whitespace-nowrap">{text}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════ BENEFICIOS ═══════════ */}
        <section id="beneficios" className="py-16 md:py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <RevealSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 md:mb-20">
                <div>
                  <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">Beneficios</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-neutral mt-3 md:mt-4 leading-tight">
                    Beneficios del
                    <br />
                    Cannabis <span className="font-display italic text-brand-primary">Medicinal</span>
                  </h2>
                </div>
                <p className="text-lg text-brand-neutral/50 max-w-md font-light leading-relaxed">
                  Descubre cómo el cannabis medicinal puede mejorar tu calidad de vida de forma segura y supervisada.
                </p>
              </div>
            </RevealSection>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Leaf className="w-6 h-6" />, title: "Manejo del Dolor", description: "Alivio efectivo para condiciones de dolor crónico sin los efectos secundarios de los opioides." },
                { icon: <Shield className="w-6 h-6" />, title: "Reducción de Ansiedad", description: "Ayuda a manejar los síntomas de ansiedad y estrés de manera natural y controlada." },
                { icon: <Heart className="w-6 h-6" />, title: "Mejora del Sueño", description: "Contribuye a lograr un sueño reparador y de mejor calidad cada noche." },
                { icon: <Users className="w-6 h-6" />, title: "Control de Náuseas", description: "Reduce las náuseas, especialmente en pacientes bajo tratamiento de cáncer." },
                { icon: <Clock className="w-6 h-6" />, title: "Estimulación del Apetito", description: "Ayuda a aumentar el apetito en pacientes con condiciones que lo requieren." },
                { icon: <Leaf className="w-6 h-6" />, title: "Relajación Muscular", description: "Ayuda a reducir los espasmos musculares y la tensión corporal." },
              ].map((benefit, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <div className="group relative bg-white rounded-2xl p-6 sm:p-8 hover-lift border border-brand-primary/5 cursor-default h-full">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-neutral mb-3">{benefit.title}</h3>
                    <p className="text-brand-neutral/50 leading-relaxed font-light">{benefit.description}</p>
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-brand-primary" />
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESO ═══════════ */}
        <section id="proceso" className="py-16 md:py-24 lg:py-36 bg-brand-primary relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-secondary/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-tertiary/15 blur-[80px]" />

          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl relative z-10">
            <RevealSection>
              <div className="text-center mb-12 md:mb-20">
                <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">Proceso</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3 md:mt-4 leading-tight">
                  Tu camino hacia el
                  <br />
                  <span className="font-display italic text-brand-tertiary">bienestar</span>
                </h2>
              </div>
            </RevealSection>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Reservar Consulta", description: "Programa tu cita con un médico certificado de CanaDoctors en minutos." },
                { step: "02", title: "Evaluación Médica", description: "Discute tu historial médico y condiciones con nuestro médico experto." },
                { step: "03", title: "Certificación", description: "Si se aprueba, recibe tu certificación médica para cannabis medicinal." },
                { step: "04", title: "Registro Estatal", description: "Completa tu registro en el Programa de Cannabis Medicinal con nuestra guía." },
              ].map((step, index) => (
                <RevealSection key={index} delay={index * 150}>
                  <div className="group glass rounded-2xl p-6 sm:p-8 h-full hover-lift cursor-default">
                    <span className="text-5xl font-bold text-white/10 group-hover:text-brand-secondary/30 transition-colors duration-500">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-4 mb-3">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed font-light">{step.description}</p>
                  </div>
                </RevealSection>
              ))}
            </div>

            <RevealSection delay={600}>
              <div className="text-center mt-16">
                <Button
                  size="lg"
                  className="bg-brand-secondary hover:bg-brand-secondary/90 text-white rounded-full px-12 h-14 text-base font-medium btn-magnetic group"
                  asChild
                >
                  <Link href="https://form.canadoctors.com/">
                    Comenzar Ahora
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ═══════════ SERVICIOS ═══════════ */}
        <section id="servicios" className="py-16 md:py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <RevealSection>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 md:mb-20">
                <div>
                  <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">Servicios</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-neutral mt-3 md:mt-4 leading-tight">
                    Nuestros
                    <br />
                    <span className="font-display italic text-brand-primary">Servicios</span>
                  </h2>
                </div>
                <p className="text-lg text-brand-neutral/50 max-w-md font-light leading-relaxed">
                  Atención integral para tu proceso de cannabis medicinal en Puerto Rico.
                </p>
              </div>
            </RevealSection>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {[
                {
                  title: "Consultas Presenciales",
                  description: "Citas completas con médicos licenciados en Puerto Rico especializados en cannabis medicinal.",
                  icon: <Users className="w-8 h-8" />,
                },
                {
                  title: "Asistencia con la Solicitud",
                  description: "Orientación experta a través del proceso de solicitud del Programa de Cannabis Medicinal.",
                  icon: <Shield className="w-8 h-8" />,
                },
                {
                  title: "Seguimiento Médico",
                  description: "Apoyo continuo y consultas de seguimiento para garantizar resultados óptimos del tratamiento.",
                  icon: <Heart className="w-8 h-8" />,
                },
                {
                  title: "Recursos Educativos",
                  description: "Acceso a materiales educativos completos sobre cannabis medicinal y regulaciones en Puerto Rico.",
                  icon: <Leaf className="w-8 h-8" />,
                },
              ].map((service, index) => (
                <RevealSection key={index} delay={index * 100}>
                  <div className="group relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 hover-lift border border-brand-primary/5 cursor-default overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-primary/3 -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/8 transition-all duration-700" />
                    <div className="relative z-10">
                      <div className="text-brand-primary/30 mb-6 group-hover:text-brand-primary transition-colors duration-500">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-brand-neutral mb-4">{service.title}</h3>
                      <p className="text-brand-neutral/50 leading-relaxed font-light text-lg">{service.description}</p>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ TESTIMONIOS ═══════════ */}
        <section id="testimonios" className="py-16 md:py-24 lg:py-36 bg-[#f5f7f5]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <RevealSection>
              <div className="text-center mb-12 md:mb-20">
                <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">Testimonios</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-neutral mt-3 md:mt-4 leading-tight">
                  Historias de <span className="font-display italic text-brand-primary">éxito</span>
                </h2>
              </div>
            </RevealSection>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María G.",
                  quote: "CanaDoctors hizo que obtener mi tarjeta de cannabis medicinal fuera muy fácil. Sus médicos son conocedores y compasivos.",
                  image: "/images/reviews/sarha.png",
                },
                {
                  name: "Roberto S.",
                  quote: "Al principio estaba dudoso, pero el equipo de CanaDoctors me guió en cada paso. Ahora tengo el alivio que necesitaba.",
                  image: "/images/reviews/michael.png",
                },
                {
                  name: "Carmen L.",
                  quote: "La consulta presencial fue minuciosa y profesional. ¡Altamente recomendado para cualquiera que lo necesite!",
                  image: "/images/reviews/emily.png",
                },
              ].map((testimonial, index) => (
                <RevealSection key={index} delay={index * 150}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 hover-lift border border-brand-primary/5 h-full flex flex-col">
                    <div className="flex text-brand-secondary mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-brand-neutral/70 leading-relaxed font-light text-lg flex-1 mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-brand-primary/5">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-brand-neutral">{testimonial.name}</p>
                        <p className="text-sm text-brand-neutral/40">Paciente verificado</p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ BLOG ═══════════ */}
        <section id="blog" className="py-16 md:py-24 lg:py-36 bg-background">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <RevealSection>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 md:gap-6 mb-12 md:mb-20">
                <div>
                  <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">Blog</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-neutral mt-3 md:mt-4 leading-tight">
                    Últimos <span className="font-display italic text-brand-primary">Artículos</span>
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  className="text-brand-primary hover:text-brand-primary/80 rounded-full group"
                  asChild
                >
                  <Link href="/blog/es">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </RevealSection>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {staticArticles.map((article, index) => (
                <RevealSection key={article.id} delay={index * 150}>
                  <Link href={`/blog/es/${article.slug}`} className="group block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden hover-lift border border-brand-primary/5 h-full flex flex-col">
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <Image
                          src={article.cover.url || "/placeholder.svg"}
                          alt={article.cover.alternativeText || ""}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 sm:p-8 flex flex-col flex-1">
                        <span className="text-xs text-brand-neutral/30 uppercase tracking-widest mb-3">
                          {new Date(article.publishedAt).toLocaleDateString("es-PR", { year: "numeric", month: "long" })}
                        </span>
                        <h3 className="text-xl font-semibold text-brand-neutral mb-3 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-brand-neutral/50 font-light leading-relaxed line-clamp-2 flex-1">{article.description}</p>
                        <div className="flex items-center gap-2 mt-6 text-brand-primary text-sm font-medium">
                          Leer más
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" className="py-16 md:py-24 lg:py-36 bg-[#f5f7f5]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
              <RevealSection>
                <div className="lg:sticky lg:top-32">
                  <span className="text-sm font-medium text-brand-secondary uppercase tracking-[0.2em]">FAQ</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-neutral mt-3 md:mt-4 leading-tight">
                    Preguntas
                    <br />
                    <span className="font-display italic text-brand-primary">Frecuentes</span>
                  </h2>
                  <p className="text-lg text-brand-neutral/50 max-w-md font-light leading-relaxed mt-6">
                    Todo lo que necesitas saber sobre el proceso de obtener tu tarjeta de cannabis medicinal en Puerto Rico.
                  </p>
                </div>
              </RevealSection>

              <RevealSection delay={200}>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {[
                    {
                      question: "¿Quién califica para el cannabis medicinal en Puerto Rico?",
                      answer:
                        "Pacientes con condiciones cualificantes como: Alzheimer, Anorexia, Artritis, Cáncer, Desórdenes de Ansiedad, Esclerosis Múltiple, Epilepsia, Fibromialgia, Hepatitis C, Infección del VIH, Migraña, Parkinson, entre otras.",
                    },
                    {
                      question: "¿Cuánto tiempo toma el proceso de solicitud?",
                      answer: "El proceso generalmente toma de 2 a 3 semanas desde la consulta hasta recibir tu tarjeta de cannabis medicinal.",
                    },
                    {
                      question: "¿Se requieren consultas presenciales?",
                      answer: "Sí, Puerto Rico requiere consultas presenciales para las certificaciones de cannabis medicinal.",
                    },
                    {
                      question: "¿Cuánto cuesta obtener una tarjeta de cannabis medicinal?",
                      answer: "El costo incluye la tarifa de solicitud estatal y la tarifa de consulta médica. Contáctanos para información actualizada sobre precios.",
                    },
                    {
                      question: "¿Cuánto tiempo es válida la tarjeta?",
                      answer: "Las tarjetas de cannabis medicinal en Puerto Rico son típicamente válidas por un año, pero pueden variar según la recomendación del médico.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-2xl border border-brand-primary/5 px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-base font-medium text-brand-neutral hover:text-brand-primary py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-neutral/50 font-light leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA FINAL ═══════════ */}
        <section className="py-16 md:py-24 lg:py-36 bg-brand-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-secondary/20 blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-brand-tertiary/15 blur-[60px] md:blur-[100px]" />
          </div>

          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-4xl relative z-10">
            <RevealSection>
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  ¿Listo para comenzar
                  <br />
                  tu <span className="font-display italic text-brand-tertiary">camino</span>?
                </h2>
                <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mt-8 font-light leading-relaxed">
                  Reserva tu consulta hoy y da el primer paso hacia el alivio natural con cannabis medicinal.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <Button
                    size="lg"
                    className="bg-white text-brand-primary hover:bg-white/90 rounded-full px-12 h-14 text-base font-medium btn-magnetic group"
                    asChild
                  >
                    <Link href="https://form.canadoctors.com/">
                      Reserva Tu Consulta
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-brand-neutral border-t border-white/5">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
          {/* Top */}
          <div className="py-12 md:py-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-2 lg:col-span-2">
              <Image src="../images/logosCD/logocanadoctorwhite.svg" alt="CanaDoctors" width={140} height={56} className="brightness-0 invert mb-4 md:mb-6" />
              <p className="text-white/30 font-light leading-relaxed max-w-sm">
                Plataforma líder en cannabis medicinal. Conectando médicos y pacientes para un bienestar natural.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-6">Enlaces</h4>
              <ul className="space-y-3">
                {[
                  { label: "Inicio", href: "/" },
                  { label: "Blog", href: "/blog/es" },
                  { label: "Contacto", href: "#contacto" },
                  { label: "Regístrate", href: "https://form.canadoctors.com/" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/30 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] mb-6">Legal</h4>
              <ul className="space-y-3">
                {[
                  { label: "Términos y condiciones", href: "/terms" },
                  { label: "Ingresar", href: "https://app.canadoctors.com/" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/30 hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/5" />

          {/* Bottom */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} CanaDoctors. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/canadoctors/"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
              <Link
                href="https://www.youtube.com/@canadoctors"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

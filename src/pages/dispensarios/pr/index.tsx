'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Calendar, Clock, LineChart, ShieldCheck, Users, PhoneIcon as WhatsApp, Mail, Globe, MessageSquare } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import Budtender from "../../../assets/images/budtender.png"
import Iphone from "../../../assets/images/iphone.png"

export default function LandingPage() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 bg-white z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="../../../images/logosCD/logopositivo.svg"
            alt="CanaDoctors Logo"
            width={150}
            height={40}
            className="h-4 w-auto"
          />
          <span className="sr-only">CanaDoctors</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#beneficios">
            Beneficios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#caracteristicas">
            Características
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-teal-500 to-emerald-500">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Potencia tu Dispensario con CanaDoctors
                  </h1>
                  <p className="max-w-[600px] text-zinc-100 md:text-xl">
                    Plataforma integral para la retención y obtención de nuevos pacientes. Conectamos médicos certificados con pacientes, simplificando el proceso y aumentando tus ingresos.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-teal-500 shadow transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    href="#contacto"
                  >
                    Programa una Reunión
                  </Link>
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-500"
                    href="#beneficios"
                  >
                    Conoce más
                  </Link>
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-teal-500"
                    href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20tener%20más%20información%20para%20mi%20dispensario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp className="mr-2 h-4 w-4" />
                    Contactar por WhatsApp
                  </Link>
                </div>
              </div>
              <Image
                alt="Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={310}
                src={Budtender}
                width={550}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="beneficios">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-500 px-3 py-1 text-sm text-white">
                  Beneficios Exclusivos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Maximiza el Potencial de tu Dispensario
                </h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a la red líder de dispensarios y descubre cómo podemos ayudarte a crecer y retener pacientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center justify-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <LineChart className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Aumenta la Retención</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Incrementa hasta un 25% la retención de pacientes con nuestro sistema integrado.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Sistema Personalizado</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Accede a un dashboard exclusivo para budtenders con seguimiento en tiempo real.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <ShieldCheck className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Ágil y Seguro</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Proceso simplificado y seguro para la gestión de trámites y documentación.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Landing Page Personalizada</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Cada dispensario obtiene su propia landing page y formulario para captar pacientes.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Mail className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Campañas de Email</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Automatiza recordatorios para renovación de licencias y fideliza a tus pacientes.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-teal-500" />
                  <h3 className="text-xl font-bold mt-4">Chatbot con IA</h3>
                  <p className="text-sm text-zinc-500 mt-2">
                    Ofrece atención 24/7 a tus pacientes con nuestro chatbot inteligente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50" id="caracteristicas">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Características Principales</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo nuestra plataforma integral mejora la retención y adquisición de pacientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Platform Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={310}
                src={Iphone}
                width={650}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Landing Page Personalizada</h3>
                      <p className="text-zinc-500">
                        Cada dispensario recibe una landing page única con un formulario de captura optimizado para convertir visitantes en pacientes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Campañas de Email Automatizadas</h3>
                      <p className="text-zinc-500">
                        Sistema de recordatorios para renovación de licencias y campañas personalizadas para mantener el engagement de tus pacientes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Chatbot con Inteligencia Artificial</h3>
                      <p className="text-zinc-500">
                        Proporciona atención instantánea y respuestas a preguntas frecuentes, mejorando la experiencia del paciente y reduciendo la carga de trabajo del personal.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Dashboard para Budtenders</h3>
                      <p className="text-zinc-500">
                        Herramienta de gestión en tiempo real para seguimiento de pacientes, trámites y análisis de datos para optimizar tus operaciones.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-500" id="contacto">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-teal-500">
                    Únete a CanaDoctors
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Agenda una Reunión</h2>
                  <p className="max-w-[600px] text-zinc-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Descubre cómo podemos ayudarte a optimizar tus operaciones, aumentar tus ingresos y mejorar la retención de pacientes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="dispensary">Nombre del Dispensario</Label>
                    <Input id="dispensary" placeholder="Ingresa el nombre de tu dispensario" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Ubicación</Label>
                    <Input id="location" placeholder="Ciudad, Estado" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" placeholder="(123) 456-7890" type="tel" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" placeholder="tu@email.com" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Fecha Preferida</Label>
                    <div className="flex space-x-2">
                      <Input id="date" type="date" className="flex-1" />
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Hora" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  Solicitar Reunión
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="../../../images/logosCD/logopositivo.svg"
              alt="CanaDoctors Logo"
              width={100}
              height={30}
              className="h-2 w-auto"
            />
            <p className="text-center text-sm leading-loose text-zinc-500 md:text-left">
              © 2024 CanaDoctors. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Términos
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


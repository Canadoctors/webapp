import { useState, useEffect, useRef } from "react"
import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Menu, X, Leaf, Heart, Users, ThumbsUp } from "lucide-react"
import { contactForm } from "@/application/api"
import { useToast } from "@/hooks/use-toast"
import { db } from "@/lib/firebase" // Asegúrate de que esta importación sea correcta
import { collection, addDoc, onSnapshot, doc, updateDoc, getDoc, setDoc } from "firebase/firestore"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Lista de patologías tratadas con cannabis medicinal
const patologias = [
  "Dolor crónico",
  "Epilepsia refractaria",
  "Esclerosis múltiple",
  "Náuseas por quimioterapia",
  "Glaucoma",
  "Enfermedad de Alzheimer",
  "Trastorno de estrés postraumático",
  "Fibromialgia",
  "Artritis",
  "Insomnio",
  "Ansiedad",
  "Otra",
]

// Lista de provincias de Panamá
const provincias = [
  "Bocas del Toro",
  "Chiriquí",
  "Coclé",
  "Colón",
  "Darién",
  "Herrera",
  "Los Santos",
  "Panamá",
  "Panamá Oeste",
  "Veraguas",
  "Guna Yala",
  "Emberá-Wounaan",
  "Ngäbe-Buglé",
]

export default function PanamaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  // Estados para el contador y el formulario de apoyo
  const [supportCount, setSupportCount] = useState(0)
  const [isSupportDialogOpen, setIsSupportDialogOpen] = useState(false)
  const [isSupportSubmitting, setIsSupportSubmitting] = useState(false)
  const [isSupportSuccess, setIsSupportSuccess] = useState(false)
  const [supportFormData, setSupportFormData] = useState({
    fullName: "",
    email: "",
    pathology: "",
    province: "",
  })

  // Referencia para la sección de apoyo
  const supportSectionRef = useRef<HTMLElement>(null)

  // Efecto para obtener el contador de apoyos en tiempo real
  useEffect(() => {
    const counterRef = doc(db, "counters", "supportCounter")

    // Obtener el contador inicial
    const getInitialCount = async () => {
      try {
        const docSnap = await getDoc(counterRef)
        if (docSnap.exists()) {
          setSupportCount(docSnap.data().count || 0)
        } else {
          // Si no existe el documento contador, lo creamos
          await setDoc(counterRef, { count: 0 })
          setSupportCount(0)
        }
        
      } catch (error) {
        console.error("Error al obtener el contador:", error)
        // Si hay error al obtener, intentamos crear el documento
        try {
          await setDoc(counterRef, { count: 0 })
        } catch (innerError) {
          console.error("Error al crear el contador:", innerError)
        }
      }
      
      
    }
    

    getInitialCount()
    

    // Suscribirse a cambios en el contador
    const unsubscribe = onSnapshot(counterRef, (doc) => {
      if (doc.exists()) {
        console.log("Contador actualizado en snapshot:", doc.data().count)
        setSupportCount(doc.data().count || 0)
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSupportInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSupportFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleProvinceChange = (value: string) => {
    setSupportFormData((prev) => ({
      ...prev,
      province: value,
    }))
  }

  const handlePathologyChange = (value: string) => {
    setSupportFormData((prev) => ({
      ...prev,
      pathology: value,
    }))
  }

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (
      !supportFormData.fullName ||
      !supportFormData.email ||
      !supportFormData.pathology ||
      !supportFormData.province
    ) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos del formulario.",
        variant: "destructive",
      })
      return
    }

    setIsSupportSubmitting(true)

    try {
      // Añadir el nuevo apoyo a la colección
      await addDoc(collection(db, "supports"), {
        ...supportFormData,
        timestamp: new Date().toISOString(),
      })

      // Actualizar el contador
      const counterRef = doc(db, "counters", "supportCounter")
      const docSnap = await getDoc(counterRef)

      if (docSnap.exists()) {
        await updateDoc(counterRef, {
          count: (docSnap.data().count || 0) + 1,
        })
      } else {
        await setDoc(counterRef, { count: 1 })
      }

      setIsSupportSuccess(true)
      toast({
        title: "¡Gracias por tu apoyo!",
        description: (
          <div className="flex items-center">
            <ThumbsUp className="h-5 w-5 text-green-500 mr-2" />
            <span>Tu apoyo ha sido registrado exitosamente.</span>
          </div>
        ),
      })

      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setSupportFormData({
          fullName: "",
          email: "",
          pathology: "",
          province: "",
        })
        setIsSupportSuccess(false)
        setIsSupportDialogOpen(false)
      }, 3000)
    } catch (error) {
      console.error("Error al registrar apoyo:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al registrar tu apoyo. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSupportSubmitting(false)
    }
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      acceptTerms: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.acceptTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones para continuar.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await contactForm({
        ...formData,
        country: "Panama",
        timestamp: new Date().toISOString(),
      })

      setIsSuccess(true)
      toast({
        title: "Formulario enviado",
        description: (
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Hemos recibido tu información. Nos pondremos en contacto contigo pronto.</span>
          </div>
        ),
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          acceptTerms: false,
        })
        setIsSuccess(false)
        setIsDialogOpen(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu información. Por favor intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSupportSection = () => {
    supportSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logosCD/logopositivo.svg" alt="Logo de CanaDoctors" width={150} height={60} />
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link href="#legalidad" className="text-sm font-medium hover:underline underline-offset-4">
              Marco Legal
            </Link>
            <Link href="#patologias" className="text-sm font-medium hover:underline underline-offset-4">
              Patologías Tratadas
            </Link>
            <Link href="#consideraciones" className="text-sm font-medium hover:underline underline-offset-4">
              Consideraciones
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              Preguntas Frecuentes
            </Link>
          </nav>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="hidden md:inline-flex">Solicitar Información</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Solicita información sobre Cannabis Medicinal</DialogTitle>
                <DialogDescription>
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </DialogDescription>
              </DialogHeader>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center">¡Gracias por contactarnos!</h3>
                  <p className="text-center text-muted-foreground">
                    Hemos recibido tu información. Un especialista se pondrá en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nombre completo</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ingresa tu nombre completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Tu número de teléfono"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="acceptTerms" checked={formData.acceptTerms} onCheckedChange={handleCheckboxChange} />
                    <Label htmlFor="acceptTerms" className="text-sm">
                      Acepto los{" "}
                      <Link href="/terms" className="text-primary underline" target="_blank">
                        términos y condiciones
                      </Link>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Alternar menú">
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
                    href="#legalidad"
                    className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    MARCO LEGAL
                  </Link>
                  <Link
                    href="#patologias"
                    className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PATOLOGÍAS TRATADAS
                  </Link>
                  <Link
                    href="#consideraciones"
                    className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONSIDERACIONES
                  </Link>
                  <Link
                    href="#faq"
                    className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PREGUNTAS FRECUENTES
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="mt-4 bg-white/20 text-white hover:bg-white/30 border-2 border-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        SOLICITAR INFORMACIÓN
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Solicita información sobre Cannabis Medicinal</DialogTitle>
                        <DialogDescription>
                          Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName-mobile">Nombre completo</Label>
                          <Input
                            id="fullName-mobile"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Ingresa tu nombre completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-mobile">Correo electrónico</Label>
                          <Input
                            id="email-mobile"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone-mobile">Teléfono</Label>
                          <Input
                            id="phone-mobile"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Tu número de teléfono"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message-mobile">Mensaje (opcional)</Label>
                          <Textarea
                            id="message-mobile"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="¿En qué podemos ayudarte?"
                            rows={3}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="acceptTerms-mobile"
                            checked={formData.acceptTerms}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="acceptTerms-mobile" className="text-sm">
                            Acepto los{" "}
                            <Link href="/terms" className="text-primary underline" target="_blank">
                              términos y condiciones
                            </Link>
                          </Label>
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-[rgb(0,160,153,0.9)] to-[rgb(140,187,147,0.9)]">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-start space-y-6">
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-white text-sm font-medium">
                  Ley 242 de 2021
                </span>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                  Cannabis Medicinal en <span className="text-emerald-100">Panamá</span>
                </h1>
                <p className="text-lg text-white/90 max-w-[600px]">
                  Información oficial sobre el uso legal del cannabis medicinal en Panamá, patologías tratadas y cómo
                  acceder a tratamientos autorizados.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={scrollToSupportSection}
                  >
                    Apoyar la Iniciativa
                  </Button>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white/10"
                      >
                        Solicitar Información
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Solicita información sobre Cannabis Medicinal</DialogTitle>
                        <DialogDescription>
                          Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                        </DialogDescription>
                      </DialogHeader>
                      {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-6 space-y-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-center">¡Gracias por contactarnos!</h3>
                          <p className="text-center text-muted-foreground">
                            Hemos recibido tu información. Un especialista se pondrá en contacto contigo pronto.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Nombre completo</Label>
                            <Input
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="Ingresa tu nombre completo"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="tu@email.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Tu número de teléfono"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Mensaje (opcional)</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="¿En qué podemos ayudarte?"
                              rows={3}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="acceptTerms"
                              checked={formData.acceptTerms}
                              onCheckedChange={handleCheckboxChange}
                            />
                            <Label htmlFor="acceptTerms" className="text-sm">
                              Acepto los{" "}
                              <Link href="/terms" className="text-primary underline" target="_blank">
                                términos y condiciones
                              </Link>
                            </Label>
                          </div>
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                          </Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/images/pty/panama.avif"
                  alt="Cannabis Medicinal en Panamá"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-gray-900">
                    "El cannabis medicinal ofrece alternativas terapéuticas para pacientes con condiciones específicas"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Ministerio de Salud de Panamá</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección de apoyo ciudadano */}
        <section ref={supportSectionRef} className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
                <Leaf className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-800 mb-4">
                Suma tu apoyo para que el programa de cannabis medicinal en Panamá comience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tu voz es importante para impulsar el acceso a tratamientos que mejoren la calidad de vida de miles de
                panameños.
              </p>

              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 w-full max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Users className="h-8 w-8 text-teal-600" />
                    <h3 className="text-xl font-semibold text-gray-800">Personas que ya apoyaron</h3>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-teal-600 flex justify-center items-center h-24">
                    {supportCount}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="bg-teal-100 rounded-full h-2 w-full max-w-xs">
                      <div
                        className="bg-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(supportCount / 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Ayúdanos a llegar a nuestra meta de 1,000 apoyos
                  </p>
                </div>

                <Dialog open={isSupportDialogOpen} onOpenChange={setIsSupportDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <ThumbsUp className="mr-2 h-5 w-5" />
                      Quiero apoyar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Apoya el programa de cannabis medicinal</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para registrar tu apoyo a esta importante iniciativa.
                      </DialogDescription>
                    </DialogHeader>
                    {isSupportSuccess ? (
                      <div className="flex flex-col items-center justify-center py-6 space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-center">¡Gracias por tu apoyo!</h3>
                        <p className="text-center text-muted-foreground">
                          Tu apoyo ha sido registrado exitosamente y será de gran ayuda para impulsar esta iniciativa.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSupportSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Nombre completo</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={supportFormData.fullName}
                            onChange={handleSupportInputChange}
                            placeholder="Ingresa tu nombre completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={supportFormData.email}
                            onChange={handleSupportInputChange}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pathology">Patología</Label>
                          <Select onValueChange={handlePathologyChange} value={supportFormData.pathology}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una patología" />
                            </SelectTrigger>
                            <SelectContent>
                              {patologias.map((patologia) => (
                                <SelectItem key={patologia} value={patologia}>
                                  {patologia}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="province">Provincia</Label>
                          <Select onValueChange={handleProvinceChange} value={supportFormData.province}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu provincia" />
                            </SelectTrigger>
                            <SelectContent>
                              {provincias.map((provincia) => (
                                <SelectItem key={provincia} value={provincia}>
                                  {provincia}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full" disabled={isSupportSubmitting}>
                          {isSupportSubmitting ? "Enviando..." : "Registrar mi apoyo"}
                        </Button>
                        <p className="text-xs text-center text-gray-500">
                          Tu información será utilizada únicamente para fines de esta iniciativa y no será compartida
                          con terceros.
                        </p>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Mejora la calidad de vida</h3>
                  <p className="text-gray-600">
                    El cannabis medicinal puede aliviar síntomas de múltiples condiciones médicas, mejorando
                    significativamente la calidad de vida de los pacientes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Alternativa natural</h3>
                  <p className="text-gray-600">
                    Ofrece una alternativa terapéutica natural con menos efectos secundarios que muchos medicamentos
                    convencionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Beneficio social</h3>
                  <p className="text-gray-600">
                    La implementación del programa generará empleos, investigación científica y desarrollo económico
                    para Panamá.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Patologías Section */}
        <section id="patologias" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Principales Patologías Tratadas con Cannabis Medicinal en Panamá
              </h2>
              <p className="text-lg text-gray-600">
                El cannabis medicinal está autorizado para el tratamiento de diversas patologías y condiciones médicas,
                con el objetivo de mejorar la calidad de vida de los pacientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Epilepsia Refractaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Pacientes que no responden a los tratamientos anticonvulsivos tradicionales pueden beneficiarse del
                    cannabis medicinal para reducir la frecuencia e intensidad de las convulsiones.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: TVN</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dolor Crónico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Condiciones como artritis, fibromialgia, artrosis y dolor neuropático pueden ser manejadas con
                    cannabis medicinal, proporcionando alivio en casos donde los analgésicos convencionales no son
                    efectivos.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: TVN</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Esclerosis Múltiple</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    El cannabis medicinal puede ayudar a mitigar síntomas como espasticidad muscular y dolor asociado a
                    esta enfermedad neurodegenerativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Náuseas por Quimioterapia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Se utiliza para aliviar náuseas y vómitos en pacientes oncológicos que reciben tratamientos
                    agresivos como la quimioterapia.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: Mayo Clinic</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Glaucoma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Aunque no es una cura, el cannabis medicinal puede ayudar a reducir la presión intraocular en
                    pacientes con glaucoma.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: CNN Español</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enfermedad de Alzheimer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Algunos estudios sugieren que el cannabis medicinal podría ayudar a manejar ciertos síntomas
                    asociados con esta enfermedad, aunque se requiere más investigación.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: Mayo Clinic</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trastorno de Estrés Postraumático</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Se ha observado que el cannabis medicinal puede aliviar algunos síntomas del TEPT, mejorando la
                    calidad de vida de los afectados.
                  </p>
                  <p className="text-sm text-gray-500 mt-4">Fuente: Mayo Clinic</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">¿Necesitas más información sobre cannabis medicinal?</h2>
                <p className="text-xl mb-6">
                  Nuestro equipo de especialistas puede orientarte sobre los tratamientos disponibles en Panamá y el
                  proceso para acceder a ellos legalmente.
                </p>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="bg-white text-teal-700 hover:bg-gray-100">
                      Solicitar Asesoría Personalizada
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Solicita información sobre Cannabis Medicinal</DialogTitle>
                      <DialogDescription>
                        Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                      </DialogDescription>
                    </DialogHeader>
                    {isSuccess ? (
                      <div className="flex flex-col items-center justify-center py-6 space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-center">¡Gracias por contactarnos!</h3>
                        <p className="text-center text-muted-foreground">
                          Hemos recibido tu información. Un especialista se pondrá en contacto contigo pronto.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName-cta">Nombre completo</Label>
                          <Input
                            id="fullName-cta"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Ingresa tu nombre completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-cta">Correo electrónico</Label>
                          <Input
                            id="email-cta"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone-cta">Teléfono</Label>
                          <Input
                            id="phone-cta"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Tu número de teléfono"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message-cta">Mensaje (opcional)</Label>
                          <Textarea
                            id="message-cta"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="¿En qué podemos ayudarte?"
                            rows={3}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="acceptTerms-cta"
                            checked={formData.acceptTerms}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="acceptTerms-cta" className="text-sm">
                            Acepto los{" "}
                            <Link href="/terms" className="text-primary underline" target="_blank">
                              términos y condiciones
                            </Link>
                          </Label>
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                        </Button>
                      </form>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/md/prmdform.webp"
                  alt="Consulta médica sobre cannabis"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Consideraciones Section */}
        <section id="consideraciones" className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                Consideraciones Importantes
              </h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Es fundamental destacar que, aunque el cannabis medicinal puede ofrecer alivio en diversas
                  condiciones, no se considera una cura para estas enfermedades. Su uso debe estar siempre bajo la
                  supervisión de un médico especialista, quien evaluará la pertinencia del tratamiento según las
                  características individuales de cada paciente.
                </p>

                <p>
                  Además, los pacientes deben registrarse en el Ministerio de Salud de Panamá para acceder legalmente a
                  estos tratamientos. La implementación adecuada y responsable del cannabis medicinal en Panamá busca
                  proporcionar opciones terapéuticas adicionales a pacientes que enfrentan enfermedades complejas,
                  garantizando su bienestar y calidad de vida.
                </p>

                <p className="text-sm text-gray-500 mt-4">Fuente: TVN</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "¿Qué condiciones califican para el uso de cannabis medicinal en Panamá?",
                  answer:
                    "Entre las condiciones que pueden calificar se encuentran: dolor crónico, epilepsia, esclerosis múltiple, náuseas por quimioterapia, VIH/SIDA, cáncer, enfermedades en fase terminal, entre otras. Un médico especializado debe evaluar cada caso particular.",
                },
                {
                  question: "¿Cómo puedo obtener una autorización para cannabis medicinal?",
                  answer:
                    "El proceso requiere una evaluación médica por un profesional autorizado, quien determinará si tu condición califica. Luego deberás completar el registro en el programa nacional de cannabis medicinal siguiendo los requisitos establecidos por las autoridades sanitarias.",
                },
                {
                  question: "¿Qué tipos de productos de cannabis medicinal están disponibles en Panamá?",
                  answer:
                    "La ley panameña permite principalmente productos farmacéuticos derivados del cannabis como aceites, tinturas, cápsulas y otros preparados medicinales. No se permite el cannabis en su forma natural para fumar.",
                },
                {
                  question: "¿Cuánto tiempo toma el proceso de aprobación?",
                  answer:
                    "El tiempo puede variar dependiendo de varios factores, incluyendo la completitud de tu documentación médica y la eficiencia del proceso administrativo. Generalmente, puede tomar entre 2 y 4 semanas una vez que toda la documentación ha sido presentada correctamente.",
                },
                {
                  question: "¿El cannabis medicinal es una cura para mi condición?",
                  answer:
                    "No, el cannabis medicinal no es una cura para las enfermedades, sino un tratamiento que puede ayudar a aliviar síntomas y mejorar la calidad de vida. Siempre debe ser parte de un plan de tratamiento integral supervisado por profesionales médicos.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para conocer más sobre el cannabis medicinal en Panamá?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                Solicita información hoy y da el primer paso hacia el alivio natural con cannabis medicinal.
              </p>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary">
                    Solicitar Información Ahora
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Solicita información sobre Cannabis Medicinal</DialogTitle>
                    <DialogDescription>
                      Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                    </DialogDescription>
                  </DialogHeader>
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-6 space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-center">¡Gracias por contactarnos!</h3>
                      <p className="text-center text-muted-foreground">
                        Hemos recibido tu información. Un especialista se pondrá en contacto contigo pronto.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName-final">Nombre completo</Label>
                        <Input
                          id="fullName-final"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Ingresa tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-final">Correo electrónico</Label>
                        <Input
                          id="email-final"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-final">Teléfono</Label>
                        <Input
                          id="phone-final"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Tu número de teléfono"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message-final">Mensaje (opcional)</Label>
                        <Textarea
                          id="message-final"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="¿En qué podemos ayudarte?"
                          rows={3}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acceptTerms-final"
                          checked={formData.acceptTerms}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label htmlFor="acceptTerms-final" className="text-sm">
                          Acepto los{" "}
                          <Link href="/terms" className="text-primary underline" target="_blank">
                            términos y condiciones
                          </Link>
                        </Label>
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                      </Button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl py-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logosCD/logopositivo.svg" alt="Logo de CanaDoctors" width={150} height={60} />
            </Link>
            <p className="text-sm">© {new Date().getFullYear()} CanaDoctors. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

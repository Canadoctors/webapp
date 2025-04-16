"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { Phone, Mail, Video, Star, Heart, Menu, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Medical ID Cannabis in Florida | CanaDoctors",
  description:
    "Get your Medical ID Cannabis in Florida with CanaDoctors. Expert guidance, fast approvals, and compassionate care. Start your journey to wellness today.",
  openGraph: {
    title: "Medical ID Cannabis in Florida | CanaDoctors",
    description:
      "Get your Medical ID Cannabis in Florida with CanaDoctors. Expert guidance, fast approvals, and compassionate care.",
    url: "https://canadoctors.com/florida",
    siteName: "CanaDoctors",
    images: [
      {
        url: "https://canadoctors.com/og-image-florida.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function IllinoisLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-14">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="../images/logosCD/logopositivo.svg" alt="CanaDoctors Logo" width={150} height={60} />
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link href="#benefits" className="text-sm font-medium hover:underline underline-offset-4">
                Benefits
              </Link>
              <Link href="#process" className="text-sm font-medium hover:underline underline-offset-4">
                Process
              </Link>
              <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
                Services
              </Link>
              <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
                FAQ
              </Link>
            </nav>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="#book-consultation">Book Consultation</Link>
            </Button>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu with new design */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-gradient-to-r from-[rgb(0,160,153)] to-[rgb(140,187,147)]">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" aria-hidden="true" />
                <div className="relative h-full flex flex-col">
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-full bg-white/20 p-2"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6 text-white" />
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <Link
                      href="#benefits"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BENEFITS
                    </Link>
                    <Link
                      href="#process"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      PROCESS
                    </Link>
                    <Link
                      href="#services"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SERVICES
                    </Link>
                    <Link
                      href="#faq"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="#contact"
                      className="text-2xl font-bold text-white hover:text-emerald-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="mt-4 bg-white/20 text-white hover:bg-white/30 border-2 border-white"
                      asChild
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link href="#book-consultation">BOOK CONSULTATION</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          <section className="relative py-12 md:py-24 lg:py-32 max-h-[60vh] overflow-hidden bg-gradient-to-r from-[rgb(0,160,153,0.9)] to-[rgb(140,187,147,0.9)]">
            <div className="container relative z-10 mx-auto px-4 lg:px-8 xl:px-12 h-full max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                <Parallax translateY={[-20, 20]}>
                  <div className="flex flex-col items-start space-y-4 pb-32">
                    <span className="text-emerald-800 font-semibold">Certified Medical Cannabis Doctors</span>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
                      This Is Your Year To <span className="text-emerald-800">Heal</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-[600px]">
                      Get your Florida Medical Cannabis Card with expert guidance. Professional care, fast approvals,
                      and compassionate support throughout your journey.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                        <Link href="#book-consultation">Start Application</Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-white border-white bg-gray-800 hover:bg-gray-700"
                        asChild
                      >
                        <Link href="#more-info">More Information</Link>
                      </Button>
                    </div>
                  </div>
                </Parallax>
                <div className="relative h-full flex items-center justify-center lg:justify-end hidden md:flex">
                  <Parallax translateY={[20, -20]} className="h-full">
                    <div className="relative h-full">
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Video className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-4 right-8 z-10">
                        <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">Dr. Marco Suarez</span>
                            <div className="flex text-emerald-800">
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                              <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 right-12 z-10 -translate-y-20">
                        <div className="bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-500 fill-current" />
                          <span className="text-sm font-medium">Health Reviews</span>
                        </div>
                      </div>
                      <Image
                        src="/images/md/fldoctor.png"
                        alt="Medical Cannabis Doctor"
                        width={800}
                        height={1200}
                        className="rounded-2xl object-cover object-center h-[65vh] w-auto -mt-16"
                      />
                    </div>
                  </Parallax>
                </div>
              </div>
            </div>
          </section>

          <section id="benefits" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Benefits of Medical Cannabis in Florida
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Chronic Pain Relief",
                    description: "Effective management for various chronic pain conditions.",
                  },
                  { title: "PTSD Treatment", description: "Helps manage symptoms of post-traumatic stress disorder." },
                  {
                    title: "Cancer Symptom Management",
                    description: "Aids in managing symptoms and side effects of cancer treatments.",
                  },
                  {
                    title: "Epilepsy Control",
                    description: "Assists in reducing seizures for some forms of epilepsy.",
                  },
                  {
                    title: "Glaucoma Treatment",
                    description: "May help in reducing intraocular pressure in glaucoma patients.",
                  },
                  {
                    title: "Multiple Sclerosis Support",
                    description: "Helps manage symptoms like muscle spasms in MS patients.",
                  },
                ].map((benefit, index) => (
                  <Parallax key={index} translateY={[20, -20]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                How to Get Your Medical Cannabis ID in Florida
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: 1,
                    title: "Qualify",
                    description: "Ensure you have a qualifying condition as per Florida law.",
                  },
                  {
                    step: 2,
                    title: "Doctor Consultation",
                    description: "Schedule an appointment with a certified Florida marijuana doctor.",
                  },
                  {
                    step: 3,
                    title: "Register with the State",
                    description: "Complete your registration with the Florida Medical Marijuana Use Registry.",
                  },
                  {
                    step: 4,
                    title: "Receive Card",
                    description: "Wait for your medical marijuana card to arrive and visit a dispensary.",
                  },
                ].map((step, index) => (
                  <Parallax key={index} translateY={[10, -10]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>
                          Step {step.step}: {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{step.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Our Services in Florida
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "In-Person Consultations",
                    description:
                      "Comprehensive in-person appointments with licensed Florida physicians specializing in medical cannabis.",
                  },
                  {
                    title: "Application Assistance",
                    description: "Expert guidance through the Florida Medical Cannabis Registry application process.",
                  },
                  {
                    title: "Follow-up Care",
                    description: "Ongoing support and follow-up consultations to ensure optimal treatment outcomes.",
                  },
                  {
                    title: "Educational Resources",
                    description:
                      "Access to comprehensive educational materials about medical cannabis use and Florida regulations.",
                  },
                ].map((service, index) => (
                  <Parallax key={index} translateY={[15, -15]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{service.description}</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Patient Success Stories
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Sarah L.",
                    quote:
                      "CanaDoctors made getting my medical cannabis card so easy. Their doctors are knowledgeable and compassionate.",
                    image: "/images/reviews/sarha.png",
                  },
                  {
                    name: "Michael R.",
                    quote:
                      "I was hesitant at first, but the team at CanaDoctors guided me through every step. Now I have the relief I needed.",
                    image: "/images/reviews/michael.png",
                  },
                  {
                    name: "Emily T.",
                    quote: "The in-person consultation was thorough and professional. Highly recommend!",
                    image: "/images/reviews/emily.png",
                  },
                ].map((testimonial, index) => (
                  <Parallax key={index} translateY={[10, -10]}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <CardTitle>{testimonial.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>&quot;{testimonial.quote}&quot;</p>
                      </CardContent>
                    </Card>
                  </Parallax>
                ))}
              </div>
            </div>
          </section>

          <section id="faq" className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {[
                  {
                    question: "Who qualifies for medical cannabis in Florida?",
                    answer:
                      "Patients with qualifying conditions such as: Cancer, Epilepsy, Glaucoma, HIV/AIDS, PTSD, ALS, Crohn's disease, Parkinson's disease, Multiple sclerosis, Medical conditions of the same kind or class as or comparable to those above, Terminal conditions, Chronic nonmalignant pain caused by a qualifying medical condition.",
                  },
                  {
                    question: "How long does the application process take?",
                    answer:
                      "The process typically takes 2-3 weeks from consultation to receiving your medical cannabis card.",
                  },
                  {
                    question: "Are in-person consultations required?",
                    answer: "Yes, Florida requires in-person consultations for medical cannabis certifications.",
                  },
                  {
                    question: "How much does it cost to get a medical cannabis card in Florida?",
                    answer:
                      "The cost includes the state application fee and the physician consultation fee. Contact us for current pricing information.",
                  },
                  {
                    question: "How long is the medical cannabis card valid in Florida?",
                    answer: "Medical cannabis cards in Florida are typically valid for one year in Florida.",
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

          <section id="book-consultation" className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                  Book your consultation today and take the first step towards natural relief with medical cannabis.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/book">Book Your Consultation Now</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl py-8">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="../images/logosCD/logopositivo.svg" alt="CanaDoctors Logo" width={150} height={60} />
              </Link>
              <p className="text-sm">© 2024 CanaDoctors. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

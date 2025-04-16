"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

// Import speaker images
import SpeakerOne from "../../assets/images/cannmed/CanMed-Speakers-Bonnie.png"
import SpeakerTwo from "../../assets/images/cannmed/CanMed-Speakers-Sulak.png"
import SpeakerThree from "../../assets/images/cannmed/LM-headshot-2023.png"
import SpeakerFour from "../../assets/images/cannmed/Headshot-2.png"

export default function WorkshopPage() {
  const speakers = [
    {
      name: "Bonni Goldstein, MD",
      specialty: "Medical Director / Owner",
      bio: "Canna-Centers Wellness",
      image: SpeakerOne,
    },
    {
      name: "Dustin Sulak, DO",
      specialty: "Co-Founder & Medical Director",
      bio: "Healer.com",
      image: SpeakerTwo,
    },
    {
      name: "Laszlo Mechtler, MD",
      specialty: "Chief Medical Officer",
      bio: "DENT Neurologic Institute",
      image: SpeakerThree,
    },
    {
      name: "Laura Barrett, MBA, BSN, RN",
      specialty: "Founder",
      bio: "Ask Nurse Laura",
      image: SpeakerFour,
    },
  ]

  return (
    <>
      <Head>
        <title>Workshop de Cannabis Medicinal | CanaDoctors</title>
        <meta
          name="description"
          content="Workshop gratuito de capacitación en cannabis medicinal para 22 médicos seleccionados. Aprende de expertos y obtén tu certificación."
        />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Workshop de Capacitación en Cannabis Medicinal</h1>
              <p className="text-xl opacity-90 mb-8">Una oportunidad única para 22 médicos seleccionados</p>
              <Link href="/cannmed#registro">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
                  Aplicar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Workshop Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Detalles del Workshop</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">¿Qué Aprenderás?</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Fundamentos del sistema endocannabinoide</li>
                      <li>• Aplicaciones clínicas del cannabis medicinal</li>
                      <li>• Dosificación y vías de administración</li>
                      <li>• Marco legal y regulatorio</li>
                      <li>• Casos clínicos prácticos</li>
                      <li>• Interacciones medicamentosas</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Certificación oficial</li>
                      <li>• Material educativo exclusivo</li>
                      <li>• Acceso a red de profesionales</li>
                      <li>• Mentoría personalizada</li>
                      <li>• Descuentos especiales para eventos futuros</li>
                      <li>• Soporte continuo post-workshop</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Agenda del Workshop</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Módulo 1: Fundamentos</h3>
                    <p className="text-gray-600">
                      Introducción al sistema endocannabinoide y bases científicas del cannabis medicinal
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Módulo 2: Aplicaciones Clínicas</h3>
                    <p className="text-gray-600">
                      Uso terapéutico en diferentes condiciones médicas y evidencia científica actual
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Módulo 3: Práctica Clínica</h3>
                    <p className="text-gray-600">Dosificación, seguimiento de pacientes y casos clínicos prácticos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Módulo 4: Aspectos Legales</h3>
                    <p className="text-gray-600">Marco regulatorio y mejores prácticas en la prescripción</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Ponentes Expertos</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {speakers.map((speaker, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="aspect-square relative mb-4 overflow-hidden rounded-full border-4 border-teal-500">
                        <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                      </div>
                      <h3 className="text-xl font-semibold">{speaker.name}</h3>
                      <p className="text-gray-600">{speaker.specialty}</p>
                      <p className="text-gray-500 text-sm mt-2">{speaker.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">¿Listo para participar?</h2>
              <p className="text-xl text-gray-600">
                No pierdas la oportunidad de ser uno de los 22 médicos seleccionados para este workshop gratuito.
              </p>
              <Link href="/cannmed#registro">
                <Button size="lg">Aplicar al Workshop</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

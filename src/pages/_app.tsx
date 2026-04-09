"use client"

import "../styles/globals.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter, Router } from "next/router"

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  function pageView(url: string, title: string) {
    if (window && window.dataLayer) {
      window.dataLayer.push({
        event: "VirtualPageview",
        virtualPageURL: url,
        virtualPageTitle: title,
      })
    }
  }

  useEffect(() => {
    pageView(router.pathname, document.title)

    const handleRouteChange = (url: string) => {
      pageView(url, document.title)
    }

    Router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.pathname])

  const canonicalUrl = `https://canadoctors.com${router.asPath === "/" ? "" : router.asPath}`

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CanaDoctors | Plataforma Líder en Cannabis Medicinal</title>
        <meta
          name="description"
          content="Plataforma líder en cannabis medicinal en Puerto Rico. Conectamos pacientes con médicos certificados para obtener tu tarjeta de cannabis medicinal de forma rápida y segura."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:site_name" content="CanaDoctors" />
        <meta property="og:title" content="CanaDoctors | Plataforma Líder en Cannabis Medicinal" />
        <meta
          property="og:description"
          content="Conecta con médicos certificados en cannabis medicinal para obtener tu licencia y tratamientos en Puerto Rico."
        />
        <meta property="og:image" content="https://canadoctors.com/thumb.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="es_PR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CanaDoctors | Cannabis Medicinal en Puerto Rico" />
        <meta
          name="twitter:description"
          content="Obtén tu tarjeta de cannabis medicinal con médicos certificados. Aprobaciones rápidas y atención profesional."
        />
        <meta name="twitter:image" content="https://canadoctors.com/thumb.jpg" />

        {/* Additional SEO */}
        <meta name="author" content="CanaDoctors" />
        <meta name="theme-color" content="#1A645F" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

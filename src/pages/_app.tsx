"use client"

import "../styles/globals.css"
import { useEffect } from "react" // <--- import the hook
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
  }, [router.pathname]) // Agregamos router.pathname al arreglo de dependencias

  return (
    <>
      <Head>
        <title>Canadoctors</title>
        <meta name="description" content="Plataforma Líder en Cannabis Medicinal | Conectando Médicos y Pacientes" />
        <meta property="og:title" content="Canadoctors" />
        <meta
          property="og:description"
          content="Conecta con médicos expertos en cannabis medicinal para obtener tu licencia y tratamientos en Puerto Rico."
        />
        <meta property="og:image" content="https://canadoctors.com/thumb.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.canadoctors.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://canadoctors.com/thumb.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

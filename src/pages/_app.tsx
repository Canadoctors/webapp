import "../styles/globals.css";
import React, { useEffect } from "react"; // <--- import the hook
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter, Router } from "next/router";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function pageView(url: string, title: string) {
    if (window && window.dataLayer) {
      window.dataLayer.push({
        event: "VirtualPageview",
        virtualPageURL: url,
        virtualPageTitle: title,
      });
    }
  }

  useEffect(() => {
    pageView(router.pathname, document.title);

    const handleRouteChange = (url: string) => {
      pageView(url, document.title);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname]); // Agregamos router.pathname al arreglo de dependencias

  return (
    <>
      <Head>
        <title>Canadoctors</title>
        <meta name="description" content="Plataforma líder en cannabis medicinal." />
        <meta property="og:title" content="Canadoctors" />
        <meta property="og:description" content="Plataforma líder en cannabis medicinal." />
        <meta property="og:image" content="/images/logosCD/logopositivo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.canadoctors.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/logosCD/logopositivo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

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
    window &&
      window.dataLayer &&
      window.dataLayer.push({
        event: "VirtualPageview",
        virtualPageURL: url,
        virtualPageTitle: title,
      });

    return console.log(title), console.log(url);
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
  }, []);

  return (
    <>
      <Head>
        <title>Canadoctor</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

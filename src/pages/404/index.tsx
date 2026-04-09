import Head from "next/head"
import Link from "next/link"

function NotFound() {
  return (
    <>
      <Head>
        <title>Página no encontrada | CanaDoctors</title>
        <meta name="description" content="La página que buscas no existe. Vuelve al inicio de CanaDoctors." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-brand-primary">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-brand-secondary px-4 py-1 text-sm text-white rounded rotate-12 absolute">
          Página no encontrada
        </div>
        <Link href="/" className="mt-10 text-white/70 hover:text-white underline text-lg">
          Volver al inicio
        </Link>
      </div>
    </>
  )
}

export default NotFound

import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Header } from "../components/Header";
import { NewPatient } from "../components/patients/NewPatient";

const Home: NextPage = () => {

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  const onClickClose = () => setShowResults(false)


  const Modal = ()=>{

    return(
   
<div id="popup-modal"  className=" bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
    <div className="relative m-auto p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={onClickClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div className="p-6 flex flex-col text-center">
                <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Seleccione tipo de paciente</h3>
                

                <button
              type="button"
             
              className="text-white bg-[#00A099] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
             Iniciar Sesion
            </button>
<Link href="/patients" >
                <button
              type="button"
             
              className="text-white bg-[#00A099] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Paciente Nuevo
            </button>

            </Link> 

     

            <button
              type="button"
             
              className="text-white bg-[#00A099] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Renovacion
            </button>
                <button data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Volver</button>
            </div>
        </div>
    </div>
</div>
    )
  }


  return (
    <div className="">
      <Head>
        <title>Cannadoctors</title>
        <meta name="description" content="Cannadoctors conectando medicos con pacientes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      { showResults ? <Modal /> : null }

      <main className='min-h-screen flex flex-row bg-cover bg-[url("/images/back-home.png")]'>
        <Header />
      

        <div className=" sm:basis-1  lg:basis-1/2 m-auto text-center ">
          <div className="">
            <p className="m-5 text-2xl">
           
              Bienvenidos a la plataforma online que conecta los mejores medicos
              de cannabis medicinal con sus pacientes
            </p>

            <button
              type="button"
              onClick={onClick}
              className="text-white bg-[#00A099] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Registrarme
            </button>

            <Link href="/signin" >
            <button
              type="button"
              className="text-white bg-[#00A099] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Iniciar Sesion
            </button>
            </Link>
          </div>
        </div>
        <div className="sm:basis-1  lg:basis-1/2  ">


          <div className="absolute bottom-0 right-0 sm:w-full md:w-full w-full lg:w-1/3 h-screen sm:">
            <img
              src="http://localhost:3000/_next/image?url=%2Fimages%2Fdoctors.png&w=3840&q=75"
              className="object-cover absolute bottom-0" // just an example
            />
          </div>
        </div>
      </main>

      <footer className="m-auto text-center h-24 pt-10">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" Full Cannabis "}
        </a>
      </footer>
    </div>
  );
};

export default Home;

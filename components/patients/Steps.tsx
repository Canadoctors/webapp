import type { NextPage } from "next";
import Link from 'next/link'
import Head from "next/head";
import React from "react";
import Image from "next/image";



const Steps: NextPage = () => {

  
  return (
<>
 
   
<div className="max-w-xl mx-auto my-4 border-b-2 pb-4 mt-10">	
	<div className="flex pb-3">
		<div className="flex-1">
		</div>

		<div className="flex-1">
			<div className="w-10 h-10 bg-[#00A099] mx-auto rounded-full text-lg text-white flex items-center">
				<span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
			</div>
		</div>


		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className="bg-[#00A099] text-xs leading-none py-1 text-center text-grey-darkest rounded w-24 " ></div>
			</div>
		</div>
	
		
		<div className="flex-1">
			<div className="w-10 h-10 bg-[#00A099] mx-auto rounded-full text-lg text-white flex items-center">
				<span className="text-white text-center w-full"><i className="fa fa-check w-full fill-current white"></i></span>
			</div>
		</div>
	
		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
			 	<div className="bg-[#00A099] text-xs leading-none py-1 text-center text-grey-darkest rounded  w-24" ></div>
			</div>
		</div>
	
		<div className="flex-1">
			<div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span className="text-grey-darker text-center w-full">3</span>
			</div>
		</div>
	
	
		<div className="w-1/6 align-center items-center align-middle content-center flex">
			<div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
			 	<div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-24" ></div>
			</div>
		</div>


		<div className="flex-1">
			<div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
				<span className="text-grey-darker text-center w-full">4</span>
			</div>
		</div>
	
	
		<div className="flex-1">
		</div>		
	</div>
	
	<div className="flex text-xs content-center text-center">
		<div className="w-1/4">
		Informacion Personal
		</div>
		
		<div className="w-1/4">
		Perfil Medico
		</div>
		
		<div className="w-1/4">
		Condicion 
		</div>
		
		<div className="w-1/4">
		Finalizar solicitud
		</div>			
	</div>
</div>
    </>

  )
}


export default Steps
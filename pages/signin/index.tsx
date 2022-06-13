import type { NextPage } from "next";
import Image from "next/image";
import canadoctorsLogo from '../../assets/images/logo.png'

const Signin: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <div className=" w-1/2 text-center pt-10">
      <Image src={canadoctorsLogo} height={60} width={280} />


      <div className="text-center px-24 pt-24">



<form action="/send-data-here" method="post" className="flex flex-col">
 




<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Usuario</label>
<input type="text" className="form-input rounded-full" />

</div>


<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Password</label>
<input type="text" className="form-input rounded-full" />

</div>





  <button className="bg-[#00A099] hover:bg-[#00A099] text-white font-bold py-2 px-4 rounded-full mt-10">
  Iniciar Sesion
</button>
</form>


      </div>
      </div>


      <div className="bg-gradient-to-b from-[#00A099] w-1/2 flex flex-col ">
        <div className="basis-1/2 flex">

            <div className="m-auto text-center">
                 <h1 className="text-2xl text-white"> Ingresa tus datos y un medico de canadoctors se pondra en contacto </h1>
            </div>
         
         
        </div>
        <div className="basis-1/2 relative">
         
          <Image
            src="/images/patientsregister.png"
            
            layout="fill" // required
            objectFit="cover" // change to suit your needs
       
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;

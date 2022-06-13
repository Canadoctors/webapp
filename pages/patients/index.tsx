import type { NextPage } from "next";
import Image from "next/image";
import canadoctorsLogo from '../../assets/images/logo.png'
import Steps from '../../components/patients/Steps'

const Patient: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-row">
      <div className=" w-1/2 text-center pt-10">
      <Image src={canadoctorsLogo} height={60} width={280} />
      <Steps />


      <div className="text-center px-24 pt-10">





<form action="/send-data-here" method="post" className="flex flex-col">
  
  <select  id="first" name="first" placeholder="Ingre su Nombre" className="form-select rounded-full" > 
  <option value="value1">Renovacion </option>
  <option value="value2" selected>Nuevo</option>
  <option value="value3">Duplicado</option>
 </select>

<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" > Mayor de edad</label>
 <select  id="first" name="first"  className="form-select rounded-full" > 
  
  <option value="value2" selected>Si</option>
  <option value="value3">No</option>
 </select>
</div>





<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Nombre completo</label>
<input type="text" className="form-input rounded-full" />

</div>


<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3">Genero</label>
 <select  id="first" name="first"  className="form-select rounded-full" > 

  <option value="value2" selected>Masculino</option>
  <option value="value3">Femenino</option>
 </select>
</div>


<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Fecha de Nacimiento</label>
<input type="date" id="start" className="form-date " name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31" />

</div>



<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Peso</label>
<input type="text" className="form-input rounded-full" />

</div>



<div className="mt-3 flex flex-col text-left">
<label className="py-3 ml-3" >Altura</label>
<input type="text" className="form-input rounded-full" />

</div>


  <input type="text" id="last" name="last" placeholder="Correo electronico" className="mt-10 form-input rounded-full" />

  <input type="text" id="last" name="last" placeholder="Ciudad" className="mt-10 form-input rounded-full" />

  <input type="text" id="last" name="last" placeholder="Paciente de Cannabis" className="mt-10 form-input rounded-full" />
  <button className="bg-[#00A099] hover:bg-[#00A099] text-white font-bold py-2 px-4 rounded-full mt-10">
  Enviar solicitud
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

export default Patient;

import Image from "next/image";
import icon from "../assets/images/icon.png";
import iconLaw from "../assets/images/iconlaw.png";
import iconBlocks from "../assets/images/iconblockchain.png";

export const Icons = () => {
  return (
    <div className="sm:flex flex-wrap justify-evenly items-center text-center gap-8 h-[30vh] ">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
        <div className="text-black  ">
          <Image src={icon} width={150} height={150} />
          <div className="font-bold text-xl ml-6">
            {" "}
            <h1> Profesinales</h1>
          </div>
          <div className="ml-6">
            <p>
              Conecte con medicos especialistas en tratamientos de diversas
              patologías mediante cannabis medicinal
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
        <div className=" text-black  ">
          <Image src={iconBlocks} width={150} height={150} />
          <div className="font-bold text-xl ml-6">
            {" "}
            <h1>Blockchain</h1>
          </div>
          <div className="ml-6">
            <p>
              Cannadoctors genera un huella digital en la red de bloques
              permitiendo validar la trazabilidad de los pacientes
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4">
        <div className=" text-black  ">
          <Image src={iconLaw} width={150} height={150} />
          <div className="font-bold text-xl ml-6">
            {" "}
            <h1> Cumplimiento</h1>
          </div>
          <div className="ml-6">
            <p>
              Nuestra plataforma cuenta con un proceso en cumplimiento con los
              estandares de seguridad internaccional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

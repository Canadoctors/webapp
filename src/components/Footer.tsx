import Image from "next/image";
import footerLogo from "../assets/images/logocanadoctorwhite.svg";
import ig from "../assets/images/ig.png"
import twt from "../assets/images/twt.png"

export const Footer = () => {
  return (
    <div className="w-full h-[35vh] overflow-hidden relative flex bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
      <div className="container mx-auto ">
        <div className="flex flex-col  ">
          <div>
            <Image src={footerLogo} width="200rem" />{" "}
          </div>

          <div className="text-white flex flex-row">
            <div className="flex pr-5">
              <ul>
                <li> Home </li>
                <li> Contacto </li>
                <li> Registrate </li>
              </ul>
            </div>

            <div className="flex px-5">
              <ul>
                <li> Ingresar</li>
                <li> Terminos y condiciones </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex"> 

          <div className="px-3"> <Image src={ig} />  </div>

          <div className="px-3"> <Image src={twt} /> </div>
                  
          </div>
        </div>
      </div>
    </div>
  );
};

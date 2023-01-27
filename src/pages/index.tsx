import { Home } from "../components/Home";
import { Icons } from "../components/Icons";
import { Tech } from "../components/Tech";
import { Movie } from "../components/Movie";
import { Iphone } from "../components/Iphone";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { ContactUs } from "../components/ContactUs";

import background from "../assets/images/backgroundDoctors.jpg";
import icon1 from "../assets/images/icon.png";
import iconLaw from "../assets/images/iconlaw.png";
import iconBlocks from "../assets/images/iconblockchain.png";

interface IconsContent {
  icon: any;
  title1: string;
  shortDesc: string;
}

const IconsContent = [
  {
    icon:{icon1},
    title1:"Profesionales",
    shortDesc:"Conecte con medicos especialistas en tratamientos de diversas patologías mediante cannabis medicinal"
  },{
    icon:{iconLaw},
    title1:"Blockchain",
    shortDesc:"Cannadoctors genera una huella digital en la red de bloques permitiendo validar la trazabilidad de los pacientes"
  },{
    icon:{iconBlocks},
    title1:"Cumplimiento",
    shortDesc:"Nuestra plataforma cuenta con un proceso en cumplimiento con los estandares de seguridad internacional"
  }
]

function LandingPage() {
  return (
    <>
      <Home
        imgSrc={background}
        textIntro={
          "Canadoctors es la primer plataforma que conecta médicos y pacientes de cannabis medicinal."
        }
        button1Url={"https://app.canadoctors.com/signup"}
        button2Url={"https://app.canadoctors.com/"}
        button1Title={"Registrate"}
        button2Title={"Inicial Sesión"}
      />
      {IconsContent.map( icon => (
          <Icons
            icon={icon.icon}
            title1={icon.title1}
            shortDesc={icon.shortDesc} 
          />
        )
      )}
      <Tech />
      <Movie />
      <Iphone />
      <Footer />
    </>
  );
}
export default LandingPage;

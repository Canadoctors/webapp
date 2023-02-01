import { Home } from "../components/Home";
import { Icons } from "../components/Icons";
import { Tech } from "../components/Tech";
import { Movie } from "../components/Movie";
import { Iphone } from "../components/Iphone";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import icon1 from "../../public/images/iconCards/icon.png";
import iconLaw from "../../public/images/iconCards/iconlaw.png";
import iconBlocks from "../../public/images/iconCards/iconblockchain.png";

const IconsContent = [
  {
    id: 1,
    iconUrl: icon1,
    w: 150,
    h: 150,
    title1: "Profesionales",
    shortDesc:
      "Conecte con medicos especialistas en tratamientos de diversas patologías mediante cannabis medicinal",
  },
  {
    id: 2,
    iconUrl: iconBlocks,
    w: 150,
    h: 150,
    title1: "Blockchain",
    shortDesc:
      "Cannadoctors genera una huella digital en la red de bloques permitiendo validar la trazabilidad de los pacientes",
  },
  {
    id: 3,
    iconUrl: iconLaw,
    w: 150,
    h: 150,
    title1: "Cumplimiento",
    shortDesc:
      "Nuestra plataforma cuenta con un proceso en cumplimiento con los estandares de seguridad internacional",
  },
];

function LandingPage() {
  return (
    <>
      <Home
        imgSrc="bg/backgroundDoctors.jpg"
        textIntro={
          "Canadoctors es la primer plataforma que conecta médicos y pacientes de cannabis medicinal."
        }
        button1Url={"https://app.canadoctors.com/signup"}
        button2Url={"https://app.canadoctors.com/"}
        button1Title={"Registrate"}
        button2Title={"Inicial Sesión"}
      />

      <div className="flex flex-col md:flex-row text-center text-cdgrey">
        {IconsContent.map((icon) => (
          <Icons
            key={icon.id}
            iconUrl={icon.iconUrl}
            title1={icon.title1}
            shortDesc={icon.shortDesc}
            wImg={icon.w}
            hImg={icon.w}
          />
        ))}
      </div>

      <Tech />
      <Movie />
      <Iphone />
      <Contact />
      <Footer />
    </>
  );
}
export default LandingPage;

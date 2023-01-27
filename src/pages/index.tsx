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

const IconsContent = [
  {
    id: 1,
    iconUrl: icon1,
    title1: "Profesionales",
    shortDesc:
      "Conecte con medicos especialistas en tratamientos de diversas patologías mediante cannabis medicinal",
  },
  {
    id: 2,
    iconUrl: iconLaw,
    title1: "Blockchain",
    shortDesc:
      "Cannadoctors genera una huella digital en la red de bloques permitiendo validar la trazabilidad de los pacientes",
  },
  {
    id: 3,
    iconUrl: iconBlocks,
    title1: "Cumplimiento",
    shortDesc:
      "Nuestra plataforma cuenta con un proceso en cumplimiento con los estandares de seguridad internacional",
  },
];

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

      <div className="flex flex-col md:flex-row">
        {IconsContent.map((icon) => (
          <Icons
            key={icon.id}
            iconUrl={icon.iconUrl}
            title1={icon.title1}
            shortDesc={icon.shortDesc}
          />
        ))}
      </div>

      <Tech />
      <Movie />
      <Iphone />
      <Footer />
    </>
  );
}
export default LandingPage;

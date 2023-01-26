import { Home } from "../components/Home";
import { Icons } from "../components/Icons";
import { Tech } from "../components/Tech";
import { Movie } from "../components/Movie";
import { Iphone } from "../components/Iphone";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { ContactUs } from "../components/ContactUs";

import background from "../assets/images/backgroundDoctors.jpg";
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
      <Icons />
      <Tech />
      <Movie />
      <Iphone />
      <Footer />
    </>
  );
}
export default LandingPage;

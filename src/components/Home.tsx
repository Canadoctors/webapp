import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logosCD/logocanadoctorwhite.svg";

type HomeProps = {
  imgSrc: any;
  button1Title: string;
  textIntro: string;
  button2Title: string;
  button1Url: string;
  button2Url: string;
};

export const Home = ({
  imgSrc,
  textIntro,
  button1Title,
  button1Url,
  button2Title,
  button2Url,
}: HomeProps) => {
  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden relative flex">
        <section
          className={`flex flex-col w-full bg-cover md:bg-fixed bg-center justify-center items-center`}
          style={{ backgroundImage: `url(/images/${imgSrc})` }}
        ></section>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-4xl text-center">
              <Image width={"400px"} src={Logo} alt="" />
              <h2 className="text-lg font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl pt-2 pb-2">
                <span className="block">{textIntro}</span>
              </h2>

              <div className="mt-10 flex flex-col sm:-mx-2 sm:flex-row sm:justify-center sm:space-x-4">
                {button1Url !== "" && button2Url !== "" ? (
                  <>
                    <Link href={button1Url}>
                      <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                        {button1Title}
                      </button>
                    </Link>

                    <Link href={button2Url}>
                      <button className="bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                        {button2Title}
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link href={button1Url}>
                    <button className="animate-bounce bg-white text-[#00A099] focus:outline-none font-medium rounded-full text-lg px-20 py-2.5 text-center mb-4 hover:opacity-90">
                      {button1Title}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

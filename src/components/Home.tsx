import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logosCD/logocanadoctorwhite.svg"
import { ArrowRight } from "lucide-react"

type HomeProps = {
  imgSrc: string
  button1Title: string
  textIntro: string
  button2Title: string
  button1Url: string
  button2Url: string
}

export const Home = ({ imgSrc, textIntro, button1Title, button1Url, button2Title, button2Url }: HomeProps) => {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative flex">
      <section
        className="flex flex-col w-full bg-cover md:bg-fixed bg-center justify-center items-center"
        style={{ backgroundImage: `url(/images/${imgSrc})` }}
      ></section>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 to-brand-tertiary/80">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-4xl text-center">
            <Image width={400} height={100} src={Logo} alt="CanaDoctor Logo" />
            <h2 className="text-lg font-light text-white/80 sm:text-2xl md:text-3xl lg:text-4xl pt-4 pb-4 leading-relaxed">
              <span className="block">{textIntro}</span>
            </h2>
            <div className="mt-10 flex flex-col sm:-mx-2 sm:flex-row sm:justify-center sm:space-x-4">
              {button1Url && (
                <Link
                  href={button1Url}
                  className="bg-white text-brand-primary focus:outline-none font-medium rounded-full text-lg px-12 py-3 text-center mb-4 hover:bg-white/90 transition-all duration-300 btn-magnetic inline-flex items-center justify-center gap-2"
                >
                  {button1Title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {button2Url && (
                <Link
                  href={button2Url}
                  className="bg-white/10 text-white border border-white/20 focus:outline-none font-medium rounded-full text-lg px-12 py-3 text-center mb-4 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  id="btn-login"
                >
                  {button2Title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

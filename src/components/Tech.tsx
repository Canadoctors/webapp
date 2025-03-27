import Image from "next/image"
import ImageOne from "../../public/images/tech/tech1.png"
import ImageTwo from "../../public/images/tech/tech2.png"
import ImageThree from "../../public/images/tech/tech3.png"

export const Tech = () => {
  return (
    <div className="bg-[#f3f4f6] md:h-[70vh] flex">
      <div className="container pt-4 m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-cdgrey font-bold">
              Tecnología aplicada a la industria del cannabis medicinal
            </h1>
            <p className="text-lg text-cdgrey">
              Canadoctors te conecta con médicos especialistas en endocannabinología licenciados y matriculados.
            </p>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 row-span-4">
              <Image
                src={ImageOne}
                className="rounded-xl object-cover object-top"
                width="640"
                height="1334"
                alt="shoes"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <Image
                src={ImageTwo}
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="640"
                alt="shoe"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-3">
              <Image
                src={ImageThree}
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="427"
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


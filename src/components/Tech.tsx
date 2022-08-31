import Image from "next/image";
import imgOne from "../assets/images/tech1.png";
import imgTwo from "../assets/images/tech2.png";
import imgThree from "../assets/images/tech3.png";

export const Tech = () => {
  return (
    <div className="w-full  h-[100vh] bg-gray-100 flex pt-5 items-center justify-center ">
      <div className="items-center text-center flex">
        <div className="flex w-2/4">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white row-span-2 p-10 rounded relative h-[60vh] w-[35vh] m-5 mt-28">
              <Image
                src={imgOne}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>

            <div className=" bg-white p-10 relative w-[35vh] h-[40vh] m-5">
              {" "}
              <Image
                src={imgTwo}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />{" "}
            </div>

            <div className="row-span-3 bg-white p-10 rounded relative h-[20vh] m-5 w-[35vh]">
              <Image
                src={imgThree}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex-col w-2/4 tx-5 px-10">

            <div className="container">
            <div className="flex text-2xl text-green-800 text-left">
            {" "}
            Tecnologia apllicada a la industria<br></br> del cannabis medicinal
          </div>
          <div className="flex text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              illo expedita veniam minima sed minus pariatur molestias
              temporibus, dolorem praesentium optio ipsa. Id laboriosam
              praesentium itaque odio officia quaerat corrupti!
            </p>
          </div>

            </div>
         

         
        </div>
      </div>
    </div>
  );
};

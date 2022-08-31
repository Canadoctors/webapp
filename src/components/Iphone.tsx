import Image from "next/image";
import iphonePic from "../assets/images/iphone.png";
import pr from "../assets/images/pr.png";
import eeuu from "../assets/images/col.png";
import arg from "../assets/images/arg.png";
import mex from "../assets/images/mex.png";
import uy from "../assets/images/uy.png";
import pan from "../assets/images/pan.png";
import col from "../assets/images/col.png"

export const Iphone = () => {
  return (
    <>
      <div className="w-full h-[100vh] overflow-hidden relative flex">
        <div className="flex flex-col h-full w-2/4 text-2xl justify-center">

            <div >

            <div className="flex-col  px-10 ">
                <div className="font-bold font-2xl"> <h1>Paises Disponibles</h1> </div>
            
            <p>Lorem ipsum dolor sit emque laboriosam fugit incidunt neque vitae voluptas quam ut consequatur a eaque pariatur?</p>

            </div>

            <div className=" flex py-3 px-8 justify-start">


                <div className=" flex mx-3"><Image src={pr}  width={40} height={40}  /></div>
                <div className=" flex mx-3"><Image src={arg}  width={40} height={40}  /></div>
                <div className=" flex mx-3"><Image src={eeuu}  width={40} height={40}  /></div>

            </div>

            </div>


            <div className="mt-10">

            <div className="flex-col  px-10 ">
                <div className="font-bold font-2xl"> <h1>Proximamente</h1> </div>
            <div className="font-md"> <p>Lore</p></div>
            

            </div>

            <div className=" flex py-3 px-8 justify-start">


                <div className=" flex mx-3"><Image src={uy}  width={40} height={40}  /></div>
                <div className=" flex mx-3"><Image src={pan}  width={40} height={40}  /></div>
                <div className=" flex mx-3"><Image src={mex}  width={40} height={40}  /></div>
                <div className=" flex mx-3"><Image src={col}  width={40} height={40}  /></div>

            </div>

            </div>

            
     
       
        </div>

        <div className="flex w-2/4">
          <div className=" bg-white p-10 relative w-full m-5">
            {" "}
            <Image
              src={iphonePic}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

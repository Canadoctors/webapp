import Image from "next/image"
import icon from '../assets/images/icon.png'
import iconLaw from '../assets/images/iconlaw.png'
import iconBlocks from '../assets/images/iconblockchain.png'

export const Icons = () => {

return (

    <div className="w-full h-[40vh]   flex justify-around items-center"> 

    <div className="container flex"> 

<div className=" flex-col m-3 ">
<Image  src={icon} width={150} height={150 } />
<div className="font-bold text-xl ml-6"> <h1> Profesinales</h1></div>
    <div className="ml-6">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicinorum molestias?</p>
    </div>
    

</div>


<div className=" text-black  ">
<Image  src={iconBlocks} width={150} height={150 } />
<div className="font-bold text-xl ml-6"> <h1> Profesinales</h1></div>
    <div className="ml-6">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicinorum molestias?</p>
    </div>
    

</div>


<div className=" text-black  ">
<Image  src={iconLaw} width={150} height={150 } />
<div className="font-bold text-xl ml-6"> <h1> Profesinales</h1></div>
    <div className="ml-6">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicinorum molestias?</p>
    </div>
    

</div></div>

  

    

    
   
    
    </div>
)

}
import Image from "next/image";
import Counter from "../../components/Counter";
import Logo from "../../assets/images/canadoctorLogoHite.svg";

function index() {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
        <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-4xl text-center">
            <Image width={"400px"} src={Logo} alt="" />
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

import Image from "next/image";

import Link from "next/link";

import { ArrowUpRight } from 'lucide-react';

import BluePrintImg from '@/public/biohacks/blueprint.png';
import BlueprintBackdrop from '@/public/biohacks/blueprintBackdrop.png';


const stackImg = [

  "/biohacks/gadgets/gadget1.png",

  "/biohacks/gadgets/gadget2.png",

  "/biohacks/gadgets/gadget3.png",

];



const Hero: React.FC = () => {

  return (
    <div className="relative flex flex-col bg-slate-900">

      {/* <div className="absolute top-5 left-5 bg-yellow-200 w-[5px] h-[25vh]"></div>
      <div className="absolute bottom-5 left-5 bg-yellow-200 w-[5px] h-[25vh]"></div>
      <div className="absolute top-5 right-5 bg-yellow-200 w-[5px] h-[25vh]"></div>
      <div className="absolute bottom-5 right-5 bg-yellow-200 w-[5px] h-[25vh] "></div> */}

      {/* bottom side characters */}
      {/* <div className="absolute bottom-5 right-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
        </div>

      </div> */}


      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-10 bg-slate-900 p-4">

        <div className="col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold">

          <div className="w-[50px] h-[10px] bg-yellow-200"></div>
          <h1 className="sm:text-3xl md:text-7xl">Customized</h1>
          <h1 className="sm:text-3xl md:text-7xl">Hacks</h1>



          <Link href="/biohacks" className="flex flex-row items-center gap-2 hover:underline">

            <span className="text-xl">Get Started</span>

            <ArrowUpRight size={20} />

          </Link>

        </div>

        <div className="col-span-1 md:p-5 relative" style={{ height: "500px" }}>

          {stackImg && stackImg.map((img: string, index: number) => {

            const topPropertyInitial = 50;

            const leftPropertyInitial = 120;

            const initialSkewY = 6;

            return (

              <div key={index} className={`absolute transform skew-y-[${(initialSkewY) * index}] rounded-lg bg-slate-900`} style={{ top: `${(topPropertyInitial * index) + 10}px`, left: `${(leftPropertyInitial * index) + 10}px`, zIndex: index * 10 + 10 }}>

                <Image className="rounded-lg shadow-xl shadow-black" src={img} alt="cyberpunk" width={400} height={400} />

              </div>

            );

          })}

        </div>

      </div>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-10  bg-slate-900 p-4">
        <div className="group col-span-1 flex items-center justify-center md:p-5 relative order-2 md:order-1">
          <div className="relative">
            <Image className="group-hover:scale-105 transition duration-300 ease-in skew-y-6 rounded-lg shadow-xl shadow-black" src={BlueprintBackdrop} alt="cyberpunk" width={500} style={{ zIndex: 0 }} />
            <Image className="group-hover:scale-105 transition duration-300 ease-in absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit skew-y-6 rounded-lg shadow-xl shadow-black" src={BluePrintImg} alt="cyberpunk" width={400} style={{ zIndex: 1 }} />
          </div>
        </div>


        <div className=" col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold order-1 md:order-2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[50px] h-[10px] bg-yellow-200"></div>
            <h1 className="sm:text-3xl md:text-7xl">Customized</h1>
            <h1 className="sm:text-3xl md:text-7xl">Blueprints</h1>
          </div>

          <Link href={"/blueprints"} className="flex flex-row items-center gap-2 hover:underline" >
            <span className="text-xl">Make Your Own</span>
            <ArrowUpRight size={20} />
          </Link>

        </div>
      </div>

    </div>
  );

}



export default Hero;
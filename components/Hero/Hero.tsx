import Image from "next/image";

import Link from "next/link";

import { ArrowUpRight } from 'lucide-react';



const stackImg = [

  "/biohacks/gadgets/gadget1.png",

  "/biohacks/gadgets/gadget2.png",

  "/biohacks/gadgets/gadget3.png",

];



const Hero: React.FC = () => {

  return (

    <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-slate-900 p-4">

      <div className="col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold">

        <h1 className="text-7xl">Customized</h1>

        <h1 className="text-7xl">Hacks</h1>



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

            <div key={index} className={`absolute transform skew-y-[${ (initialSkewY) * index}] rounded-lg bg-slate-900`} style={{ top: `${(topPropertyInitial * index) + 10}px`, left: `${(leftPropertyInitial * index) + 10}px`, zIndex: index * 10 + 10 }}>

              <Image className="rounded-lg shadow-xl shadow-black" src={img} alt="cyberpunk" width={400} height={400} />

            </div>

          );

        })}

      </div>

    </div>

  );

}



export default Hero;
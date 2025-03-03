import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlueprintBackdrop from "@/app/assets/img/biohacks/neuralnterfaceHackChip.png";
import SecondaryBtn from "../Buttons/Nav/SecondaryBtn";
import Dots from "../Dots/Dots";
import gadget1 from "@/app/assets/img/biohacks/gadgets/gadget1.png";
import gadget2 from "@/app/assets/img/biohacks/gadgets/gadget2.png";
import gadget3 from "@/app/assets/img/biohacks/gadgets/gadget3.png";
import type { StaticImageData } from "next/image";

const stackImg = [
  gadget1,
  gadget2,
  gadget3,
];

const Overview: React.FC = () => {
  return (
    <div className="relative flex flex-col p-5 mt-15">
      
      <Dots direction="top-left" />
      <Dots direction="bottom-right" />
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-10  p-4">
        <div className="col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold">
          

          
          <div className="w-[50px] h-[10px] bg-yellow-200"></div>
          <div className="flex  sm:flex-row md:flex-col gap-2 animate-pulse-once">
            <SecondaryBtn btnText="Customized" />
          </div>

          <Link
            href="/biohacks"
            className="flex flex-row items-center gap-2 hover:underline animate-pulse-once"
          >
            <span className="text-xl">Get Started</span>

            <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="col-span-1 md:p-5 relative" style={{ height: "500px" }}>
          {stackImg &&
            stackImg.map((img: StaticImageData, index: number) => {
              const topPropertyInitial = 50;

              const leftPropertyInitial = 120;

              const initialSkewY = 6;

              return (
                <div
                  key={index}
                  className={`absolute transform skew-y-[${
                    initialSkewY * index
                  }] 
                rounded-lg bg-slate-900 animate-slide-in-left  `}
                  style={{
                    top: `${topPropertyInitial * index + 10}px`,
                    left: `${leftPropertyInitial * index + 10}px`,
                    zIndex: index * 10 + 10,
                  }}
                >
                  <Image
                    className="hover:shadow-purple-600  hover:scale-105 transition duration-300 ease-in rounded-lg shadow-xl shadow-black"
                    src={img}
                    alt="cyberpunk"
                    width={300}
                    height={300}
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-10">
        <div className="group col-span-1 flex items-center justify-center md:p-5 relative order-2 md:order-1 animate-slide-in-left">
          <div className="relative">
            <Image
              className="hover:shadow-purple-600  group-hover:scale-105 transition duration-300 ease-in skew-x-3 rounded-lg shadow-xl shadow-black"
              src={BlueprintBackdrop}
              alt="cyberpunk"
              width={300}
              height={300}
              style={{ zIndex: 0 }}
            />
          </div>
        </div>

        <div className=" col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold order-1 md:order-2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[50px] h-[10px] bg-yellow-200"></div>
            <div className="flex sm:flex-row md:flex-col gap-2 animate-pulse-once">
              {/* <h1 className="sm:text-xl md:text-4xl xl:text-7xl">Customized</h1> */}
              <SecondaryBtn btnText="Blueprints" />
              {/* <h1 className="sm:text-xl md:text-4xl xl:text-7xl">Blueprints</h1> */}
            </div>
          </div>

          <Link
            href={"/blueprints"}
            className="flex flex-row items-center gap-2 hover:underline"
          >
            <span className="text-xl">Make Your Own</span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;

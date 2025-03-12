"use client";
import { TTestimonial } from "@/dummydata/testimonials";
import Image from "next/image";

type TestimonialProps = {
  person: TTestimonial;
};

const Testimonial: React.FC<TestimonialProps> = ({
  person,
}: TestimonialProps) => {
  return (
    <div className="relative flex flex-row items-center gap-10 rounded-lg p-4 w-fit h-fit ">
      <div className="flex flex-col gap-12">
        <div className="col-span-2 flex flex-col gap-2 p-4 rounded-lg xl:-skew-y-10 shadow-lg shadow-indigo-500 ">
          <q className="bg-slate-800 rounded-lg text-lg font-bold text-white text-left leading-relaxed p-4 min-h-[20rem]">
            {person.description}
          </q>
          <h1 className="text-2xl font-bold text-yellow-200 p-4">
            {person.name}
          </h1>
          <div className="relative float-right flex flex-col items-end justify-end">
            <div className="relative w-fit h-fit flex flex-col items-center justify-center float-right">
              <div className="absolute w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] rotate-[45deg] inset-0 border-4 border-slate-300 z-10"></div>
              <Image
                width={100}
                height={100}
                src={person.img}
                alt={person.name}
                className="z-20 hover:scale-105 transition duration-100 ease-in rounded-full shadow-xl shadow-black border-2 border-pink-200 hover:border-pink-500 w-[8rem] md:w-[12rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

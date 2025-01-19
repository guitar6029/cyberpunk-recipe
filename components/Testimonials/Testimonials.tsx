import Testimonial from "./Testimonial.tsx/Testimonial";
import { testimonials, TTestimonial } from "@/dummydata/testimonials";
const Testimonials = () => {
    return ( 
        <div className="flex flex-col gap-10 p-4 mt-[5rem]  bg-slate-900">
           
           <div className="relative flex flex-row justify-center gap-2">
                <div className="  sm:w-full  md:w-[400px] md:h-[200px] bg-slate-800 rounded-lg"></div>
                <div className="shadow-lg shadow-black h-fit w-fit bg-slate-500 md:absolute whitespace-nowrap md:top-12 md:left-1/2 rounded-lg p-4 inset-0 flex text-5xl text-white font-extrabold z-10">
                    <h1>What our users say</h1>
                </div>
            </div>

           {/* <h1 className="font-extrabold text-5xl uppercase p-3 ">What our users say</h1> */}
            {testimonials && testimonials.map((person: TTestimonial, index: number) => {
                return (
                    <Testimonial key={index} person={person} /> 
                )
            })}
        </div>
     );
}
 
export default Testimonials;
import Testimonial from "./Testimonial.tsx/Testimonial";
import { testimonials, TTestimonial } from "@/dummydata/testimonials";
const Testimonials = () => {
    return ( 
        <div className="flex flex-col gap-10 p-4  bg-slate-900">
           
           <div className="relative flex flex-row gap-2">
                <div className="w-[400px] h-[200px] bg-slate-800 rounded-lg"></div>
                <div className="shadow-lg shadow-black h-fit w-fit bg-slate-500 absolute whitespace-nowrap top-12 -left-1 rounded-lg p-4 inset-0 flex text-5xl text-white font-extrabold z-10">
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
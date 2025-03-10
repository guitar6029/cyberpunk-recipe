import Testimonial from "./Testimonial.tsx/Testimonial";
import { testimonials, TTestimonial } from "@/dummydata/testimonials";
const Testimonials = () => {
    return ( 
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 p-4 mt-[5rem] ">
           
           
           {/* <h1 className="font-extrabold text-5xl uppercase p-3 ">What our users say</h1> */}
            {testimonials && testimonials.map((person: TTestimonial, index: number) => {
                return (
                    <div className="sm:col-span-3 2xl:col-span-1" key={index}>
                        <Testimonial  person={person} /> 
                    </div>
                )
            })}
        </div>
     );
}
 
export default Testimonials;
import Testimonial from "./Testimonial.tsx/Testimonial";
import { testimonials, TTestimonial } from "@/dummydata/testimonials";
const Testimonials = () => {
    return ( 
        <div className="flex flex-col gap-10 p-4  bg-slate-900">
            <h1 className="md:text-5xl sm:text-3xl  uppercase p-3 ">What our users say</h1>
            {testimonials && testimonials.map((person: TTestimonial, index: number) => {
                return (
                    <Testimonial key={index} person={person} /> 
                )
            })}
        </div>
     );
}
 
export default Testimonials;
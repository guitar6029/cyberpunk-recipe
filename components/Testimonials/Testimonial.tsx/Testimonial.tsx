import { TTestimonial } from "@/dummydata/testimonials";

type TestimonialProps = {
    person: TTestimonial
}

const Testimonial: React.FC<TestimonialProps> = ({ person }: TestimonialProps) => {
    return (
        <div className="flex flex-row items-center gap-5 rounded-lg p-3">
            <img src={person.img} alt={person.name} className="rounded-full border-2 border-pink-200 w-[100px] h-[100px]" />
            <div className="col-span-2 flex flex-col gap-2">
                <q className="text-lg">{person.description}</q>
                <h1 className="text-2xl font-bold text-yellow-200">- {person.name}</h1>
            </div>

        </div>
        
    );
}

export default Testimonial;

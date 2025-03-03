import type { StaticImageData } from "next/image";

export type TTestimonial = {
    name: string,
    img: StaticImageData,
    description: string
}

import testimonial1 from "@/app/assets/img/testimonials/avatar1.png";
import testimonial2 from "@/app/assets/img/testimonials/avatar2.png";
import testimonial3 from "@/app/assets/img/testimonials/avatar3.png";

export const testimonials : TTestimonial[] = [
    {
        name: "Rex",
        img: testimonial1,
        description: "I've never felt more powerful in my life! The Cybernetic Arm isn't just an upgrade—it's a game changer. From lifting heavy loads to precise movements, it's like having superhuman abilities. If you're looking to enhance your capabilities, this is the way to go."
    },
    {
        name: "Shadow",
        img: testimonial2,
        description: "The Stealth Cloak is an absolute lifesaver! Navigating through the city's underbelly without being seen is now a breeze. The invisibility and sensor disruption features work flawlessly. It's like becoming a ghost, leaving no trace behind."
    },
    {
        name: "Echo",
        img: testimonial3,
        description: "Unleashing the power of sound with the Sonic Disruptor Gauntlet is exhilarating. The ability to incapacitate foes and break through barriers with sonic waves is like something out of a dream. It's the perfect tool for any cyberpunk warrior."
    }
];

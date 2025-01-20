export type TSlide = {
    id: number,
    title: string,
    description: string
    linkTo?: string
}


export const slides: TSlide[] = [
    {
        id: 1,
        title: "Neon Vision Goggles",
        description: "Dive into the depths of the urban jungle with augmented vision that allows you to see in low light conditions and highlights critical elements in the environment.",
       
    },
    {
        id: 2,
        title: "Metallica Hulk Hands",
        description: "Unleash immense strength with bionic arms reinforced with lightweight, high-strength alloy. Ideal for heavy lifting or combat situations.",
        
    },
    {
        id: 3,
        title: "Stealth Cloak",
        description: "Become a shadow with this adaptive camouflage cloak that bends light around you, rendering you nearly invisible.",
        linkTo: "/biohacks"
    },
    {
        id: 4,
        title: "Cybernetic Memory Enhancer",
        description: "Enhance your cognitive capabilities and never forget a detail with this advanced neural implant.",
        linkTo: "/memory-enhancer"
    },
    {
        id: 5,
        title: "Bio-Luminescent Skin",
        description: "Stand out in the crowd with skin that can emit light and display patterns. Customizable through an app interface.",
        
    }
];


export type TSlide = {
    id: number,
    title: string,
    description: string
    linkTo?: string
}


export const slides: TSlide[] = [
    {
        id: 1,
        title: "Lorem ipsum 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.",
        linkTo: "/about"
    },
    {
        id: 2,
        title: "Lorem ipsum 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.",
    },
    {
        id: 3,
        title: "Lorem ipsum 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.",
    },
    {
        id: 4,
        title: "Lorem ipsum 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.",
        linkTo: "/biohacks"
    },
    {
        id: 5,
        title: "Lorem ipsum 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.",
    }
]

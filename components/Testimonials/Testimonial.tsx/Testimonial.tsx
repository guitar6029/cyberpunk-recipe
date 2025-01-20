"use client";

import { TTestimonial } from "@/dummydata/testimonials";
import { useState, useEffect } from "react";

type TestimonialProps = {
    person: TTestimonial
}

const ALIEN_CHARACTERS = ['*', '(', ')', '<', '>', ',', '.', '#', '$', '^', '!', '%', '|', '\\', '@', '&', '~', '{', '}', '[', ']', ':', ';', '?', '-', '+', '=', '_'];

const Testimonial: React.FC<TestimonialProps> = ({ person }: TestimonialProps) => {
    const [originalText, setOriginalText] = useState<string>(person.description);
    const [alienText, setAlienText] = useState<string>('');
    const [displayText, setDisplayText] = useState<string[]>([]);

    const [originalName, setOriginalName] = useState<string>(person.name);
    const [alienName, setAlienName] = useState<string>('');
    const [displayedName, setDisplayedName] = useState<string[]>([]);

    const [finishedTranslationText, setFinished] = useState<boolean>(false)

    useEffect(() => {
        generateAlienText(originalText, setAlienText, setDisplayText);
    }, [originalText]);

    useEffect(() => {
        if (finishedTranslationText) {
            generateAlienText(originalName, setAlienName, setDisplayedName);
        }
    }, [setFinished, originalName]);

    const generateAlienText = (text: string, setAlien: Function, setDisplay: Function) => {
        const characters = text.split('').map((char: string) => char);
        let myAlienString = characters.map((char: string) => {
            const randomIndex = Math.floor(Math.random() * ALIEN_CHARACTERS.length);
            return ALIEN_CHARACTERS[randomIndex];
        });

        setAlien(myAlienString.join(''));
        setDisplay(myAlienString);

        setTimeout(() => {
            getAlienToOriginalText(myAlienString, text, setDisplay);
        }, 3000); // 3-second delay before starting
    }

    const getAlienToOriginalText = (alienString: string[], originalString: string, setDisplay: Function) => {
        alienString.forEach((char: string, index: number) => {
            setTimeout(() => {
                setDisplay((prev: string[]) => {
                    const newText = [...prev];
                    newText[index] = originalString[index];
                    return newText;
                });
            }, index * 20); // Adjust the timing as needed
        });
    }

    return (
        <div className="flex flex-row items-center gap-10 rounded-lg p-4 w-fit h-full">
            <div className="flex flex-col gap-12">

                <div className="col-span-2 flex flex-col gap-2 bg-gradient-to-r from-[#2980b9] via-[#9b59b6] to-[#7e50e9]  p-4 rounded-lg -skew-y-10 shadow-lg shadow-indigo-500">
                    <h1 className="text-2xl font-bold text-yellow-200">{displayedName.join('')}</h1>
                    <q className="text-lg text-left leading-relaxed ">{displayText.join('')}</q>

                    <div className="relative float-right flex flex-col items-end justify-end">
                        <div className="relative w-fit h-fit flex flex-col items-center justify-center float-right">
                            <div className="absolute w-[8rem] h-[8rem] md:w-[12rem] md:h-[12rem] rotate-[45deg]  inset-0 border-4 border-slate-300 z-10"

                            >
                            </div>
                            <img
                                src={person.img}
                                alt={person.name}
                                className="z-20 rounded-full shadow-xl  shadow-black border-2 border-pink-200 w-[8rem] md:w-[12rem] "

                            />
                        </div>

                    </div>
                </div>
                <div className="text-2xl font-bold text-yellow-200 -skew-y-10 shadow-lg shadow-indigo-500 h-[10px]"></div>
            </div>
        </div>
    );
}

export default Testimonial;

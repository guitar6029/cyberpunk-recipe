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

    useEffect(() => {
        generateAlienText(originalText, setAlienText, setDisplayText);
    }, [originalText]);

    useEffect(() => {
        generateAlienText(originalName, setAlienName, setDisplayedName);
    }, [originalName]);

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
            }, index * 90); // Adjust the timing as needed
        });
    }

    return (
        <div className="flex flex-row items-center gap-5 rounded-lg p-3 bg-slate-800 h-full">
            <img src={person.img} alt={person.name} className="rounded-full shadow-xl shadow-black border-2 border-pink-200 w-[100px] h-[100px]" />
            <div className="col-span-2 flex flex-col gap-2">
                <q className="text-lg text-left text-green-500">{displayText.join('')}</q>
                <h1 className="text-2xl font-bold text-yellow-200">{displayedName.join('')}</h1>
            </div>
        </div>
    );
}

export default Testimonial;

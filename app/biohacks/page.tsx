"use client";

import HackCard from "@/components/Card/HackCard";
import { useState } from 'react';
import { gadgets, Gadget } from "@/dummydata/hacks";
import Link from "next/link";
import { Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import TemplateCorners from "@/components/Template/TemplateCorners";

const Biohacks = () => {

    const [currentBiohack, setCurrentBiohack] = useState(0);

    const handleChangeSlide = (direction: number) => {
        if (direction === 1) {
            let currentIndex = currentBiohack + 1 >= gadgets.length ? 0 : currentBiohack + 1;
            setCurrentBiohack(currentIndex);
        } else {
            let currentIndex = currentBiohack - 1 < 0 ? gadgets.length - 1 : currentBiohack - 1;
            setCurrentBiohack(currentIndex);
        }
    }

    const previousIndex = currentBiohack - 1 < 0 ? gadgets.length - 1 : currentBiohack - 1;
    const nextIndex = currentBiohack + 1 >= gadgets.length ? 0 : currentBiohack + 1;

    return (
        <TemplateCorners cornerColor="bg-green-500">
            <div className="flex flex-grow items-center justify-between min-h-screen">
                <ChevronLeft size={160} onClick={() => handleChangeSlide(-1)} className="text-green-500 cursor-pointer" />
                
                <div className="flex flex-row items-center gap-10">
                    {/* Previous Slide */}
                    <div className="flex flex-col gap-2 w-[250px] h-[100px] truncate rounded-lg shadow-lg shadow-stone-500 blur">
                        <span>{gadgets[previousIndex].gadget}</span>
                        <span>{gadgets[previousIndex].shortDescription}</span>
                    </div>
                    
                    {/* Current Slide */}
                    <div className="flex flex-col gap-2 w-[250px] h-[100px] truncate rounded-lg shadow-lg shadow-stone-500 scale-125">
                        <span>{gadgets[currentBiohack].gadget}</span>
                        <span>{gadgets[currentBiohack].shortDescription}</span>
                    </div>

                    {/* Next Slide */}
                    <div className="flex flex-col gap-2 w-[250px] h-[100px] truncate rounded-lg shadow-lg shadow-stone-500 blur">
                        <span>{gadgets[nextIndex].gadget}</span>
                        <span>{gadgets[nextIndex].shortDescription}</span>
                    </div>
                </div>
                
                <ChevronRight size={160} onClick={() => handleChangeSlide(1)} className="text-green-500 cursor-pointer" />
            </div>
        </TemplateCorners>
    );
}

export default Biohacks;

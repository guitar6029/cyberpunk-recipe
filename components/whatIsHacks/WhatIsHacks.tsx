"use client";
import { useState, useEffect } from 'react';
import { Package, Axe, Bot } from 'lucide-react';
import Link from 'next/link';
import {slides, TSlide} from '@/dummydata/slides';

/**
 * make a slider , 5 slides
 * with slider indicator at the bottom
 * add an animation
 * @returns 
 * 
 */



const WhatIsHacks = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

    // add automatic slide change
    useEffect(() => {

        //set interval for 5 seconds
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        slides[currentSlide] ? (
            <div className="relative bg-green-600 md:h-[50vh] flex flex-col">
                
                {/* top left corner */}
                <div className="absolute top-0 left-0 bg-white w-[5px] h-[50px]"></div>
                <div className="absolute -top-6 left-5 rotate-90 bg-white w-[5px] h-[50px]"></div>
                
                {/* top right corner */}
                <div className="absolute top-0 right-0 bg-white w-[5px] h-[50px]"></div>
                <div className="absolute -top-6 right-6 rotate-90 bg-white w-[5px] h-[50px]"></div>
                
                {/* bottom left corner */}
                <div className="absolute bottom-0 left-0 bg-white w-[5px] h-[50px]"></div>
                <div className="absolute -bottom-6 left-5 rotate-90 bg-white w-[5px] h-[50px]"></div>
                
                {/* bottom right corner */}
                <div className="absolute bottom-0 right-0 bg-white w-[5px] h-[50px]"></div>
                <div className="absolute -bottom-6 right-6 rotate-90 bg-white w-[5px] h-[50px]"></div>


                
                <div className="bg-green-600 md:h-[50vh] sm:flex flex-col  md:grid grid-cols-2 items-center sm:gap-5 md:gap-2 justify-center sm:p-6 md:p-4 ">
                    <div className="flex flex-col items-center gap-6 ">
                        <h1 className="md:text-5xl sm:text-2xl  uppercase col-span-1 font-bold">{slides[currentSlide].title}</h1>
                        <div className="flex flex-row items-center gap-10">
                            <div className="group flex flex-col items-center gap-3">
                                <Package className="group-hover:text-black transition duration-100 ease-in" size={40} />
                                <span className="group-hover:text-black transition duration-100 ease-in">Lorem</span>
                            </div>
                            <div className=" group flex flex-col items-center gap-2">
                                <Axe className="group-hover:text-black transition duration-100 ease-in" size={40} />
                                <span className="group-hover:text-black transition duration-100 ease-in">Lorem</span>
                            </div>
                            <div className="group flex flex-col items-center gap-2">
                                <Bot className="group-hover:text-black transition duration-100 ease-in" size={40} />
                                <span className="group-hover:text-black transition duration-100 ease-in">Lorem</span>
                            </div>

                        </div>
                        <div className="min-h-[2.5rem]">
                            {slides[currentSlide].linkTo ? (
                                <Link href={slides[currentSlide].linkTo}>
                                    <button className="hover:scale-105 transition duration-200 ease-in p-2 rounded-lg bg-yellow-200 text-black">Learn More</button>
                                </Link>
                            ) : null}

                        </div>
                    </div>
                    <p className="col-span-1 text-2xl">{slides[currentSlide].description}</p>
                </div>

                <div className="flex flex-row items-center justify-center p-4">
                    {slides.map((slide: TSlide, index: number) => {
                        return (
                            <div onClick={() => setCurrentSlide(index)} className={index === currentSlide ? "w-3 h-3 bg-black rounded-full mx-2" : "w-3 h-3 bg-white rounded-full mx-2"} key={index}></div>
                        )
                    })}
                </div>
            </div>
        ) : null

    );
}

export default WhatIsHacks;
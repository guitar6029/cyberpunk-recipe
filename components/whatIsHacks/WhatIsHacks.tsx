"use client";
import { useState, useEffect } from 'react';
import { Package, Axe, Bot } from 'lucide-react';
import Link from 'next/link';
import { slides, TSlide } from '@/dummydata/slides';

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
            <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center">


                <div className="absolute top-0 right-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        </div>
                    </div>
                </div>



                <div className="absolute bottom-0 left-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        </div>
                    </div>
                </div>




                <div className="bg-black h-fit sm:flex-col sm:gap-10 md:flex-col md:grid grid-cols-2 items-center md:gap-2 justify-center sm:p-6 md:p-4 ">
                    <div className="flex flex-col items-center gap-6 ">
                        <h1 className="min-h-[4rem] md:text-5xl sm:text-2xl  uppercase col-span-1 font-bold text-center text-gray-for-dark-drop">{slides[currentSlide].title}</h1>
                        <div className="flex flex-row items-center gap-10">
                            <div className="group flex flex-col items-center gap-3">
                                <Package className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200" size={100} />
                                <span className="group-hover:scale-105 transition duration-100 ease-in text-gray-for-dark-drop sm:text-xl md:text-2xl">1</span>
                            </div>
                            <div className=" group flex flex-col items-center gap-2">
                                <Axe className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200" size={100} />
                                <span className="group-hover:scale-105 transition duration-100 ease-in text-gray-for-dark-drop sm:text-xl md:text-2xl">2</span>
                            </div>
                            <div className="group flex flex-col items-center gap-2">
                                <Bot className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200" size={100} />
                                <span className="group-hover:scale-105 transition duration-100 ease-in text-gray-for-dark-drop sm:text-xl md:text-2xl">2</span>
                            </div>

                        </div>
                        <div className="min-h-[2.5rem] sm:mt-4 sm:mb-4">
                            {slides[currentSlide].linkTo ? (
                                <Link href={slides[currentSlide].linkTo}>
                                    <button className="hover:scale-105 transition duration-200 ease-in p-5 rounded-lg bg-yellow-200 text-black sm:text-xl md:text-2xl">Learn More</button>
                                </Link>
                            ) : null}

                        </div>
                    </div>
                    <p className="col-span-1 text-2xl text-center text-gray-for-dark-drop min-h-[4rem]">{slides[currentSlide].description}</p>
                </div>

                <div className="flex flex-row items-center justify-center p-4 gap-10 sm:mb-10">
                    {slides.map((slide: TSlide, index: number) => {
                        return (
                            <div onClick={() => setCurrentSlide(index)} className={` ${index === currentSlide ? " bg-purple-500 " : " bg-white rotate-[45deg]"} rounded-lg w-[1rem] h-[4rem]  rotate-[45deg] cursor-pointer `} key={index}></div>
                        )
                    })}
                </div>
            </div>
        ) : null

    );
}

export default WhatIsHacks;
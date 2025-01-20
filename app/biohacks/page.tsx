"use client";
import { useState, useEffect } from 'react';
import { gadgets } from "@/dummydata/hacks";
import Link from "next/link";
import { Skull, CircleDot, ChevronLeft, ChevronRight, Barcode } from 'lucide-react';
import TemplateCorners from "@/components/Template/TemplateCorners";
import Image from "next/image";
import CardTemplate from "@/components/Card/CardTemplate";

const Biohacks: React.FC = () => {

    const [currentBiohack, setCurrentBiohack] = useState(0);

    const getTradeLevelBgColor = (trade: string) => {
        if (trade === "low") {
            return "bg-yellow-200";
        } else if (trade === "medium") {
            return "bg-green-200";
        } else if (trade === "high") {
            return "bg-red-200";
        }
    }
    0

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


    //add event listner for left and right arrow
    useEffect(() => {


        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleChangeSlide(-1);
            } else if (event.key === 'ArrowRight') {
                handleChangeSlide(1);
            }

            // //watch for small screen
            // if (window.matchMedia("(max-width: 640px)").matches) {

            //     if (event.key === 'ArrowUp') {
            //         handleChangeSlide(-1);
            //     } else if (event.key === 'ArrowDown') {
            //         handleChangeSlide(1);
            //     }
            // }


        }

        window.addEventListener('keydown', handleKeyDown)

        //clean up
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }


    }, [currentBiohack])

    return (
        <TemplateCorners minHScreen={false} cornerColor="bg-slate-800">
            <div className="flex flex-grow flex-col items-center gap-[10rem] justify-center ">
                <div className="mt-5 text-center text-yellow-200 text-7xl font-bold flex flex-row items-baseline justify-center">
                    <span>Bi</span>
                    <CircleDot size={40} className="hover:animate-pulse transition-all duration-100 ease-in-out" />
                    <span>hacks</span>
                </div>
                <div className="flex sm:flex-col lg:flex-row items-center gap-5 relative">

                    {/* Previous Slide */}
                    <CardTemplate classString="z-10  p-4 flex flex-col items-center justify-center gap-2 sm:w-[100px] sm:h-[150px] lg:w-[250px] lg:h-[300px] truncate rounded-lg shadow-lg shadow-stone-500 blur">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <span className="text-sm uppercase">[{gadgets[previousIndex].id}</span>
                                    <Barcode size={20} />
                                </div>
                                <span className="text-sm text-yellow-300 font-bold">{gadgets[previousIndex].gadget}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-4 h-full rounded-lg">
                            <Image className="rounded-full w-full shadow-md shadow-yellow-200" width={200} height={200} src={gadgets[previousIndex].img} alt={gadgets[previousIndex].gadget} />
                        </div>

                    </CardTemplate>


                    {/* Current Slide */}
                    <CardTemplate classString="bg-black cursor-pointer relative z-40 p-4 flex flex-col w-[400px] h-[500px] truncate rounded-lg shadow-xl shadow-purple-400 scale-125" >
                        <Link href={"/biohacks/" + gadgets[currentBiohack].id} className="flex flex-col gap-2 ">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row gap-1 items-center">

                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row gap-2 items-center">
                                            <span className="text-sm uppercase">{gadgets[currentBiohack].id}</span>
                                            <Barcode size={20} />
                                        </div>
                                        <span className="text-sm text-yellow-300 font-bold">{gadgets[currentBiohack].gadget}</span>
                                    </div>


                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    {gadgets[currentBiohack].description.psychosisPossible ? <Skull className="text-yellow-200" size={20} /> : null}
                                    <div className={`rounded-full w-2 h-2 ${getTradeLevelBgColor(gadgets[currentBiohack].description.tradeExchangeLevel)}`}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 p-4 h-full rounded-lg">

                                <Image className="rounded-full w-full shadow-md shadow-yellow-200" width={200} height={200} src={gadgets[currentBiohack].img} alt={gadgets[currentBiohack].gadget} />
                            </div>

                            <div className="w-[2vw] h-1 bg-yellow-200"></div>
                            <div className="w-[2vw] h-1 bg-yellow-200"></div>
                            <div className="w-[5vw] h-1 bg-yellow-200"></div>

                        </Link>


                    </CardTemplate>


                    {/* Next Slide */}
                    <CardTemplate classString="z-10  p-4 flex flex-col items-center justify-center gap-2 sm:w-[100px] sm:h-[150px] lg:w-[250px] lg:h-[300px] truncate rounded-lg shadow-lg shadow-stone-500 blur">
                        <div className="flex flex-row gap-1 items-center">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <span className="text-sm uppercase">{gadgets[nextIndex].id}</span>
                                    <Barcode size={20} />
                                </div>
                                <span className="text-sm text-yellow-300 font-bold">{gadgets[nextIndex].gadget}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-4 h-full rounded-lg">
                            <Image className="rounded-full w-full shadow-md shadow-yellow-200" width={200} height={200} src={gadgets[nextIndex].img} alt={gadgets[nextIndex].gadget} />
                        </div>
                    </CardTemplate>
                </div>

                {/* Navigation Buttons for the cards */}
                <div className="flex flex-row items-center gap-4 justify-between text-3xl text-white">
                    <ChevronLeft size={60} onClick={() => handleChangeSlide(-1)} className="text-green-500 cursor-pointer " />
                    <span className="text-green-500 text-xl font-bold">Navigate</span>
                    <ChevronRight size={60} onClick={() => handleChangeSlide(1)} className="text-green-500 cursor-pointer " />
                </div>

            </div>
        </TemplateCorners>
    );
}

export default Biohacks;

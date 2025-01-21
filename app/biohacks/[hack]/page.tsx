"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import TemplateCorners from "@/components/Template/TemplateCorners";
import { gadgets, TGadget } from "@/dummydata/hacks";
import { Skull, MoveLeft, Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HackDetails: React.FC = () => {
    const params = useParams();
    const { hack } = params;
    const [gadget, setGadget] = useState<TGadget | null>(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const findGadget = gadgets.find((gadget: TGadget) => gadget.id === hack);
            if (findGadget) {
                setGadget(findGadget);
            }
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [hack]);

    const levelTrading = () => {
        if (gadget) {
            if (gadget.description.tradeExchangeLevel === "low") {
                return <div className="w-[75px] h-[20px] rounded-lg bg-yellow-200"></div>
            } else if (gadget.description.tradeExchangeLevel === "medium") {
                return <div className="w-[75px] h-[20px] rounded-lg bg-green-200"></div>
            } else if (gadget.description.tradeExchangeLevel === "high") {
                return <div className="w-[75px] h-[20px] rounded-lg bg-red-200"></div>

            }

        } else {
            return null
        }
    }

    if (!gadget) {
        return (
            <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-row items-center justify-center">
                    <Bot size={40} />
                    <h1>Loading gadget or something went wrong</h1>
                </div>
            </div>
        );
    }

    return (
        <TemplateCorners minHScreen={false} cornerColor="bg-yellow-200">
            <Link href="/biohacks" className="group flex flex-row gap-2 p-4 items-center w-fit">
                <MoveLeft size={60} className="group-hover:text-green-500 transition duration-150 ease-in" />
                <span className="text-3xl font-bold group-hover:text-green-500 transition duration-150 ease-in">Go back</span>
            </Link>
            <div className="col-span-1 flex flex-col gap-4">


                <div className="relative flex flex-col gap-4 rounded-lg  p-4">

                    {/* top left extra shape */}
                    <div className="absolute top-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom left extra shape */}
                    <div className="absolute bottom-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom right extras */}
                    <div className="absolute bottom-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>

                    {/* top right extras */}
                    <div className="absolute top-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>

                    <div className="flex flex-row items-center gap-2">
                        <h1 className="text-3xl font-bold">{gadget?.id} </h1>
                        {gadget?.description.psychosisPossible && <Skull size={40} className="text-pink-200" />}

                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <h3 className="text-xl font-bold">Trade Level </h3>
                        {levelTrading()}
                    </div>
                    <h1 className="text-3xl font-bold">{gadget?.gadget}</h1>
                    <div className="relative">
                        <Image
                            className="float-right mr-4 mb-2 rounded-full shadow-lg shadow-purple-500 w-[20%]"
                            src={gadget?.img ?? ""}
                            alt={gadget?.gadget ?? ""}
                            width={500}
                            height={200}
                        />
                        <p className="text-xl leading-relaxed text-gray-for-dark-drop">{gadget?.description.info}</p>
                    </div>
                </div>
                <div className="relative flex flex-col gap-4 p-4">

                    {/* top left extra shape */}
                    <div className="absolute top-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom left extra shape */}
                    <div className="absolute bottom-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom right extras */}
                    <div className="absolute bottom-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>

                    {/* top right extras */}
                    <div className="absolute top-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>

                    <h1 className="text-3xl font-bold">Ingredients</h1>
                    <ul className="flex flex-col gap-4 text-gray-for-dark-drop">
                        {gadget?.ingredients.map((ingredient: string, index: number) => (
                            <li className="text-xl" key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex flex-col gap-4 p-4">

                    {/* top left extra shape */}
                    <div className="absolute top-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom left extra shape */}
                    <div className="absolute bottom-0 left-0 w-[.5rem] h-[.5rem] bg-yellow-200"></div>

                    {/* bottom right extras */}
                    <div className="absolute bottom-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute bottom-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>

                    {/* top right extras */}
                    <div className="absolute top-0 right-0 w-[.175vw] h-[2.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-2 w-[.175vw] h-[1.6rem] bg-yellow-200"></div>
                    <div className="absolute top-0 right-4 w-[.175vw] h-[.6rem] bg-yellow-200"></div>
                    <h1 className="text-3xl font-bold">Steps</h1>
                    <ul className="flex flex-col gap-4 text-gray-for-dark-drop">
                        {gadget?.instructions.map((step: string, index: number) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </TemplateCorners>
    );
};

export default HackDetails;

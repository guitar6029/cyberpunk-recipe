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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const findGadget = gadgets.find((gadget: TGadget) => gadget.id === hack);

            if (findGadget) {
                setGadget(findGadget);
                setLoading(false);
            } else {
                setGadget(null);
                setLoading(false);
            }
        }, 4500);

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

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-4">
                <div className="flex flex-row gap-2 items-center justify-center min-h-screen">
                    <Bot size={40} className="animate-bounce" />
                    <h1 className="text-3xl font-bold">Loading gadget</h1>
                    <span className="animate-bounce delay-75">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-150">.</span>


                </div>
            </div>
        );
    }

    return (
        <TemplateCorners minHScreen={false} cornerColor="bg-transparent">
            <Link href="/biohacks" className="group flex flex-row gap-2 p-4 items-center w-fit cursor-pointer">
                <MoveLeft size={60} className="group-hover:text-green-500 transition duration-150 ease-in" />
                <span className="text-3xl font-bold group-hover:text-green-500 transition duration-150 ease-in cursor-pointer!">Go back</span>
            </Link>
            <div className="col-span-1 flex flex-col gap-4">


                <div className="relative flex flex-col gap-4 rounded-lg  p-4">

                    {/* background div block */}
                    <div style={{ zIndex: -1, backgroundImage: `url(${gadget?.img})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="absolute w-[50%] h-[120vh] rounded-lg bg-yellow-100 opacity-30 top-10 right-20"></div>
                    <div style={{ zIndex: -1 }} className="absolute w-[10%] h-[120vh] bg-yellow-100 opacity-10 rounded-md bottom-0 left-0"></div>


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
                        {/* <Image
                            className="float-right mr-4 mb-2 rounded-full shadow-lg shadow-purple-500 w-[20%]"
                            src={gadget?.img ?? ""}
                            alt={gadget?.gadget ?? ""}
                            width={500}
                            height={200}
                        /> */}
                        <p className="text-xl leading-relaxed text-gray-for-dark-drop">{gadget?.description.info}</p>
                    </div>
                </div>
                <div className="relative flex flex-col gap-4 p-4">



                    <h1 className="text-3xl font-bold">Ingredients</h1>
                    <ul className="flex flex-col gap-4 text-gray-for-dark-drop">
                        {gadget?.ingredients.map((ingredient: string, index: number) => (
                            <li className="text-xl flex flex-row items-center gap-2" key={index}>
                                <span className='font-bold flex flex-row items-center justify-center text-2xl p-2 bg-yellow-200 rounded-full w-[5rem] h-[5rem] text-black'>{ingredient.split("x ")[0]}X</span>
                                <span className="text-xl font-bold text-white">{ingredient.split("x ")[1]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex flex-col gap-4 p-4 bg-gray-700 rounded-lg text-white">

                    <div style={{ zIndex: -1 }} className="absolute w-[10%] h-[50vh] bg-yellow-100 opacity-10 rounded-md bottom-50 left-50"></div>

                    <h1 className="text-3xl font-bold">Steps</h1>
                    <ul className="flex flex-col gap-4">
                        {gadget?.instructions.map((step: string, index: number) => (
                            <li className="font-bold" key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </TemplateCorners>
    );
};

export default HackDetails;

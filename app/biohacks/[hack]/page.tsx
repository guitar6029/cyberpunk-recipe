"use client";
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import CardTemplate from "@/components/Card/CardTemplate";
import TemplateCorners from "@/components/Template/TemplateCorners";
import { gadgets, TGadget } from "@/dummydata/hacks";
import { Skull, Barcode, MoveLeft } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const HackDetails: React.FC = () => {

    const params = useParams();
    const { hack } = params;


    const [gadget, setGadget] = useState<TGadget | null>(null);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            const findGadget = gadgets.find((gadget: TGadget) => gadget.id === hack);
            if (findGadget) {
                setGadget(findGadget);
                //  setLoading(false);
            }
        }, 1500)

        return () => clearTimeout(timeoutId);

    }, [hack]);


    if (!gadget) {
        return (
            <div>no gadget</div>
        )
    }


    return (
        <TemplateCorners cornerColor="bg-yellow-200">
            <Link href={"/biohacks"} className="group flex flex-row gap-2 p-4 items-center w-fit">
                <MoveLeft size={60} className="group-hover:text-green-500 transition duration-150 ease-in" />
                <span className="text-3xl font-bold group-hover:text-green-500 transition duration-150 ease-in">Go back</span>
            </Link>
            {/* <div className="relative flex flex-row items-center justify-center gap-4">
                <Image
                    className="z-10 absolute top-5 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg shadow-purple-500 skew-x-10 w-[50%] h-fit"
                    src={gadget?.img ?? ""}
                    alt={gadget?.gadget ?? ""}
                    width={500}
                    height={200}
                />

                <div className="z-20 top-[30rem] left-[20rem] col-span-1 relative skew-x-15 w-[50%] h-[50%] flex flex-col p-10 justify-center items-center gap-4 bg-black shadow-lg shadow-yellow-200">
                    <h1 className="text-3xl font-bold">{gadget?.id} </h1>
                    <h1 className="text-3xl font-bold">{gadget?.gadget}</h1>
                    <Image className="rounded-lg w-fit h-[20vh]" src={gadget?.img ?? ""} alt={gadget?.gadget ?? ""} width={500} height={200} />
                </div>
                {/* <CardTemplate classString="z-20 top-[30rem] left-[20rem] col-span-1 relative skew-x-15 w-[50%] h-[50%] flex flex-col p-10 justify-center items-center gap-4 bg-black shadow-lg shadow-yellow-200">
                </CardTemplate> */}
            {/* </div> */} 


            {/* <div className="grid grid-cols-1  gap-4 p-4 ">
                <CardTemplate classString="col-span-1 relative skew-y-negative-10  w-[90%] h-[50%] flex flex-col p-10  justify-center items-center gap-4 bg-black shadow-lg shadow-yellow-200">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">{gadget?.id} </h1>
                        <h1 className="text-3xl font-bold">{gadget?.gadget}</h1>
                        <Image className="rounded-lg w-fit h-[20vh]" src={gadget?.img ?? ""} alt={gadget?.gadget ?? ""} width={500} height={200} />

                    </div>
                </CardTemplate>

                <div className="col-span-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-4 rounded-lg bg-slate-800  p-4 ">
                        <div className="flex flex-row items-center gap-2">
                            <h1 className="text-3xl font-bold">{gadget?.id} </h1>
                            {gadget?.description.psychosisPossible && <Skull size={40} className="text-pink-200" />}
                        </div>
                        <h1 className="text-3xl font-bold">{gadget?.gadget}</h1>
                        <p className="text-xl font-se leading-releaxed">{gadget?.description.info}</p>
                    </div>

                    <div className="flex flex-col gap-4 bg-slate-800 p-4">
                        <h1 className="text-3xl font-bold">Ingredients</h1>
                        <ul className='flex flex-col gap-4'>
                            {gadget?.ingredients.map((ingrediet: string, index: number) => (
                                <li className="text-xl" key={index}>{ingrediet}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 bg-slate-800 p-4">
                        <h1 className="text-3xl font-bold">Steps</h1>
                        <ul className="flex flex-col gap-4" >
                            {gadget?.instructions.map((step: string, index: number) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div> */}
        </TemplateCorners>

    );
}

export default HackDetails;
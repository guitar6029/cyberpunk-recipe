import HackCard from "@/components/Card/HackCard";
import { gadgets, Gadget } from "@/dummydata/hacks";
import Link from "next/link";
import { Cpu } from 'lucide-react';

const Biohacks = () => {
    return (
    <div className="min-h-screen flex flex-col gap-4 p-4">
       <div className="flex flex-row items-center gap-2">
        <h1 className="text-4xl text-yellow-200">Biohacks</h1>
        <Cpu size={30} /> 
        </div> 
        <div className="flex flex-col items-center gap-4">
            {gadgets && gadgets.map((gadget: Gadget) => (
                <Link key={gadget.gadget} href={`/biohacks/${gadget.gadget}`} className="w-full" >
                    <HackCard gadget={gadget} />
                </Link>
            ))}
        </div>

    </div>);
}

export default Biohacks;
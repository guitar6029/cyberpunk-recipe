import { ArrowUpRight, Barcode, Package, Axe, Bot } from 'lucide-react';
import Link from 'next/link';

const WhatIsHacks = () => {
    return (
        <div className="bg-green-600 md:h-[50vh] sm:flex flex-col  md:grid grid-cols-2 items-center sm:gap-5 md:gap-2 justify-center sm:p-6 md:p-4 ">
            <div className="flex flex-col items-center gap-4 ">
                <h1 className="md:text-5xl sm:text-3xl  uppercase col-span-1 text-center">What is hacks ?</h1>
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
                <div>
                    <Link href={"/about"}>
                    <button className="">Learn More</button>
                    </Link>
                </div>
            </div>
            <p className="col-span-1 text-2xl">Lorem ipsum dolor sit amet <span className="text-black font-bold"> consectetur adipisicing</span> elit. Tenetur ab necessitatibus deleniti accusamus eligendi consequuntur nulla saepe aut dolorum accusantium. Minus tempora sint provident, <span className="text-black font-bold">lorem, ipsum dolor.</span> quo dignissimos reprehenderit <span className="text-black font-bold">assumenda</span> corporis deleniti.</p>
        </div>
    );
}

export default WhatIsHacks;
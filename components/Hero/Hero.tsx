import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import heroImage from "@/public/biohacks/cyberpunk.png";
const Hero: React.FC = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-slate-900 p-4">

            <div className="col-span-1 flex flex-col items-center justify-center gap-5 text-yellow-200 p-4 font-bold">
                <h1 className="text-7xl">Custom</h1>
                <h1 className="text-7xl">Recipes</h1>

                <Link href="/biohacks" className="flex flex-row items-center gap-2 hover:underline">
                    <span className="text-xl">Get Started</span>
                    <ArrowUpRight size={20} />
                </Link>
            </div>
            <div className="col-span-1 md:p-5">
                <Image className=" transform skew-y-6 rounded-lg bg-slate-900 sm:w-full md:w-[600px]" src={heroImage} alt="cyberpunk" width={600} height={500} />
            </div>


        </div>
    );
}

export default Hero;
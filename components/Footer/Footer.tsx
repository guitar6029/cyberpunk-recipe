import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="h-full sm:h-[25vh] flex sm:flex-col md:flex-row gap-2 items-center justify-around">
            <h1 className="text-xl text-green-400 font-extrabold">hacks &copy; 2077</h1>
            <div className="flex flex-row gap-10">

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">Category</h1>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 1</Link>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 2</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">Category</h1>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 3</Link>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 4</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-2xl">Category</h1>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 3</Link>
                    <Link href={"/#"} className="text-xl text-green-400 hover:underline">Link 4</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

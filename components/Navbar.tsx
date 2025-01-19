import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex flex-row items-center gap-4 p-4 h-[100px]">
            <h1 className="text-3xl text-yellow-200 border-2 p-3 border-yellow-200">hacks</h1>
            <div className="flex flex-row items-center gap-2">
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/"}>Home</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/biohacks"}>Biohacks</Link>
            </div>
            {/* <div className="hacks-container">
                <h1 className="text-3xl text-yellow-200">hacks</h1>
                <div className="animated-point"></div>
            </div> */}
            <div className="flex flex-row items-center gap-2">
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/biohacks/community"}>Community</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/biohacks/match"}>Match</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/blueprints"}>Blueprints</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-4" href={"/about"}>About</Link>
            </div>
        </div>);
}

export default Navbar;

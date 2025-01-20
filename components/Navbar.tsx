import Link from "next/link";
import NavLink from "./Buttons/Nav/NavLink";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center gap-4 p-4 h-[100px] bg-black">

            {/* <div className="relative w-fit flex flex-col items-center justify-center ">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7e50e9] via-[#9b59b6] to-[#2980b9] z-10 link-layout"></div>
                <button className="z-20 hover:scale-105 transition duration-200 ease-in  p-4 text-6xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >hacks</button>
            </div> */}


            {/* <h1 className="text-3xl text-yellow-200 border-2 p-3 border-yellow-200 font-bold">hacks</h1> */}
            <div className="flex flex-row items-center gap-2">

                <NavLink linktTo="/" btnText="Home" />
                <NavLink linktTo="/biohacks" btnText="Biohacks" />
                <NavLink linktTo="/about" btnText="About" />


            </div>


        </div>);
}

export default Navbar;

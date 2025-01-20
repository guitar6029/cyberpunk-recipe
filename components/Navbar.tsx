import Link from "next/link";
import NavLink from "./Buttons/Nav/NavLink";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center gap-4 p-4 h-[100px] bg-black">

           
            <div className="flex flex-row items-center gap-2">

                <NavLink linktTo="/" btnText="Home" />
                <NavLink linktTo="/biohacks" btnText="Biohacks" />
                <NavLink linktTo="/about" btnText="About" />


            </div>


        </div>);
}

export default Navbar;

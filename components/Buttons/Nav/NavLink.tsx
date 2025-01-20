import Link from "next/link";

type NavLinkProps = {
    btnText: string;
    linktTo: string;
}

const NavLink: React.FC<NavLinkProps> = ({ btnText, linktTo }) => {
    return (
        <div className="relative w-fit flex flex-col items-center justify-center ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7e50e9] via-[#9b59b6] to-[#2980b9] z-10 link-layout"></div>
            <Link className="z-20 hover:scale-105 transition duration-200 ease-in  p-4 text-5xl font-bold" style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} href={linktTo}>{btnText}</Link>
        </div>

    );
}

export default NavLink;
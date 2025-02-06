import Link from "next/link";

type NavLinkProps = {
    btnText: string;
    linktTo: string;
}

const NavLink: React.FC<NavLinkProps> = ({ btnText, linktTo }) => {
    return (
        <div className="relative w-fit flex flex-col items-center justify-center cursor-pointer ">
            <div className="absolute inset-0 bg-purple-500 z-10 link-layout"></div>
            <Link className="z-20 hover:scale-105 transition duration-200 ease-in  p-4 sm:text-xl text-5xl font-bold cursor-pointer"  href={linktTo}>{btnText}</Link>
        </div>

    );
}

export default NavLink;
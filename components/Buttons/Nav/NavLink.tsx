import Link from "next/link";

type NavLinkProps = {
    btnText: string;
    linktTo: string;
    showLinkLayout?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ btnText, linktTo, showLinkLayout = true }) => {
    return (
        <div className="relative w-fit flex flex-col items-center justify-center cursor-pointer ">
            
            {showLinkLayout && <div className="absolute inset-0 bg-purple-500 z-10 link-layout"></div>}
            <Link className="z-1 p-4 sm:text-md lg:text-5xl font-bold cursor-pointer nav-link"  href={linktTo}>{btnText}</Link>
        </div>

    );
}

export default NavLink;
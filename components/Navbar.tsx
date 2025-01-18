import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex flex-row items-center gap-4 p-4 h-[100px] justify-center">
            <div className="flex flex-row items-center gap-2">
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-3" href="/">Home</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-3" href="/biohacks">Biohacks</Link>
            </div>
            <h1 className="text-3xl text-yellow-100">hacks</h1>

            <div className="flex flex-row items-center gap-2">
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-3" href="/community">Community</Link>
                <Link className="hover:bg-yellow-100 transition duration-200 ease-in hover:text-black p-3" href="/match">Match</Link>
            </div>
        </div>);
}

export default Navbar;
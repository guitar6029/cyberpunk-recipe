import { alkeron } from "../public/fonts/fonts";
import NavLink from "./Buttons/Nav/NavLink";

const Navbar = () => {
  return (
    <div
      className={`flex flex-row items-center gap-4 p-4 h-[100px] bg-black ${alkeron.className} fixed top-0 left-0 w-full z-50`}
    >
      <div className="flex flex-row items-center gap-2">
        <NavLink linktTo="/" btnText="Home" showLinkLayout={false} />
        <NavLink
          linktTo="/biohacks"
          btnText="Biohacks"
          showLinkLayout={false}
        />
        <NavLink linktTo="/about" btnText="About" showLinkLayout={false} />
      </div>
    </div>
  );
};

export default Navbar;

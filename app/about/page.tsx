import Image from "next/image";

import TemplateCorners from "@/components/Template/TemplateCorners";
const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <TemplateCorners cornerColor="bg-green-500">
        <div className="relative flex flex-col gap-4 p-4 items-center justify-center">
          <Image
            quality={100}
            className="w-[50rem] rounded-lg absolute top-0 left-20 opacity-20 z-[-1]"
            width={500}
            height={500}
            src={"/biohacks/gadgets/gadget1.png"}
            alt="cyberpunk"
          />
          <p className="sm:text-xl sm:w-[100vw] lg:w-[40vw] leading-relaxed lg:text-2xl text-white bg-neutral-800 p-4 rounded-lg border-yellow-500 border-2">
            Welcome to &quot;hacks&quot;, a groundbreaking project set in a
            cyberpunk universe where users can unleash their creativity to build
            custom hacks, a groundbreaking project set in a cyberpunk universe
            where users can unleash their creativity to build custom hacks or
            discover free recipes to construct advanced gadgets. Inspired by the
            vibrant neon-lit streets of Cyberpunk 2077 and the rain-soaked,
            dystopian world of Blade Runner, Neon Nexus promises an immersive
            experience where technology and imagination merge seamlessly.
          </p>
        </div>
      </TemplateCorners>
    </div>
  );
};

export default Page;

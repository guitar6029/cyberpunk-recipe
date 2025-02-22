

import TemplateCorners from "@/components/Template/TemplateCorners";
const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <TemplateCorners cornerColor="bg-transparent">
        <div className="relative flex flex-col gap-4 p-4">
          <p className="sm:text-xl sm:w-[100vw] lg:w-[40vw] leading-relaxed lg:text-4xl text-gray-300  p-4 rounded-lg border-yellow-500 border-2">
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

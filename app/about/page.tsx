import TemplateCorners from "@/components/Template/TemplateCorners";
const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 mt-14">
      <TemplateCorners showCorners={false}>
        <div className="relative flex flex-col gap-4 animate-slide-in-left">
          <p className="sm:text-xl leading-relaxed lg:text-4xl text-gray-300 p-4 rounded-lg text-pretty ">
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

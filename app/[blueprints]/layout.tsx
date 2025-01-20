import TemplateCorners from "@/components/Template/TemplateCorners";
const Layout : React.FC = () => {
    return ( 
        <div className="min-h-screen flex flex-col p-4">
            <TemplateCorners cornerColor="bg-green-500">
                <div className="flex flex-col gap-4 p-4">
                    <p className="text-2xl">Welcome to "hacks", a groundbreaking project set in a cyberpunk universe where users can unleash their creativity to build custom hacks or discover free recipes to construct advanced gadgets. Inspired by the vibrant neon-lit streets of Cyberpunk 2077 and the rain-soaked, dystopian world of Blade Runner, Neon Nexus promises an immersive experience where technology and imagination merge seamlessly.</p>
                </div>
            </TemplateCorners>
        </div>
     );
}
 
export default Layout ;
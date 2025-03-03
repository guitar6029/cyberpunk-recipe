import { alkeron } from "@/public/fonts/fonts";
import HeroImage from "@/app/assets/img/hero.png";
import Image from "next/image";
const Hero: React.FC = () => {
  const heroText = ["Recode.", "Recharge.", "Redefine."];

  return (
    <div className="relative flex flex-col justify-center min-h-screen mt-[5rem]">
      <div className="absolute top-10 left-0 w-[100%] h-[0.15rem] bg-yellow-400 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-[.15rem] h-[100%] bg-yellow-400 z-[-1] "></div>

      <div className="absolute top-0 right-0 z-[-1] bg-yellow-500 w-[5rem] h-[120rem]"></div>
      <div className="absolute top-0 left-0 z-[-1] bg-yellow-500 w-[5rem] h-[120rem]"></div>

      <div className="absolute top-[0rem] left-0 z-[-1] bg-yellow-500 w-[100%] h-[20rem]"></div>

      <Image
        src={HeroImage}
        alt="Hero"
        width={800}
        className="absolute hidden md:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      />

      <div className="p-5 w-[fit] flex flex-col  justify-center">
        {heroText.map((text: string, index: number) => {
          return (
            <div
              key={index}
              style={{ animationDelay: `${index * 1.5}s` }}
              className={`${alkeron.className} text-[3rem] sm:text-[4rem] lg:text-[10rem] bg-grow-animation`}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

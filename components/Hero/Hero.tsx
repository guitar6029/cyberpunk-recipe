import { alkeron } from "@/public/fonts/fonts";
const Hero: React.FC = () => {
  const heroText = ["Recode.", "Recharge.", "Redefine."];

  return (
    <div className="relative flex flex-col justify-center min-h-[50vh] md:min-h-screen mt-[5rem]">
      <div className="p-5 w-[fit] flex flex-col justify-between md:justify-center ">
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

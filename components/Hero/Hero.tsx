import { alkeron } from "@/public/fonts/fonts";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen">
      <div className="absolute top-0 left-0 w-[100%] h-[0.15rem] bg-yellow-500 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-[1rem] h-[100%] bg-yellow-500 z-[-1] "></div>

      <div className="absolute bottom-0 right-0 w-[20rem] h-[25%] bg-yellow-500 z-[-1] hidden border-2 border-white lg:flex flex-col items-center justify-center">
        <div className="flex flex-row items-baseline gap-1">
          <span className="text-4xl">x</span>
          <h1 className="text-7xl font-bold">01</h1>
        </div>
      </div>

      <div className="p-5 w-[fit] flex flex-col  justify-center">
        <div
          className={`${alkeron.className} text-[3rem] sm:text-[4rem] lg:text-[7rem]`}
        >
          Easy{" "}
        </div>
        <div
          className={`${alkeron.className} text-[3rem] sm:text-[4rem] lg:text-[7rem]`}
        >
          Fast
        </div>
        <div
          className={`${alkeron.className} text-[3rem] sm:text-[4rem] lg:text-[7rem]`}
        >
          Reliable
        </div>
      </div>
    </div>
  );
};

export default Hero;

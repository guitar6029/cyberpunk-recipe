"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import TemplateCorners from "@/components/Template/TemplateCorners";
import { gadgets, TGadget } from "@/dummydata/hacks";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { alkeron } from "@/public/fonts/fonts";

const HackDetails: React.FC = () => {
  const params = useParams();
  const { hack } = params;
  const [gadget, setGadget] = useState<TGadget | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const findGadget = gadgets.find((gadget: TGadget) => gadget.id === hack);

      if (findGadget) {
        setGadget(findGadget);
        setLoading(false);
      } else {
        setGadget(null);
        setLoading(false);
      }
    }, 4500);

    return () => clearTimeout(timeoutId);
  }, [hack]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-row gap-2 items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold">Loading gadget...</h1>
        </div>
      </div>
    );
  }

  return (
    <TemplateCorners minHScreen={true} cornerColor="bg-transparent">
      <Link
        href="/biohacks"
        className="group flex flex-row gap-2 p-4 items-center w-fit cursor-pointer"
      >
        <MoveLeft
          size={60}
          className="group-hover:text-green-500 transition duration-150 ease-in"
        />
        <span className="text-3xl font-bold group-hover:text-green-500 transition duration-150 ease-in cursor-pointer!">
          Go back
        </span>
      </Link>
      <div className="col-span-1 flex flex-col gap-4">
        <div className="relative flex flex-col gap-4 rounded-lg  p-4">
          {/* background div block */}
          <div
            style={{
              zIndex: -1,
              backgroundImage: `url(${gadget?.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="hidden lg:block absolute w-[50%] h-[60vh] rounded-lg bg-yellow-100 opacity-80 top-10 right-40 shadow-lg shadow-black"
          ></div>

          <div>
            <h2
              className={`sm:text-4xl lg:text-7xl font-bold ${alkeron.className}`}
            >
              {gadget?.gadget}
            </h2>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 p-4">
          <h1 className="text-3xl font-bold">Materials Needed</h1>
          <ul className="flex flex-col gap-4 text-gray-for-dark-drop">
            {gadget?.ingredients.map((ingredient: string, index: number) => (
              <li
                className="text-xl flex flex-row items-center gap-2"
                key={index}
              >
                <span className="font-bold flex flex-row items-center justify-center text-2xl p-2 bg-yellow-200 rounded-full w-[5rem] min-w-[5rem] h-[5rem] text-black">
                  {ingredient.split("x ")[0]}X
                </span>
                <span className="text-xl font-bold text-white">
                  {ingredient.split("x ")[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TemplateCorners>
  );
};

export default HackDetails;

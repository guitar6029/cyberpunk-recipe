"use client";
import { cyberpunk } from "@/public/fonts/fonts";
import { useState, useEffect } from "react";
import { Package, Axe, Bot } from "lucide-react";
import Link from "next/link";
import { slides, TSlide } from "@/dummydata/slides";
import Dots from "../Dots/Dots";

/**
 * make a slider , 5 slides
 * with slider indicator at the bottom
 * add an animation
 * @returns
 *
 */

const WhatIsHacks = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // add automatic slide change
  useEffect(() => {
    //set interval for 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return slides[currentSlide] ? (
    <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <Dots direction="top-right" />
      <div className="bg-black h-fit sm:flex-col sm:gap-10 md:flex-col items-center md:gap-2 justify-center sm:p-6 md:p-4 mt-5 ">
        <div className="flex flex-col items-center gap-6">
          <h1 className={`break-words min-h-[4rem] md:text-5xl text-2xl uppercase col-span-1 text-center text-white font-bold ${cyberpunk.className}`}>
            {slides[currentSlide].title}
          </h1>
          <div className=" flex-col flex md:flex-row items-center gap-10">
            <div className="hover:bg-neutral-700 transiiton duration-300 ease-in w-[100vw] md:w-fit p-2 group flex flex-col items-center gap-3">
              <Package
                className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200"
                size={100}
              />
              <span className={`group-hover:scale-105 transition duration-100 ease-in font-extrabold text-black sm:text-xl md:text-2xl rounded-full bg-white w-10 h-10 flex items-center justify-center ${cyberpunk.className}`}>
                1
              </span>
            </div>
            <div className="hover:bg-neutral-700 transiiton duration-300 ease-in w-[100vw] md:w-fit p-2 group flex flex-col items-center gap-3">
              <Axe
                className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200"
                size={100}
              />
              <span className={`group-hover:scale-105 transition duration-100 ease-in font-extrabold text-black sm:text-xl md:text-2xl rounded-full bg-white w-10 h-10 flex items-center justify-center ${cyberpunk.className}`}>
                2
              </span>
            </div>
            <div className="hover:bg-neutral-700 transiiton duration-300 ease-in w-[100vw] md:w-fit p-2 group flex flex-col items-center gap-3">
              <Bot
                className="group-hover:scale-105 transition duration-100 ease-in text-yellow-200"
                size={100}
              />
              <span className={`group-hover:scale-105 transition duration-100 ease-in font-extrabold text-black sm:text-xl md:text-2xl rounded-full bg-white w-10 h-10 flex items-center justify-center ${cyberpunk.className}`}>
                3
              </span>
            </div>
          </div>
          <div className="min-h-[2.5rem] sm:mt-4 sm:mb-4">
            {slides[currentSlide].linkTo ? (
              <Link href={slides[currentSlide].linkTo}>
                <button className="hover:scale-105 transition duration-200 ease-in p-5 rounded-lg bg-yellow-200 text-black sm:text-xl md:text-2xl w-[100vw] md:w-fit">
                  Learn More
                </button>
              </Link>
            ) : null}
          </div>
          <p className="col-span-1 text-2xl text-center text-gray-for-dark-drop min-h-[4rem] p-4">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center p-4 gap-10 sm:mb-10">
        {slides.map((slide: TSlide, index: number) => {
          return (
            <div
              onClick={() => setCurrentSlide(index)}
              className={` ${
                index === currentSlide ? " bg-purple-500 " : " bg-white "
              } rounded-lg w-[1rem] h-[1rem]  cursor-pointer `}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default WhatIsHacks;

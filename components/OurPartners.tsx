"use client";
import { useEffect, useState, useRef } from 'react';
import { partners, PartnerCompany } from "@/dummydata/partners";
import LinkPanel from './LinkPanel/LinkPanel';

const OurPartners = () => {

    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setInView(entry.isIntersecting);
        },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        //clean up
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

        };

    }, [sectionRef]);



    return (
        <div className="relative flex sm:flex-col lg:flex-row items-center justify-around gap-4 p-4 min-h-screen">


            <div className="absolute top-0 left-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                    </div>
                </div>
            </div>



            <div className="absolute bottom-0 left-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                        <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
                    </div>
                </div>
            </div>


            <div className="absolute top-0 left-50 w" style={{zIndex: -1}}></div>





            <div className="relative flex flex-col items-center gap-2">
                <div ref={sectionRef} className={`w-[250px] h-[250px]  rounded-lg transition-all duration-1000 ${inView ? "animate-fadeIn border-4 border-yellow-200 rotate-[45deg]" : "bg-slate-800"}`}></div>
                <div className="shadow-lg shadow-black h-fit w-fit absolute whitespace-nowrap top-1/3 left-1/4 rounded-lg p-4 inset-0 flex items-center justify-center text-5xl text-white font-extrabold z-10 ">
                    <h1>Our Partners</h1>
                </div>
            </div>

            <div className="absolute top-0 left-[3.5rem] w-[5px] h-[25vh] flex flex-col justify-center gap-2">
            </div>
            <div className="flex flex-col justify-center gap-2 sm:mt-10">
                {partners && partners.map((partner: PartnerCompany, index: number) => (
                    <LinkPanel key={index} linkTitle={partner.name} />
                ))}
            </div>
        </div>
    );
}

export default OurPartners;

const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-[35vh] ">

            {/* bottom left corner */}
            <div className="absolute bottom-0 left-0 w-[.175vw] rotate-[45deg] h-[100vh] bg-yellow-200" style={{ transformOrigin: 'bottom left', zIndex: -1 }}></div>
            <div className="absolute bottom-0 left-0 w-[.175vw] rotate-[25deg] h-[100vh] bg-yellow-200" style={{ transformOrigin: 'bottom left', zIndex: -1 }}></div>
            <div className="absolute bottom-0 left-0 w-[.175vw] rotate-[15deg] h-[100vh] bg-yellow-200" style={{ transformOrigin: 'bottom left', zIndex: -1 }}></div>


            {/* bottom right corner */}
            <div className="absolute bottom-0 right-0 w-[.175vw] rotate-[-45deg] h-[100vh] bg-yellow-200" style={{ transformOrigin: 'bottom right', zIndex: -1 }}></div>
            <div className="absolute bottom-0 right-0 w-[.175vw] rotate-[-25deg] h-[40vh] bg-yellow-200" style={{ transformOrigin: 'bottom right', zIndex: -1 }}></div>
            <div className="absolute bottom-0 right-0 w-[.175vw] rotate-[-15deg] h-[20vh] bg-yellow-200" style={{ transformOrigin: 'bottom right', zIndex: -1 }}></div>


            <div className="relative p-5 w-[fit] h-[rem] flex flex-col items-center justify-center">
                
                <div className="absolute inset-0 bg-green-500 z-10 btn-layout"></div>
                {/* <div className="absolute rotate-[195deg] top-0 left-0 w-[1.175vw] h-full bg-green-500" style={{ transformOrigin: 'top left' }}></div> */}
                <h3 className="z-20 sm:text-3xl md:text-6xl lg:text-7xl font-bold " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Hacks</h3>
                <h6 className="z-20 sm:text-xl md:text-xl lg:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Forge Your Future: Unleash the Power Within</h6>
            </div>
        </div>
    );
}

export default Hero;
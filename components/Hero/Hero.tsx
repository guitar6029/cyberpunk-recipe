const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-[25vh] hero-img ">
            <div className="relative p-5 w-[fit]  flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7e50e9] via-[#9b59b6] to-[#2980b9] z-10 btn-layout"></div>
                <h3 className="z-20 sm:text-4xl md:text-6xl lg:text-7xl font-bold " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Hacks</h3>
                <h6 className="z-20 sm:text-2xl md:text-xl lg:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Forge Your Future: Unleash the Power Within</h6>
            </div>
        </div>
    );
}

export default Hero;
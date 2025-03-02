import { alkeron } from "@/public/fonts/fonts";

type BtnProps = {
    btnText: string;
}

const SecondaryBtn: React.FC<BtnProps> = ({ btnText }) => {
    return (
        <div className="relative w-fit flex flex-col items-center justify-center ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2980b9] via-[#9b59b6] to-[#7e50e9] z-10 link-layout"></div>
            <button className={`z-20 transition duration-200 ease-in p-4 text-2xl sm:text-[2.5rem] lg:text-5xl font-bold ${alkeron.className}`}>{btnText}</button> 
        </div>

    );
}

export default SecondaryBtn;
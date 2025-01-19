import { ArrowUpRight, Barcode, Package, Axe, Bot } from 'lucide-react';
import { partners, PartnerCompany } from "@/dummydata/partners";
import LinkPanel from './LinkPanel/LinkPanel';

const OurPartners = () => {
    return (
        <div className="flex sm:flex-col md:flex-row items-center justify-around gap-4 p-4 h-[50vh] bg-black">
            <div className="relative flex flex-col items-center gap-2">
                <div className="w-[400px] h-[200px] bg-slate-800 rounded-lg"></div>
                <div className=" shadow-lg shadow-black h-fit w-fit bg-slate-500 absolute whitespace-nowrap top-12 left-1/4 rounded-lg p-4 inset-0 flex items-center justify-center text-5xl text-white font-extrabold z-10">
                    <h1>Our Partners</h1>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
                {partners && partners.map((partner: PartnerCompany, index: number) => (
                    <LinkPanel key={index} linkTitle={partner.name} />
                ))}
            </div>
        </div>
    );
}

export default OurPartners;

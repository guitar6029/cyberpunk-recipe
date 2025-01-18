import { ArrowUpRight, Barcode, Package, Axe, Bot } from 'lucide-react';
import { partners, PartnerCompany } from "@/dummydata/partners";
import LinkPanel from './LinkPanel/LinkPanel';
const OurPartners = () => {
    return (

        <div className="flex sm:flex-col md:flex-row items-center justify-around gap-4 p-4 h-[50vh] bg-black">
            <div className="flex flex-row items-center gap-2">
                <h1 className="text-5xl text-green-400 font-extrabold">Our Partners </h1>
            </div>
            <div className="flex flex-col justify-center gap-2">
                {partners && partners.map((partner: PartnerCompany, index: number) => {
                    return (
                        <LinkPanel key={index} linkTitle={partner.name} />

                    )
                })}

            </div>
        </div>
    );
}

export default OurPartners;
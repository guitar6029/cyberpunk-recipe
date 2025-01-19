import { TGadget } from "@/dummydata/hacks";
import { Bolt } from 'lucide-react';

type Props = {
    gadget: TGadget
}

const HackCard: React.FC<Props> = ({ gadget }: Props) => {
    const tradeExchangeLevels = {
        low: 1,
        medium: 2,
        high: 3
    };

    const bolts = Array(tradeExchangeLevels[gadget.description.tradeExchangeLevel]).fill(<Bolt className="text-yellow-200" />);

    return ( 
        <div className="bg-slate-800 p-4 rounded-lg shadow-md shadow-slate-500 grid grid-cols-3 gap-3 ">
            <h1 className="col-span-1 font-bold">{gadget.gadget}</h1>
            <p className="truncate col-span-1">{gadget.shortDescription}</p>
            <div className="flex flex-row items-center gap-3 col-span-1">
                {/* <span className="font-bold">Trade Level </span> */}
                {bolts}
            </div>
        </div>
    );
}

export default HackCard;

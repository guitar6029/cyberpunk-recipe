"use client";
import {useParams} from 'next/navigation'
import {useState, useEffect} from 'react'
import CardTemplate from "@/components/Card/CardTemplate";
import TemplateCorners from "@/components/Template/TemplateCorners";
import { gadgets, TGadget } from "@/dummydata/hacks";

const HackDetails: React.FC = () => {

    const params = useParams();
    const { hack } = params;
    console.log("params", params);

    const [gadget, setGadget] = useState<TGadget | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("params.id", params.id);
        const findGadget = gadgets.find((gadget: TGadget) => gadget.id === hack);
        if (findGadget) {
            setGadget(findGadget);
            setLoading(false);
        }
        console.log("findGadget", findGadget);
    }, [hack]);
    
    
    if (loading) {
        return (
            <TemplateCorners cornerColor="bg-red-200">
                <div>Loading ...</div>
            </TemplateCorners>
        )    
    }
       

    return ( 
    <TemplateCorners cornerColor="bg-yellow-200">
        <div>hello</div>
    </TemplateCorners>  
    
);
}
 
export default HackDetails;
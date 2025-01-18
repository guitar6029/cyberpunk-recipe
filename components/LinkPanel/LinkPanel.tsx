import { ArrowUpRight } from "lucide-react";


type LinkPanelProps = {
    linkTitle: string;
}

const LinkPanel: React.FC<LinkPanelProps> = ({ linkTitle }: LinkPanelProps) => {
    return (
        <div className="cursor-pointer group grid grid-cols-4 items-center justify-between gap-4 rounded-lg p-4 hover:bg-slate-800">
            <h1 className="font-bold col-span-3 group-hover:text-yellow-200">{linkTitle}</h1>
            <div className="flex justify-end col-span-1">
                <ArrowUpRight size={20} className="group-hover:scale-110 group-hover:text-yellow-200" />
            </div>
        </div>
    );
}

export default LinkPanel;
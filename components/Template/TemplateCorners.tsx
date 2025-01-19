import type { ReactNode } from 'react';

const TemplateCorners: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col p-4">
            {/* top left corner */}
            <div className="absolute top-0 left-0 bg-white w-[10px] h-[50px]"></div>
            <div className="absolute -top-5 left-5 rotate-90 bg-white w-[10px] h-[50px]"></div>
            
            {/* top right corner */}
            <div className="absolute top-0 right-0 bg-white w-[10px] h-[50px]"></div>
            <div className="absolute -top-5 right-5 rotate-90 bg-white w-[10px] h-[50px]"></div>
            
            {/* bottom left corner */}
            <div className="absolute bottom-0 left-0 bg-white w-[10px] h-[50px]"></div>
            <div className="absolute -bottom-5 left-5 rotate-90 bg-white w-[10px] h-[50px]"></div>
            
            {/* bottom right corner */}
            <div className="absolute bottom-0 right-0 bg-white w-[10px] h-[50px]"></div>
            <div className="absolute -bottom-5 right-5 rotate-90 bg-white w-[10px] h-[50px]"></div>

            {children}
        </div>
    );
}

export default TemplateCorners;

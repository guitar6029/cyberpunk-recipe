
type CardTemplateProps = {
    children: React.ReactNode
    classString: string
};

const CardTemplate: React.FC<CardTemplateProps> = ({ children, classString }) => {
    return (
        <div className={`${classString}`}>
            {/* top left line corner */}
            <div className="absolute top-0 left-0 w-[.15vw] h-[15vh] bg-yellow-200"></div>

            {/* bottom right line corner */}
            <div className="absolute bottom-0 right-0 w-[.175vw] h-full bg-yellow-200"></div>

            {/* bottom dot next to the right line */}
            <div className="absolute bottom-2 right-[.3vw] w-2 h-2 rounded-full bg-yellow-200"></div>

            {/* top right line corner */}
            <div className="absolute bottom-5 right-2 w-[.15vw] h-[25vh] bg-yellow-200"></div>
            {children}
        </div>
    );
}

export default CardTemplate;
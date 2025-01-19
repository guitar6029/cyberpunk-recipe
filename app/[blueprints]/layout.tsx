import TemplateCorners from "@/components/Template/TemplateCorners";
const Layout : React.FC = () => {
    return ( 
        <div className="min-h-screen flex flex-col p-4">
            <TemplateCorners cornerColor="bg-green-500">
                <div>hello</div>
            </TemplateCorners>
        </div>
     );
}
 
export default Layout ;
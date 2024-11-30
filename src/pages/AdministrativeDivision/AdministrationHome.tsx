import { useAuth } from "@/contexts/AuthContext";
import BaseTemplate from "../BaseTemplate";
import Menu from "@/components/ui/menu";


export default function AdministrationHome(){ 

    const auth = useAuth();
    const user = auth.getUser();

    return ( 

        <BaseTemplate>
            <Menu department = 'ADMINISTRATION' />
            <div className="h-full w-full flex justify-center items-center">
                <h1 className="font-thin text-6xl text-white w-3/4 text-center">
                DOCUMENTATION AND ADMINISTRATIVE SERVICES DIVISION
                </h1>
            </div>
            <div className="h-8 w-1/4 flex items-end mx-2">
                <div className="bg-white bg-opacity-70 w-1/2 h-1/8">
            
                </div>
            </div>
        </BaseTemplate>

    )
}
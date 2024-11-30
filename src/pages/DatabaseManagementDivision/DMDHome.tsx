import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import { Link } from "react-router-dom";



export default function DMDHome() { 

    return ( 
        <BaseTemplate> 

        <Menu department = 'DATABASE_MANAGEMENT' />
        
        <div className="h-full w-full flex justify-center items-center">
            <h1 className="w-full text-center flex flex-col justify-center items-center space-y-20">
            <Link
            className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
            to="/dmd/validation"
            viewTransition
            >
            <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                DMD: VALIDATION
            </h1>
            </Link>
            <Link
            className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
            to="/dmd/public_bidding"
            viewTransition
            >
            <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                DMD: PUBLIC BIDDING
            </h1>
            </Link>
            </h1>
        </div>

        
        </BaseTemplate>


    )


}
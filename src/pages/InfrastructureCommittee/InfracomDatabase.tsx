import { Link } from "react-router-dom";
import BaseTemplate from "../BaseTemplate";
import Menu from "@/components/ui/menu";


export default function InfracomDatabase() { 


    return ( 

        <BaseTemplate>
            <Menu department = 'INFRACOM' />
            <div className="h-full w-full flex justify-center items-center">
            <h1 className="w-full text-center flex flex-col justify-center items-center space-y-2">
            <Link
                className="bg-[#274E7E] w-1/2 h-[10vh] flex justify-center items-center text-xl py-1"
                to="/infrastructure/masterlist"
            >
                <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                Infra Masterlist
                </h1>
            </Link>
            <Link
                className="bg-[#274E7E] w-1/2 h-[10vh] flex justify-center items-center text-xl py-1"
                to="/infrastructure/receiving"
            >
                <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                Receiving Consultancy
                </h1>
            </Link>
            <Link
                className="bg-[#274E7E] w-1/2 h-[10vh] flex justify-center items-center text-xl py-1"
                to=""
            >
                <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                Consultancy Database
                </h1>
            </Link>
            <Link
                className="bg-[#274E7E] w-1/2 h-[10vh] flex justify-center items-center text-xl py-1"
                to="/infrastructure/bidding_documents"
            >
                <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                Bidding Documents
                </h1>
            </Link>
            </h1>
            </div>
            <div className="h-8 w-1/4 flex items-end mx-2">
            <div className="bg-white bg-opacity-70 w-1/2 h-1/8">
          
            </div>
            </div>
        </BaseTemplate>

    )

} 
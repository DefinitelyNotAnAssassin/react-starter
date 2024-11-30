import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import { Link } from "react-router-dom";



export default function DMDPublicBiddingMenu(){ 



    return( 
        <BaseTemplate> 
            <Menu department='DATABASE_MANAGEMENT' />
            <div className="h-full w-full flex flex-col items-center justify-center">
                <h1 className="text-white text-3xl my-4">Bidding Database</h1>
                <Link
                    className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                    to="/dmd/public_bidding"
                >
                    <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                        Public Bidding
                    </h1>
                </Link>
                <Link
                    className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                    to="/dmd/amendatory_procurement_plan"
                >
                    <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                        Alternative Mode
                    </h1>
                </Link>
                <Link
                    className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                    to="/dmd/negotiated"
                >
                    <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                        Negotiated
                    </h1>
                </Link>
            </div>
        </BaseTemplate>
    )

}
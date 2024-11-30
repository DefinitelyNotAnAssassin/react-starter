import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import { Link } from "react-router-dom";

export default function DMDValidationMenu() { 
    return ( 
        <BaseTemplate>
            <Menu department='DATABASE_MANAGEMENT' />
            <div className="h-full w-full flex justify-center items-center">
                <div className="h-[80vh] w-full text-center flex flex-col justify-center items-center gap-4 overflow-y-auto">
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/goods_and_services"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Goods and Services
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/infrastructure_and_consultancy"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Infrastructure and Consultancy
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/balance_checker"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Balance Checker
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/ppmp_finding"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            PPMP Findings
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/amendatory_list"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Create Amendatory
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/amendatory_procurement_plan"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Amendatory Procurement Plan
                        </h1>
                    </Link>
                    <Link
                        className="bg-[#274E7E] w-1/2 h-[15vh] flex justify-center items-center"
                        to="/dmd/balance_checker_app_id"
                    >
                        <h1 className="bg-gray-300 h-[70%] w-[90%] flex justify-center items-center font-semibold">
                            Balance Checker (App ID)
                        </h1>
                    </Link>
                </div>
            </div>
        </BaseTemplate>
    )
}

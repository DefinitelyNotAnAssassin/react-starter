import { useAuth } from "@/contexts/AuthContext";
import BaseTemplate from "../BaseTemplate";
import { Link } from "react-router-dom";

const menuItems = [
    { path: "/administration_home", label: "ADMINISTRATIVE DIVISION" },
    { path: "/dmd/home", label: "DATABASE MANAGEMENT DIVISION" },
    { path: "/infrastructure/home", label: "INFRACOM" },
    { path: "/psmd_home", label: "PRICE STANDARDIZATION AND MONITORING DIVISION" },
    { path: "/technical/home", label: "TECHNICAL SERVICES DIVISION" },
];

export default function HomePage() {     

    const auth = useAuth(); 
    const user = auth.getUser(); 
    console.log(user);

    return (
        <BaseTemplate>
            <div className="h-3/4 w-full flex justify-end">
                <div className="h-full w-1/4 mx-8 mt-8 flex flex-col space-y-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="bg-[#274E7E] w-full h-[15%] flex justify-center items-center"
                            viewTransition
                        >
                            <h1 className="bg-gray-300 text-center h-[70%] w-[90%] flex justify-center items-center font-semibold">
                                {item.label}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col h-1/2 w-full justify-end">
                <div className="flex w-1/4 flex-col ml-16 mb-8 bg-gray-50 bg-opacity-50">
                    <h1 className="font-semibold text-2xl">{`${user.lastname}, ${user.firstname}`}</h1>
                    <h1 className="font-semibold text-3xl">Department</h1>
                </div>

                <div className="flex w-1/4 flex-col ml-16 mb-8 bg-gray-50 bg-opacity-50">
                    <h1 className="ml-4 h-auto text-6xl leading-tight" id="date">DATE</h1>
                    <h1 className="ml-4 h-auto text-5xl leading-tight" id="time">Time</h1>
                </div>
            </div>
        </BaseTemplate>
    );
}

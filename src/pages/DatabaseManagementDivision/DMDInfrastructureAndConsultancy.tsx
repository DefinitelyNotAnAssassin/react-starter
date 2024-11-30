import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";

export default function DMDInfrastructureAndConsultancy() {
    const user = {
        last_name: "Doe",
        first_name: "John",
        department: "Database Management"
    };

    return (
        <BaseTemplate overflow>
            <Menu department='DATABASE_MANAGEMENT' />
            <div className = "bg-white">
                <div className="w-full flex justify-between items-center">
                    <div />
                    <h1 className="text-2xl">DMD: INFRASTRUCTURE AND CONSULTANCY</h1>
                    <div className="mx-2">
                        <h1>
                            {user.last_name}, {user.first_name}
                        </h1>
                        <h1>
                            {user.department}
                        </h1>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex">
                        <span className="flex space-x-2">
                            <h1 className="w-36">Project Number:</h1>
                            <h1 className="w-36 bg-blue-700" />
                        </span>
                        <span className="flex ml-12 space-x-2">
                            <h1 className="">Requesting Office/s:</h1>
                            <h1 className="w-36 bg-blue-700" />
                        </span>
                    </div>
                    <div className="flex items-center mx-2">
                        <h1>Tracking Number:</h1>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="h-6"
                            placeholder="Tracking Number"
                        />
                    </div>
                </div>
                <div className="flex justify-between mb-2">
                    <div className="">
                        <span className="flex space-x-2">
                            <h1 className="w-36">ABC:</h1>
                            <h1 className="w-36 bg-blue-700" />
                        </span>
                        <span className="flex space-x-2">
                            <h1 className="w-36">Project Title:</h1>
                            <h1 className="w-36 bg-blue-700" />
                        </span>
                    </div>
                    <div className="flex items-end">
                        <h1 className="bg-blue-400 mx-1 px-1">Amendatory</h1>
                    </div>
                </div>
                <div className="flex h-[40vh] w-full mb-2 space-x-1">
                    <div className="w-full bg-blue-400 h-full"></div>
                </div>
                <div className="flex h-[40vh] w-full space-x-1">
                    <div className="w-[80%] bg-[#FAC7C7] h-full"></div>
                    <div className="w-[20%] h-full flex flex-col justify-end space-y-2">
                        <button className="p-2 bg-blue-400">PROJECT LIST</button>
                        <button className="p-2 bg-blue-400">SAVE RECORD</button>
                        <button className="p-2 bg-blue-400">PRINT VALIDATION</button>
                    </div>
                </div>
                <div className="h-[10vh] w-full" />
            </div>
        </BaseTemplate>
    );
}

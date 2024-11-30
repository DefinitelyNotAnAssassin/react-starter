import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";




export default function DMDAmendatoryProcurementPlan(){ 


    return( 

        <BaseTemplate overflow> 
        
            <Menu department = 'DATABASE_MANAGEMENT' />
            <div className = "bg-white">
                <div className="h-screen w-full">
                    {/*Children Div*/}
                    <div className="h-screen w-full">
                    {/*DMD: AMENDATORY PROCUREMENT PLAN (Content)*/}
                    <div className="h-[94%] w-full flex flex-col items-center">
                        {/*DMD: AMENDATORY PROCUREMENT PLAN (Title)*/}
                        <div className="h-[7%] w-full flex justify-between">
                        {/*TITLE*/}
                        <div className="h-full w-[69%] flex justify-end items-center">
                            <h1 className="text-3xl ">DMD: AMENDATORY PROCUREMENT PLAN</h1>
                        </div>
                        {/*Person Info*/}
                        <div className="h-full w-[20%] flex flex-col bg-[#dfdfdf]">
                            <h1 className="text-base ml-3 font-semibold text-gray-700">
                            <i>FULL NAME</i>
                            </h1>
                            <h1 className="text-base ml-3 font-semibold text-gray-700">
                            <i>DIVISION ASSIGNED</i>
                            </h1>
                        </div>
                        </div>
                        {/*Content Div*/}
                        <div className="h-[90%] w-[98%]">
                        {/*Upper Div Section*/}
                        <div className="h-[18%] w-full flex items-end">
                            {/*Left Div*/}
                            <div className="h-[90%] w-[38%] flex flex-col text-base font-semibold items-end">
                            {/*Tracking Number Div*/}
                            <div className="h-[30%] w-full">
                                <form className="h-full flex space-x-10 " action="" id="form1">
                                <label className="w-[27.6%]" htmlFor="">
                                    Tracking Number:{" "}
                                </label>
                                <input
                                    className="h-full w-[45%] indent-1 bg-[#3b71b4]"
                                    type="text"
                                    id=""
                                    name=""
                                />
                                </form>
                            </div>
                            {/*Requesting Office Div*/}
                            <div className="h-[30%] w-full flex space-x-8 ">
                                <label className="w-[29%]" htmlFor="">
                                Requesting Office:
                                </label>
                                <input
                                className="h-full w-[45%] indent-1 bg-[#274e7e]"
                                type="text"
                                id=""
                                name=""
                                form="form1"
                                />
                            </div>
                            {/*Requesting Office (B) Div*/}
                            <div className="h-[30%] w-full flex space-x-10">
                                <label htmlFor="">Requesting Office (B):</label>
                                <input
                                className="h-full w-[45%] indent-1 bg-[#3b71b4]"
                                type="text"
                                id=""
                                name=""
                                form="form1"
                                />
                            </div>
                            </div>
                            {/*Middle Div*/}
                            <div className="h-full w-[42%] flex justify-end items-end  text-base font-semibold">
                            <div className="h-[80%] w-[80%] flex flex-col justify-center items-end">
                                <div className="h-[30%] w-[90%] flex space-x-8 ">
                                <label className="w-[29.7%]" htmlFor="">
                                    Total Amount (A):
                                </label>
                                <input
                                    className="h-full w-[45%] indent-1 bg-[#274e7e]"
                                    type="text"
                                    id=""
                                    name=""
                                    form="form1"
                                />
                                </div>
                                <div className="h-[30%] w-[90%] flex space-x-10">
                                <label htmlFor="">Total Amount (B):</label>
                                <input
                                    className="h-full w-[45%] indent-1 bg-[#3b71b4]"
                                    type="text"
                                    id=""
                                    name=""
                                    form="form1"
                                />
                                </div>
                            </div>
                            </div>
                            {/*Right Div*/}
                            <div className="h-full w-[20%] flex justify-end items-start">
                            <div className="h-[60%] w-3/4">
                                <div className="h-full w-full font-semibold">
                                <label htmlFor="">Tracking Number:</label>
                                <input
                                    className="w-full indent-1 bg-[#3b71b4]"
                                    type="text"
                                    id=""
                                    name=""
                                    form="form1"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*Middle Div*/}
                        <div className="h-[41%] w-full flex">
                            <div className="h-full w-[85%] bg-[#94b9e8] flex flex-col items-center">
                            <div className="h-[12%] w-[99%] flex justify-center items-center text-base font-bold">
                                <h1>ANNUAL PROCUREMENT PLAN</h1>
                            </div>
                            <div className="h-[20%] w-[99%] flex justify-center items-center space-x-4 text-xs font-semibold text-center">
                                <div className="h-full w-[10%] flex items-center justify-center">
                                <h1>
                                    APPIDNo <br />
                                    O-code
                                </h1>
                                </div>
                                <div className="h-full w-[13%] flex items-center justify-center">
                                <h1>
                                    Account Code <br />
                                    Program
                                </h1>
                                </div>
                                <div className="h-full w-[20%] flex items-center justify-center">
                                <h1>Item Name</h1>
                                </div>
                                <div className="h-full w-[14%] flex items-center justify-center">
                                <h1>Running Qty</h1>
                                </div>
                                <div className="h-full w-[14%] flex items-center justify-center">
                                <h1>
                                    Unit of Issue <br />
                                    Unit of Cost
                                </h1>
                                </div>
                                <div className="h-full w-[28%] flex items-center justify-center text-teal-300">
                                <h1>
                                    Allocated Budget (Project) <br />
                                    Running Balance
                                </h1>
                                </div>
                                <div className="h-full w-[20%] flex items-center justify-center text-red-500">
                                <h1>
                                    Awarded Budget (PO) <br />
                                    Running Balance
                                </h1>
                                </div>
                                <div className="h-full w-[13%] flex items-center justify-center">
                                <h1>
                                    Mode <br />
                                    Fund Source{" "}
                                </h1>
                                </div>
                                <div className="h-full w-[13%] flex items-center justify-center">
                                <h1>
                                    Project Numbers <br /> Used
                                </h1>
                                </div>
                                <div className="h-full w-[13%] flex items-center justify-center">
                                <h1>
                                    Conso Numbers <br />
                                    Used
                                </h1>
                                </div>
                            </div>
                            {/*Div of Divs*/}
                            <div className="h-[20%] w-[99%] flex justify-center items-center space-x-2 text-xs font-semibold text-center">
                                <div className="h-full w-[10%] flex flex-col items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[13%] flex flex-col flex items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[20%] border border-black flex items-center justify-center bg-[#ffffff]"></div>
                                <div className="h-full w-[14%] flex">
                                <div className="h-1/2 w-full border border-gray-500 bg-[#ffffff]"></div>
                                </div>
                                <div className="h-full w-[14%] flex flex-col flex items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[28%] flex flex-col flex items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[20%] flex flex-col flex items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[13%] flex flex-col flex items-center justify-center bg-[#ffffff]">
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                <div className="h-1/2 w-full border border-gray-500"></div>
                                </div>
                                <div className="h-full w-[13%] border border-black flex items-center justify-center bg-[#ffffff]"></div>
                                <div className="h-full w-[13%] border border-black flex items-center justify-center bg-[#ffffff]"></div>
                            </div>
                            </div>
                            {/*Leftest Div*/}
                            <div className="h-full w-[15%] flex items-end justify-end">
                            <div className="h-[70%] w-[90%] flex flex-col text-center font-semibold space-y-2">
                                <div className="h-[40%] flex justify-center items-center w-full bg-[#94b9e8]">
                                <h1>AMENDATORY</h1>
                                </div>
                                <div className="h-[40%] flex justify-center items-center w-full bg-[#94b9e8]">
                                <h1>PRINT</h1>
                                </div>
                                <div className="h-[40%] flex justify-center items-center w-full bg-[#94b9e8]">
                                <h1>USAGE</h1>
                                </div>
                                <div className="h-[40%] flex justify-center items-center w-full bg-[#94b9e8]">
                                <h1>SAVE RECORD</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*Lower Div*/}
                        <div className="h-[40%] w-full flex flex-col mt-3 bg-[#bae2c5]">
                            <div className="h-[12%] w-full text-lg font-semibold">
                            <h1 className="flex justify-center items-center">
                                AMENDATORY PROCUREMENT PLAN
                            </h1>
                            </div>
                            {/*Titles*/}
                            <div className="h-[25%] w-full flex text-sm text-center">
                            <div className="h-full w-[7%]">
                                <h1>
                                APP No <br />
                                Amend No.
                                </h1>
                            </div>
                            <div className="h-full w-[18%]">
                                <h1>
                                Office Code / Office <br />
                                Office / End User
                                </h1>
                            </div>
                            <div className="h-full w-[20%]">
                                <h1>
                                Account Code / Title <br />
                                Program
                                </h1>
                            </div>
                            <div className="h-full w-[30%]">
                                <h1>Item Name</h1>
                            </div>
                            <div className="h-full w-[8%]">
                                <h1>
                                Unit of Issue <br />
                                Quantity
                                </h1>
                            </div>
                            <div className="h-full w-[12%]">
                                <h1>
                                Unit Cost <br />
                                Amended Amount
                                </h1>
                            </div>
                            <div className="h-full w-[12%] font-semibold">
                                <h1 className="text-sky-600">Running Balance</h1>
                                <h1 className="text-red-600">Running Balance</h1>
                            </div>
                            <div className="h-full w-[12%]">
                                <h1>
                                Mode <br />
                                Funding Source
                                </h1>
                            </div>
                            </div>
                            {/*Div of divs*/}
                            <div className="h-[30%] w-full flex text-sm text-center bg-[#7abc8c]">
                            <div className="h-full w-[7%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[18%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full flex justify-between">
                                    <div className="h-full w-[30%] border border-black bg-[#ffffff]"></div>
                                    <div className="h-full w-[30%] border border-black bg-[#ffffff]"></div>
                                    <div className="h-full w-[30%] border border-black bg-[#ffffff]"></div>
                                </div>
                                <div className="h-2/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[20%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full flex justify-between">
                                    <div className="h-full w-[49%] border border-black bg-[#ffffff]"></div>
                                    <div className="h-full w-[49%] border border-black bg-[#ffffff]"></div>
                                </div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[30%] flex justify-center items-center">
                                <div className="h-[90%] w-[95%] bg-[#ffffff]"></div>
                            </div>
                            <div className="h-full w-[8%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[12%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[12%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            <div className="h-full w-[12%] flex flex-col justify-center items-center">
                                <div className="h-[90%] w-[95%]">
                                <div className="h-1/3 w-full"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                <div className="h-1/3 w-full border border-black bg-[#ffffff]"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        
        </BaseTemplate>

    )

}
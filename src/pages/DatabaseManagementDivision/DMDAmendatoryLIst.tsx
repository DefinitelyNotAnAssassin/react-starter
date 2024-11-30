import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";




export default function DMDAmendatoryList(){ 

    return( 
        <BaseTemplate overflow>
            <Menu department = 'DATABASE_MANAGEMENT' /> 
            <div className = "bg-white">
                {/*Parent Div*/}
                <div className="h-screen w-full">
                    {/*Children Div*/}
                    <div className="h-screen w-full">
               
                    {/*DMD: AMENDATORY LIST (Content)*/}
                    <div className="h-[94%] w-full flex flex-col items-center">
                        {/*DMD: AMENDATORY LIST (Title)*/}
                        <div className="h-[7%] w-full flex justify-between">
                        {/*TITLE*/}
                        <div className="h-full w-[61%] flex justify-end items-center">
                            <h1 className="text-3xl ">DMD: AMENDATORY LIST</h1>
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
                        <div className="h-[80%] w-[75%] flex flex-col items-center border border-black bg-[#274e7e]">
                        {/*1st Div*/}
                        <div className="h-[8%] w-[98%] flex justify-end items-end mt-2">
                            <div className="h-full w-1/3 flex justify-end items-end">
                            <div className="h-full w-1/2 text-center text-slate-50">
                                <h1>
                                Ammendatory <br />
                                ID Number
                                </h1>
                            </div>
                            <div className="h-full w-1/2 ">
                                <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                                />
                            </div>
                            </div>
                        </div>
                        {/*2nd Div*/}
                        <div className="h-[5%] w-[98%] flex justify-between mt-1">
                            <div className="h-full w-[23%] text-slate-50">
                            <h1>Requesting Office (Part A)</h1>
                            </div>
                            <div className="h-full w-[23%]">
                            <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                            />
                            </div>
                            <div className="h-full w-[23%]">
                            <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                            />
                            </div>
                            <div className="h-full w-[23%]">
                            <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                            />
                            </div>
                        </div>
                        {/*3rd Div*/}
                        <div className="h-[8%] w-[98%] flex justify-between mt-0.5 border border-black ">
                            <input className="h-full w-full" type="text" />
                        </div>
                        {/*4th Div*/}
                        <div className="h-[5%] w-[98%] flex justify-end items-end mt-0.5">
                            <div className="h-full w-[60%] flex justify-end items-end">
                            <div className="h-full w-1/4 text-center text-slate-50 mr-1">
                                <h1>Total Amount (Part A)</h1>
                            </div>
                            <div className="h-full w-1/2 ">
                                <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                                />
                            </div>
                            </div>
                        </div>
                        {/*5th Div*/}
                        <div className="h-[5%] w-[98%] flex justify-between mt-0.5">
                            <div className="h-full w-[23%] text-slate-50">
                            <h1>Requesting Office (Part B)</h1>
                            </div>
                            <div className="h-full w-[23%]">
                            <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                            />
                            </div>
                        </div>
                        {/*6th Div*/}
                        <div className="h-[8%] w-[98%] flex justify-between mt-0.5 border border-black ">
                            <input className="h-full w-full" type="text" />
                        </div>
                        {/*7th Div*/}
                        <div className="h-[5%] w-[98%] flex justify-end items-end mt-0.5">
                            <div className="h-full w-[60%] flex justify-end items-end">
                            <div className="h-full w-1/4 text-center text-slate-50 mr-1">
                                <h1>Total Amount (Part B)</h1>
                            </div>
                            <div className="h-full w-1/2 ">
                                <input
                                className="h-full w-full border border-gray-600"
                                type="text"
                                />
                            </div>
                            </div>
                        </div>
                        {/*8th Div*/}
                        <div className="h-[5%] w-[98%] flex justify-between mt-0.5">
                            <div className="h-full w-[23%] text-slate-50">
                            <h1>Particulars / Item Description</h1>
                            </div>
                        </div>
                        {/*9th Div*/}
                        <div className="h-[8%] w-[98%] flex justify-between mt-0.5 border border-black ">
                            <input className="h-full w-full" type="text" />
                        </div>
                        {/*10th Div*/}
                        <div className="h-[5%] w-[98%] flex justify-between mt-0.5">
                            <div className="h-full w-[23%] text-slate-50">
                            <h1>Reason for Ammending</h1>
                            </div>
                        </div>
                        {/*11th Div*/}
                        <div className="h-[8%] w-[98%] flex justify-between mt-0.5 border border-black ">
                            <input className="h-full w-full" type="text" />
                        </div>
                        {/*12th Div*/}
                        <div className="h-[22%] w-[98%] flex flex-col space-y-1 border border-black mt-1">
                            <div className="h-[23%] w-[65%] flex justify-between">
                            <h1 className="h-full w-[20%] flex text-slate-50">Validator</h1>
                            <input
                                className="h-full w-[60%] border border-gray-600"
                                type="text"
                            />
                            </div>
                            <div className="h-[23%] w-[65%] flex justify-between">
                            <h1 className="h-full w-[25%] flex text-slate-50 ">
                                Date (Advance Copy)
                            </h1>
                            <input
                                className="h-full w-[60%] border border-gray-600"
                                type="text"
                            />
                            </div>
                            <div className="h-[23%] w-[65%] flex justify-between">
                            <h1 className="h-full w-[20%] flex text-slate-50">
                                Date (Signed)
                            </h1>
                            <input
                                className="h-full w-[60%] border border-gray-600"
                                type="text"
                            />
                            </div>
                            <div className="h-[23%] w-[65%] flex justify-between">
                            <h1 className="h-full w-[20%] flex text-slate-50">Status</h1>
                            <input
                                className="h-full w-[60%] border border-gray-600"
                                type="text"
                            />
                            </div>
                        </div>
                        </div>
                        {/*Button Divs*/}
                        <div className="h-[10%] w-[75%] flex justify-center items-center text-slate-50 text-xl font-semibold space-x-8 ">
                        <button className="h-[60%] w-[15%] border border-black bg-[#274e7e]">
                            SAVE RECORD
                        </button>
                        <button className="h-[60%] w-[15%] border border-black bg-[#274e7e]">
                            CANCEL RECORD
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </BaseTemplate>
    )
}
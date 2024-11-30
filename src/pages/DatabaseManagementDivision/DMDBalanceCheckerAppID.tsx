import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";




export default function DMDBalanceCheckerAppID(){ 


    return( 

        <BaseTemplate overflow> 
            <Menu department = 'DATABASE_MANAGEMENT' />
            <div className = "bg-white">
               
                {/*Parent Div*/}
                <div className="h-screen w-full">
                    {/*Children Div*/}
                    <div className="h-screen w-full">
                   
                    {/*DMD: BALANCE CHECKER (APP ID) (Content)*/}
                    <div className="h-[94%] w-full flex flex-col items-center">
                        {/*DMD: BALANCE CHECKER (APP ID) (Title)*/}
                        <div className="h-[7%] w-full flex justify-between">
                        {/*TITLE*/}
                        <div className="h-full w-[65%] flex justify-end items-center">
                            <h1 className="text-3xl">DMD: BALANCE CHECKER (APP ID)</h1>
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
                        <div className="h-[93%] w-[98%] flex flex-col">
                        {/*Container for Left and Right Divs*/}
                        <div className="h-[85%] w-full flex">
                            {/*Left Div Section*/}
                            <div className="h-full w-[65%] flex flex-col items-center">
                            {/*Search office div*/}
                            <div className="h-[58%] w-full flex flex-col items-center border border-black bg-[#94b9e8]">
                                {/*First Div*/}
                                <div className="h-[10%] w-full flex mt-2">
                                <div className="h-full w-[70%] flex">
                                    <h1 className="h-full w-[30%] text-base ml-1">PROGRAM:</h1>
                                    <input
                                    className="h-[90%] w-[50%] border border-gray-700 mt-0.5 mr-2"
                                    type="text"
                                    />
                                    <input
                                    className="h-[90%] w-[15%] border border-gray-700 mt-0.5 mr-1"
                                    type="text"
                                    />
                                </div>
                                <div className="h-full w-[30%] flex items-center justify-end">
                                    <h1 className="h-full w-[30%] text-base">APP ID NO.</h1>
                                    <input
                                    className="h-[90%] w-[40%] border border-gray-700 mt-0.5 mr-1"
                                    type="text"
                                    />
                                </div>
                                </div>
                                {/*Second Div*/}
                                <div className="h-[15%] w-[99%] flex border border-black mt-1">
                                <input className="w-full h-full" type="text" />
                                </div>
                                {/*3rd Div*/}
                                <div className="h-[10%] w-[99%] flex items-center mt-0.5">
                                <h1 className="h-full w-[18%] text-base flex justify-center items-center">
                                    ACCOUNT NAME/CODE:
                                </h1>
                                <input
                                    className="h-[90%] w-[49%] border border-gray-700 mt-0.5 ml-2"
                                    type="text"
                                />
                                </div>
                                {/*4th Div*/}
                                <div className="h-[15%] w-[99%] flex border border-black mt-1">
                                <input className="w-full h-full" type="text" />
                                </div>
                                {/*5th Div*/}
                                <div className="h-[10%] w-[99%] flex items-center justify-between mt-0.5">
                                <h1 className="h-full w-full text-base">ITEM DESCRIPTION:</h1>
                                </div>
                                {/*6th Div*/}
                                <div className="h-[30%] w-[99%] flex border border-black mt-1">
                                <input className="w-full h-full" type="text" />
                                </div>
                            </div>
                            {/*Lower Blue Div Section*/}
                            <div className="h-[40%] w-full flex justify-between border-2 mt-3">
                                {/*Left Blue Div*/}
                                <div className="h-full w-[49%] flex flex-col justify-center items-center">
                                {/*Title Div*/}
                                <div className="h-[10%] w-full flex justify-center items-center bg-[#87aad4]">
                                    <h1 className="text-sm font-semibold">
                                    USAGE FROM PROJECTS
                                    </h1>
                                </div>
                                {/*Sub Titles Div*/}
                                <div className="h-[23%] w-full flex text-sm bg-[#87aad4]">
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>
                                        Tracking <br />
                                        Number
                                    </h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>
                                        Total <br />
                                        Cost
                                    </h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>Username</h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>Date Created</h1>
                                    </div>
                                </div>
                                {/*Div of div input*/}
                                <div className="h-[77%] w-full flex bg-[#94b9e8]">
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[80%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                </div>
                                </div>
                                {/*Right Blue Div*/}
                                <div className="h-full w-[49%] flex flex-col justify-center items-center">
                                {/*Title Div*/}
                                <div className="h-[10%] w-full flex justify-center items-center bg-[#87aad4]">
                                    <h1 className="text-sm font-semibold">
                                    USAGE FROM AMENDATORY
                                    </h1>
                                </div>
                                {/*Sub Titles Div*/}
                                <div className="h-[23%] w-full flex text-sm bg-[#87aad4]">
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>Amendatory</h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>
                                        Ammended <br />
                                        Amount
                                    </h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>Username</h1>
                                    </div>
                                    <div className="h-full w-1/4 flex items-center justify-center text-center">
                                    <h1>Date Modified</h1>
                                    </div>
                                </div>
                                {/*Div of div input*/}
                                <div className="h-[77%] w-full flex bg-[#94b9e8]">
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[80%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                    <div className="h-full w-1/4 flex items-start justify-center">
                                    <input className="h-[15%] w-[90%] mt-4" type="text" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*Right Div Section*/}
                            <div className="h-full w-[35%] flex flex-col justify-center items-center">
                            <div className="h-[48%] w-[93%] flex flex-col">
                                <div className="h-[10%] w-full flex justify-between space-x-6 mt-8">
                                <h1 className="w-[40%] font-semibold">SEARCH APP ID NO.</h1>
                                <input className="border border-black" type="text" />
                                </div>
                                <div className="h-[8%] w-full flex items-end justify-end mt-2">
                                <button className="h-full w-[25%] text-xs bg-[#94b9e8]">
                                    Find Record
                                </button>
                                </div>
                            </div>
                            <div className="h-[50%] w-[93%] flex flex-col items-center font-semibold bg-[#94b9e8]">
                                {/*DivS by 3s*/}
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-2">
                                <h1 className="h-full w-[40%]">TOTAL BUDGET (ORIGIN)</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]">AMMENDED AMOUNT</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]" style={{ fontSize: 11 }}>
                                    CURRENT AMOUNT (-AMMENDED)
                                </h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <br />
                                {/*Divs by 2s*/}
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]">ALLOCATED AMOUNT</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]">RUNNING BALANCE (PROJECT)</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <br />
                                {/*Divs by 2s*/}
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]">AWARDED AMOUNT</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                                <div className="h-[10%] w-[95%] flex items-center justify-between text-xs mt-0.5">
                                <h1 className="h-full w-[40%]">RUNNING BALANCE (PO)</h1>
                                <input
                                    className="h-[90%] w-[50%] border border-gray-700"
                                    type="text"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*Footer Div*/}
                        <div className="h-[15%] w-full flex">
                            <div className="h-full w-1/3 flex flex-col items-end">
                            <div className="h-[30%] w-[95%] flex space-x-16 mt-1">
                                <h1 className="text-sm">TOTAL</h1>
                                <input className="border border-black" type="text" />
                            </div>
                            <div className="h-[18%] w-[85%] flex space-x-16 mt-2">
                                <h1 className="text-xs">Calculated Running Balance</h1>
                                <input className="border border-black" type="text" />
                            </div>
                            </div>
                            <div className="h-full w-1/3 flex flex-col items-end">
                            <div className="h-[30%] w-[95%] flex space-x-16 mt-1">
                                <h1 className="text-sm">TOTAL</h1>
                                <input className="border border-black" type="text" />
                            </div>
                            <div className="h-[18%] w-[85%] flex space-x-16 mt-2">
                                <h1 className="text-xs">Calculated Running Balance</h1>
                                <input className="border border-black" type="text" />
                            </div>
                            </div>
                            {/*Save Record Button*/}
                            <div className="h-full w-1/3 flex justify-end items-center font-semibold">
                            <button className="h-[25%] w-[30%] text-sm bg-[#94b9e8] mr-4 mt-6">
                                Save Record
                            </button>
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
import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";




export default function DMDPPMDFinding(){ 


    return( 
        <BaseTemplate>
           <Menu department = 'DATABASE_MANAGEMENT' />
            <div className="h-full w-full flex flex-col items-center">
                <h1 className="text-3xl text-center text-white my-4">DMD: PPMD Findings</h1>
                <div className="h-full w-full bg-[#94B9E8]">
                    <div className="w-full h-12 text-black text-center flex justify-around mt-8">
                    <h1 className="w-full">Project Number</h1>
                    <h1 className="w-full">Tracking Number</h1>
                    <h1 className="w-full">Date Received by Validator</h1>
                    <h1 className="w-full">Date Released to PSMD</h1>
                    <h1 className="w-full">Status</h1>
                    </div>
                    <div className="w-full h-20 text-black text-center flex justify-around mt-2">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    </div>
                </div>
            </div>

        </BaseTemplate>
    )   


}
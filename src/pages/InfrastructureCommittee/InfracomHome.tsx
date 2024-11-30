import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";



export default function InfracomHome () { 


    return ( 
        <BaseTemplate>
            <Menu department = 'INFRACOM' />
            <div className="h-full w-full flex justify-center items-center">
            <h1 className="font-thin text-6xl text-white w-3/4 text-center">
                INFRASTRUCTURE COMMITTEE
            </h1>
            </div>
            <div className="h-8 w-1/4 flex items-end mx-2">
      
            </div>
      </BaseTemplate>
      
    )
}
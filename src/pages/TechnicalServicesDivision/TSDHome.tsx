import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";



export default function TSDHome () { 

    return ( 
        <BaseTemplate>
            <Menu department = 'TECHNICAL_SERVICES' />
          
                <div className="h-full w-full flex justify-center items-center">
                    <h1 className="font-thin text-6xl text-white w-3/4 text-center">
                    TECHNICAL SERVICES DIVISION
                    </h1>
                </div>
     
      </BaseTemplate>
      
    )
}
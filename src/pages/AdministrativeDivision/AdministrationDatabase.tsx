import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import axios from "@/utils/AuthAxios";
import { BASE_URL } from "@/constants/UrlConstants";
import { useToast } from "@/hooks/use-toast";

export default function AdministrationDatabase(){ 

    const { toast } = useToast(); 


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 


        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());    
        console.log(data);
        axios.post(`${BASE_URL}/administration/receiving`, data)
        .then((res) => {
            
            if (res.data.status == "success"){ 
                toast({title: 'Success', description: "Receiving form saved to database."})
                clearForm();
            }
            else{ 
                toast({title: 'Error', description: res.data.message ? res.data.message : "", variant: 'destructive'})
            }
        })
    }

    const clearForm = () => {    

        const form = document.querySelector('form');
        if (form) {
            (form as HTMLFormElement).reset();
        }
    }



    return ( 
        <BaseTemplate>
            <Menu department = 'ADMINISTRATION' />
            <div className="h-screen flex w-full items-center justify-center border border-black">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#274E7E] w-1/2 p-4 rounded-md text-white"
                >
                    <h2 className="text-lg font-bold mb-4">RECEIVING FORM</h2>
                    <div className="flex mb-2">
                    <div className="mr-4">
   
                        <label htmlFor="pd-routing-number" className="block">
                        PD Routing Number
                        </label>
                        <input
                        type="text"
                        id="pd-routing-number"
                        name="pd_routing_number"
                        className="bg-gray-200 text-black px-2 py-1 rounded"
                        placeholder="PD"
                        />
                    </div>
                    <div>
                        <label htmlFor="year" className="block">
                        YEAR
                        </label>
                        <input
                        type="text"
                        id="year"
                        name="year"
                        className="bg-gray-200 text-black px-2 py-1 rounded"
                        placeholder="YEAR"
                        />
                    </div>
                    <div className="ml-3">
                        <label htmlFor="year" className="block">
                        ID
                        </label>
                        <input
                        type="text"
                        id="pd_id"
                        name="pd_id"
                        className="bg-gray-200 text-black px-2 py-1 rounded"
                        placeholder="ID"
                        />
                    </div>
                    </div>
                    <div className="mb-2">
                    <label htmlFor="received-by" className="block">
                        Received by
                    </label>
                    <input
                        type="text"
                        id="received-by"
                        name="received_by"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                        <label htmlFor="sender" className="block">
                        Sender
                        </label>
                        <input
                        type="text"
                        id="sender"
                        name="sender"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="office-code" className="block">
                        Office Code
                        </label>
                        <input
                        type="text"
                        id="office-code"
                        name="office_code"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                        />
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="end-user" className="block">
                        End-user
                        </label>
                        <input
                        type="text"
                        id="end-user"
                        name="end_user"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="document-type" className="block">
                        Document Type
                        </label>
                        <input
                        type="text"
                        id="document-type"
                        name="document_type"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                        />
                    </div>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="program" className="block">
                        Program
                    </label>
                    <input
                        type="text"
                        id="program"
                        name="program"
                        className="bg-gray-200 text-black w-full px-2 py-1 rounded"
                    />
                    </div>
                    <div className="flex justify-end">
                    <button className="bg-white text-blue-800 px-4 py-2 rounded-md mr-2">
                        Submit
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => {clearForm()}}   
                    >
                        Cancel
                    </button>
                    </div>
                </form>
                </div>
        </BaseTemplate>

    )

}
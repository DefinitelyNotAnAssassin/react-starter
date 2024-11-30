import React, { useState, useEffect } from "react";
import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import axios from "@/utils/AuthAxios";
import { useToast } from "@/hooks/use-toast";

export default function InfracomReceiving() {
    const [formData, setFormData] = useState({
        account_code: "",
        project_number: "",
        project_title: "",
        abc: "",
        early_procurement: "",
        office: "",
        location_barangay: "",
        calendar_days: "",
        batch: "",
        mode_of_procurement: "",
    });

    const { toast } = useToast(); 

    const clearForm = (e) => {    
        e.preventDefault()
        setFormData({
            account_code: "",
            project_number: "",
            project_title: "",
            abc: "",
            early_procurement: "",
            office: "",
            location_barangay: "",
            calendar_days: "",
            batch: "",
            mode_of_procurement: "",
        });

        toast({title: 'Success', description: "Form cleared."}) 

    } 


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 

        e.preventDefault(); 

        axios.post("/infrastructure/addInfraReceiving", formData).then( 
            (res) => {
                if (res.data.status == "success") { 
                    clearForm(e);
                    toast({title: 'Success', description: res.data.message})
                }   
                else if (res.data.status == "error") {
                    toast({title: 'Error', description: res.data.message, variant: 'destructive'})
                }   
            }    
        )

    }


    return (
        <BaseTemplate>
            <Menu department="INFRACOM" />
            <div className="flex h-full w-full items-center justify-center">
                <form
                    method="POST"
                    className="flex-col space-y-2 w-1/2 bg-[#274E7E] p-4 rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">ACCOUNT CODE</h1>
                        <input
                            type="text"
                            name="account_code"
                            value={formData.account_code}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full relative">
                        <h1 className="text-2xl mx-3 text-white w-60">PROJECT NUMBER</h1>
                        <input
                            type="text"
                            name="project_number"
                            value={formData.project_number}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                       
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">PROJECT TITLE</h1>
                        <input
                            type="text"
                            name="project_title"
                            value={formData.project_title}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">ABC</h1>
                        <input
                            type="text"
                            name="abc"
                            value={formData.abc}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">EARLY PROCUREMENT</h1>
                        <input
                            type="text"
                            name="early_procurement"
                            value={formData.early_procurement}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">OFFICE</h1>
                        <input
                            type="text"
                            name="office"
                            value={formData.office}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">LOCATION / BARANGAY</h1>
                        <input
                            type="text"
                            name="location_barangay"
                            value={formData.location_barangay}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">CALENDAR DAYS</h1>
                        <input
                            type="text"
                            name="calendar_days"
                            value={formData.calendar_days}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">BATCH:</h1>
                        <input
                            type="text"
                            name="batch"
                            value={formData.batch}
                            onChange={handleInputChange}
                            className="w-full mx-3"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl mx-3 text-white w-60">MODE OF PROCUREMENT</h1>
                        <input
                            type="text"
                            name="mode_of_procurement"
                            value={formData.mode_of_procurement}
                            onChange={handleInputChange}
                            className="w-full mx-3 flex-grow"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="flex w-full justify-center space-x-4 text-black">
                        <button type="submit" className="bg-white p-1 px-2 rounded font-semibold">
                            ADD
                        </button>
                        <button
                            onClick = {(e) => clearForm(e)}
                            className="bg-white rounded p-1 px-2 font-semibold"
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </BaseTemplate>
    );
}
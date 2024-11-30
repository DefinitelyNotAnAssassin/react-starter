import React, { useState } from "react";
import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import axios from "@/utils/AuthAxios";
import { useToast } from "@/hooks/use-toast";   


export default function TSDDatabase() {

    const { toast } = useToast(); 

    const [formData, setFormData] = useState({
        project_number: "",
        project_title: "",
        office: "",
        abc: "",
        category: "",
        aoname: "",
        fundyear: "",
        fund_source: "",
        object_of_expenditure: "",
        validator: "",
        canvasser: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post("/tsd/saveForm", formData).then( 
            (res) => {
                if (res.data.status == "success") {
                    toast({title: 'Success', description: res.data.message})
                    clearForm();
                }   
                else if (res.data.status == "error") {
                    toast({title: 'Error', description: res.data.message, variant: 'destructive'})      }
            }    
        )




        console.log(formData);
    };


    const clearForm = () => {
        setFormData({
            project_number: "",
            project_title: "",
            office: "",
            abc: "",
            category: "",
            aoname: "",
            fundyear: "",
            fund_source: "",
            object_of_expenditure: "",
            validator: "",
            canvasser: ""
        }); 

    }

    return (
        <BaseTemplate>
            <Menu department="TECHNICAL_SERVICES" />
            <div className="flex h-full w-full items-center justify-center">
                <form
                    method="POST"
                    className="flex-col space-y-2 w-1/2 bg-[#274E7E] p-4 rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">
                            PROJECT NUMBER
                        </h1>
                        <input
                            type="text"
                            name="project_number"
                            value={formData.project_number}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">
                            PROJECT TITLE
                        </h1>
                        <input
                            type="text"
                            name="project_title"
                            value={formData.project_title}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">OFFICE</h1>
                        <input
                            type="text"
                            name="office"
                            value={formData.office}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">ABC</h1>
                        <input
                            type="text"
                            name="abc"
                            value={formData.abc}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">CATEGORY</h1>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">AONAME</h1>
                        <input
                            type="text"
                            name="aoname"
                            value={formData.aoname}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">FUNDYEAR</h1>
                        <input
                            type="text"
                            name="fundyear"
                            value={formData.fundyear}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">FUND SOURCE</h1>
                        <input
                            type="text"
                            name="fund_source"
                            value={formData.fund_source}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">
                            OBJECT OF EXPENDITURE
                        </h1>
                        <input
                            type="text"
                            name="object_of_expenditure"
                            value={formData.object_of_expenditure}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">VALIDATOR</h1>
                        <input
                            type="text"
                            name="validator"
                            value={formData.validator}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full">
                        <h1 className="text-2xl text-nowrap mx-3 text-white w-80">CANVASSER</h1>
                        <input
                            type="text"
                            name="canvasser"
                            value={formData.canvasser}
                            onChange={handleChange}
                            className="w-full mx-3"
                        />
                    </div>
                    <div className="flex w-full justify-center space-x-4 text-black">
                        <button
                            type="submit"
                            className="bg-blue-600 p-1 px-2 text-white rounded-lg font-semibold"
                        >
                            SAVE
                        </button>
                        <button
                            onClick = {() => clearForm()}
                            className="bg-red-500 text-white rounded-lg p-1 px-2 font-semibold"
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </BaseTemplate>
    );
}
import React, { useState } from 'react';
import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import axios from "@/utils/AuthAxios";
import { useToast } from '@/hooks/use-toast';
export default function TSDEditDatabase() {

    const { toast } = useToast();
    const [formData, setFormData] = useState({
        project_number: '',
        project_title: '',
        office: '',
        abc: '',
        category: '',
        aoname: '',
        fundyear: '',
        fund_source: '',
        object_of_expenditure: '',
        validator: '',
        canvasser: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSearch = (e) => { 
        e.preventDefault()

        axios.post("/tsd/searchForm", formData)
            .then((res) => {
                setFormData(res.data.data)
                toast({title: 'Success', description: "Data found."})
            })
            .catch((err) => {
                toast({title: 'Error', description: "No data with matching credentials found.", variant: 'destructive'})
                clearForm(e)
            });


    }


    const clearForm = (e) => {
        e.preventDefault();
        setFormData({
            project_number: '',
            project_title: '',
            office: '',
            abc: '',
            category: '',
            aoname: '',
            fundyear: '',
            fund_source: '',
            object_of_expenditure: '',
            validator: '',
            canvasser: ''
        });
 
 
    }

    return (
        <BaseTemplate>
            <Menu department='TECHNICAL_SERVICES' />
            <div className="flex h-full w-full items-center justify-center">
                <form
                    id="edit_database"
                    className="flex-col space-y-2 w-1/2 bg-[#274E7E] p-4 rounded-md"
                >
                    {Object.keys(formData).map((key) => (
                        <div className="flex w-full" key={key}>
                            <h1 className="text-2xl text-nowrap mx-3 text-white w-80">
                                {key.replace('_', ' ').toUpperCase()}
                            </h1>
                            <input
                                type="text"
                                name={key}
                                className="w-full mx-3"
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <div className="flex w-full justify-center space-x-4 text-black">
                        <button
                            type="submit"
                            id="searchButton"
                            name="search"
                            onClick = {(e) => handleSearch(e)} 
                            className="bg-blue-600 p-1 px-2 text-white rounded rounded-lg font-semibold"
                        >
                            SEARCH
                        </button>
                        <button
                            type="submit"
                            id="updateButton"
                            name="update"
                            className="bg-blue-600 p-1 px-2 text-white rounded-lg font-semibold"
                        >
                            UPDATE
                        </button>
                        <button
                            onClick = {(e) => clearForm(e)}
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

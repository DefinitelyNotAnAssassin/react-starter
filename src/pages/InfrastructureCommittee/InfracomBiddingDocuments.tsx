import React, { useState } from "react";
import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";
import axios from "@/utils/AuthAxios";
import { useToast } from "@/hooks/use-toast";

export default function InfracomBiddingDocuments() {
    const [formData, setFormData] = useState({
        project_number: "",
        project_title: "",
        abc: "",
        project_type: "",
        amount_in_words: "",
        key_personnel: "",
        major_equipment: "",
        abc2: "",
        abc5: "",
        calendar_days: "",
        pre_bid_date: "",
    });

    const [isProjectFound, setIsProjectFound] = useState(false);
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,


            


        }));
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          const res = await axios.post("/infrastructure/searchInfraMasterlist", { project_number: formData.project_number })
          if (res.data.status === "success" && res.data.data !== "") {
            toast({ title: 'Project Number Found', description: res.data.message })
            setFormData(res.data.data)
            setIsProjectFound(true)
          } else if (res.data.status === "success" && res.data.data === "") {
            toast({ title: 'Not Found', description: "No record with matching project number found.", variant: 'destructive' })
            setIsProjectFound(false)
          } else if (res.data.status === "error") {
            toast({ title: 'Error', description: res.data.message, variant: 'destructive' })
            setIsProjectFound(false)
          }
        } catch (error) {
          console.error('Error during search:', error)
          toast({ title: 'Error', description: 'An unexpected error occurred', variant: 'destructive' })
          setIsProjectFound(false)
        }
      }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement form submission functionality here
        console.log("Form data submitted:", formData);
    };

    return (
        <BaseTemplate>
        <Menu department="INFRACOM" />
            <div className="flex flex-col items-center justify-center h-full w-full ">
                <div className="w-full text-white text-center text-3xl mt-4 mb-4">BIDDING DOCUMENTS</div>
                <div className="h-full w-[95%] bg-[#274E7E] p-4">
                    <form className="flex justify-end items-center w-full mb-4" onSubmit={handleSearch}>
                        <h1 className="mr-2 text-white">SEARCH BY PROJECT NUMBER</h1>
                        <input
                            type="text"
                            name="project_number"
                            id="project_number"
                            className="mr-4 p-2 h-8"
                            value={formData.project_number}
                            onChange={handleInputChange}
                            placeholder="Search by Project Number"
                        />
                        <button type="submit" className="bg-white text-black p-2 rounded h-8">
                            Search
                        </button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">PROJECT NO.</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="project_number"
                                id="project_number"
                                value={formData.project_number}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">PROJECT TITLE.</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="project_title"
                                id="project_title"
                                value={formData.project_title}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">ABC</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="abc"
                                id="abc"
                                value={formData.abc}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                            <h1 className="w-64 text-white">PROJECT TYPE</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="project_type"
                                id="project_type"
                                value={formData.project_type}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">AMOUNT IN WORDS:</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="amount_in_words"
                                id="amount_in_words"
                                disabled
                                value={formData.amount_in_words}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">KEY PERSONNEL</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="key_personnel"
                                id="key_personnel"
                                value={formData.key_personnel}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">MAJOR EQUIPMENT</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="major_equipment"
                                id="major_equipment"
                                value={formData.major_equipment}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">ABC 2%:</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="abc2"
                                id="abc2"
                                disabled
                                value={formData.abc2}
                            />
                            <h1 className="w-64 text-white">ABC 5%:</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="abc5"
                                id="abc5"
                                disabled
                                value={formData.abc5}
                            />
                        </div>
                        <div className="mb-4 w-full flex items-center">
                            <h1 className="w-64 text-white">CALENDAR DAYS</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="calendar_days"
                                id="calendar_days"
                                value={formData.calendar_days}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                            <h1 className="w-64 text-white">PRE-BID DATE</h1>
                            <input
                                type="text"
                                className="flex-grow mr-4 p-2 h-8"
                                name="pre_bid_date"
                                id="pre_bid_date"
                                value={formData.pre_bid_date}
                                onChange={handleInputChange}
                                disabled={!isProjectFound}
                            />
                        </div>
                        <div className="mt-12 w-full flex justify-end">
                            <button type="submit" className="p-2 py-2 bg-white font-semibold rounded mr-4 px-3" disabled={!isProjectFound}>
                                UPDATE
                            </button>
                            <a href="/infrastructure-home" className="p-2 py-2 bg-white font-semibold rounded mr-4 px-3">
                                CLOSE
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </BaseTemplate>
    );
}
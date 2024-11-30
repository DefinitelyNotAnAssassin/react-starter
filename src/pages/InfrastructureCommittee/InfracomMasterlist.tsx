'use client'

import React, { useState } from "react"
import Menu from "@/components/ui/menu"
import BaseTemplate from "../BaseTemplate"
import axios from "@/utils/AuthAxios"
import { useToast } from "@/hooks/use-toast"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InfracomMasterlist() {
  const [formData, setFormData] = useState({
    project_number: "",
    project_title: "",
    office: "",
    fund_source: "",
    abc: "",
    bid_amount: "",
    duration: "",
    mode: "",
    contractor: "",
    status: "",
    remarks: "",
    pre_proc_date: "",
    itb_date: "",
    pre_bid_date: "",
    bidding_date: "",
    bid_eval_date: "",
    post_qua: "",
    reso_date: "",
    noa_date: "",
    contract_date: "",
    np_start: "",
    np_end: "",
  })

  const [isProjectFound, setIsProjectFound] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const clearForm = () => {
    setFormData({
      project_number: "",
      project_title: "",
      office: "",
      fund_source: "",
      abc: "",
      bid_amount: "",
      duration: "",
      mode: "",
      contractor: "",
      status: "",
      remarks: "",
      pre_proc_date: "",
      itb_date: "",
      pre_bid_date: "",
      bidding_date: "",
      bid_eval_date: "",
      post_qua: "",
      reso_date: "",
      noa_date: "",
      contract_date: "",
      np_start: "",
      np_end: "",
    })
    setIsProjectFound(false)
  }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post("/infrastructure/updateInfraMasterlist", formData)
      if (res.data.status === "success") {
        toast({ title: 'Success', description: res.data.message })
        clearForm()
      } else if (res.data.status === "error") {
        toast({ title: 'Error', description: res.data.message, variant: 'destructive' })
      }
    } catch (error) {
      console.error('Error during update:', error)
      toast({ title: 'Error', description: 'An unexpected error occurred', variant: 'destructive' })
    }
  }

  return (
    <BaseTemplate overflow>
      <Menu department="INFRACOM" />
      <div className=" w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-semibold text-white   mb-6">
          INFRASTRUCTURE MASTERLIST
        </h1>
        <div className="w-full max-w-6xl bg-[#274E7E] rounded-lg shadow-md p-6">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex items-center space-x-2">
              <Label htmlFor="project_number" className="text-white whitespace-nowrap">SEARCH BY PROJECT NUMBER:</Label>
              <Input
                type="text"
                id="project_number"
                name="project_number"
                value={formData.project_number}
                onChange={handleChange}
                className="flex-grow bg-white"
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                key !== 'project_number' && (
                  <div key={key} className="flex">
                    <Label htmlFor={key} className="mb-1 text-white uppercase w-40">{key.replace(/_/g, ' ')}:</Label>
                    <Input
                      type="text"
                      className = "bg-white"
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      disabled={!isProjectFound}
                    />
                  </div>
                )
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <Button type="button" disabled={!isProjectFound}>
                ADD BIDDER
              </Button>
              <Button type="submit" disabled={!isProjectFound}>
                UPDATE
              </Button>
            
                <Button type="button">
                    <Link to="/infrastructure/home" viewTransition>CLOSE</Link>
                </Button>
          
            </div>
          </form>
        </div>
      </div>
    </BaseTemplate>
  )
}
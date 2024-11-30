import Timer from "@/components/ui/timer";
import BaseTemplate from "../BaseTemplate";
import {useState, useEffect, FormEvent} from 'react'
import Navbar from "@/components/ui/navbar";
import { useAuth } from "@/contexts/AuthContext";

export default function SignIn() { 


    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')     
    const [error, setError] = useState('') 
    const auth = useAuth()

    const handleSubmit = async (e: FormEvent) => { 
        e.preventDefault() 
        const success = await auth.login(username, password)  

        if (!success) { 
            setError('Invalid username or password')    
        } 
        else{ 
            window.location.href = '/'
        }
       
    }



    return ( 

        <BaseTemplate>
        <Navbar />

        <div className="flex w-full h-[75vh] items-center justify-end">
            <form
                onSubmit={handleSubmit}
               className="flex flex-col items-center bg-white bg-opacity-70 h-[70%] w-[20%] mr-16 space-y-2"
            >
                {error && <div className="text-red-500 font-semibold my-4">{error}</div>}
            
                <div className="flex items-center space-x-3 mt-3">
                    <div className="triangle">Triangle</div>
                    <div className="bg-white h-16 w-16 rounded-full" />
                </div>

                <input
                type="text"
                className="px-2 w-[90%] placeholder:text-black py-2 bg-white bg-opacity-40"
                placeholder="Username"
                onChange = {(e) => setUsername(e.target.value)} 
                value = {username}
                autoComplete="off"
                />
                <input
                type="password"
                className="px-2 w-[90%] placeholder:text-black py-2 bg-white bg-opacity-40"
                placeholder="Password"
                onChange = {(e) => setPassword(e.target.value)}
                value = {password}
                />
                <button
                className="bg-blue-500 p-2 px-3 rounded-lg text-white font-semibold"
                type="submit"
                >
                Sign In
                </button>
            </form>
        </div>

        <Timer />


        </BaseTemplate>

    )
}
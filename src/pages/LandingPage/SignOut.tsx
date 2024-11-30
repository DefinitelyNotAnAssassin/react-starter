import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Logout(){ 

    const auth = useAuth(); 
    auth.logout(); 

    return (
        <>
            <Navigate to="/login" />
        </>
    )
    
}
import { Link } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";

export default function NotFound() { 

    return( 
        <BaseTemplate>
            <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-6xl text-white font-semibold">Not Found.</h1>
            <Link to="/" className="text-xl text-white underline font-semibold mt-4 p-2 py-1 rounded" viewTransition>Go back to Home</Link>
            </div>
        </BaseTemplate>
    )
}
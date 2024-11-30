import { createBrowserRouter } from "react-router-dom";
import  NotFound from "./pages/NotFound";
import { LANDING_PAGE_ROUTES, ADMINISTRATION_ROUTES, INFRACOM_ROUTES, TECHNICAL_SERVICES_ROUTES, DMD_ROUTES, DASHBOARD_ROUTES} from "./utils/Routes";





export const router = createBrowserRouter([
    ...LANDING_PAGE_ROUTES,
    ...ADMINISTRATION_ROUTES,
    ...INFRACOM_ROUTES,
    ...TECHNICAL_SERVICES_ROUTES,
    ...DMD_ROUTES,
    ...DASHBOARD_ROUTES,    
    {
        path: "*",
        element: <NotFound />,
    }

])

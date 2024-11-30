import LandingPage from "@/pages/LandingPage/LandingPage"
import SignIn from "@/pages/LandingPage/SignIn"
import ProtectedRoute from "@/pages/ProtectedRoute"
import HomePage from "@/pages/Menu/Home"
import Logout from "@/pages/LandingPage/SignOut"
import AdministrationHome from "@/pages/AdministrativeDivision/AdministrationHome"
import AdministrationDatabase from "@/pages/AdministrativeDivision/AdministrationDatabase"
import InfracomHome from "@/pages/InfrastructureCommittee/InfracomHome"
import InfracomDatabase from "@/pages/InfrastructureCommittee/InfracomDatabase"
import InfracomMasterlist from "@/pages/InfrastructureCommittee/InfracomMasterlist"
import InfracomReceiving from "@/pages/InfrastructureCommittee/InfracomReceiving"
import InfracomBiddingDocuments from "@/pages/InfrastructureCommittee/InfracomBiddingDocuments"
import TSDHome from "@/pages/TechnicalServicesDivision/TSDHome"
import TSDDatabase from "@/pages/TechnicalServicesDivision/TSDDatabase"
import TSDSecretariat from "@/pages/TechnicalServicesDivision/TSDSecretariat"
import TSDEditDatabase from "@/pages/TechnicalServicesDivision/TSDEditDatabase"
import DMDHome from "@/pages/DatabaseManagementDivision/DMDHome"
import DMDValidationMenu from "@/pages/DatabaseManagementDivision/DMDValidationMenu"
import DMDPublicBiddingMenu from "@/pages/DatabaseManagementDivision/DMDPublicBiddingMenu"
import Dashboard from "@/pages/Dashboard/AdminDashboard"
import DMDGoodsAndServices from "@/pages/DatabaseManagementDivision/DMDGoodsAndServices"
import NotFound from "@/pages/NotFound"
import DMDInfrastructureAndConsultancy from "@/pages/DatabaseManagementDivision/DMDInfrastructureAndConsultancy"
import DMDPPMDFinding from "@/pages/DatabaseManagementDivision/DMDPPMDFinding"
import DMDAmendatoryList from "@/pages/DatabaseManagementDivision/DMDAmendatoryLIst"
import DMDAmendatoryProcurementPlan from "@/pages/DatabaseManagementDivision/DMDAmendatoryProcurementPlan"
import DMDBalanceCheckerAppID from "@/pages/DatabaseManagementDivision/DMDBalanceCheckerAppID"

export const LANDING_PAGE_ROUTES = [
  {
    path: "/",
    element: (
      <ProtectedRoute
        authenticated={<HomePage />}
        unauthenticated={<LandingPage />}
      />
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]

export const ADMINISTRATION_ROUTES = [
  {
    path: "/administration_home",
    element: <AdministrationHome />,
  },
  {
    path: "/administration/database",
    element: <AdministrationDatabase />,
  },
]

export const INFRACOM_ROUTES = [
  {
    path: "/infrastructure/home",
    element: <InfracomHome />,
  },
  {
    path: "/infrastructure/database",
    element: <InfracomDatabase />,
  },
  {
    path: "/infrastructure/masterlist",
    element: <InfracomMasterlist />,
  },
  {
    path: "/infrastructure/receiving",
    element: <InfracomReceiving />,
  },
  {
    path: "/infrastructure/bidding_documents",
    element: <InfracomBiddingDocuments />,
  },
]

export const TECHNICAL_SERVICES_ROUTES = [
  {
    path: "/technical/home",
    element: <TSDHome />,
  },
  {
    path: "/technical/database",
    element: <TSDDatabase />,
  },
  {
    path: "/technical/secretariat",
    element: <TSDSecretariat />,
  },
  {
    path: "/technical/edit_database",
    element: <TSDEditDatabase />,
  },
]

export const DMD_ROUTES = [
  {
    path: "/dmd/home",
    element: <DMDHome />,
  },
  {
    path: "/dmd/validation",
    element: <DMDValidationMenu />,
  },
  {
    path: "/dmd/public_bidding",
    element: <DMDPublicBiddingMenu />,
  },
  {
    path: "/dmd/goods_and_services",
    element: <DMDGoodsAndServices />,
  },
  {
    path: "/dmd/infrastructure_and_consultancy",
    element: <DMDInfrastructureAndConsultancy />,
  },
  {
    path: "/dmd/balance_checker",
    element: <DMDGoodsAndServices />,
  },
  {
    path: "/dmd/ppmp_finding",
    element: <DMDPPMDFinding />,
  },
  {
    path: "/dmd/amendatory_list",
    element: <DMDAmendatoryList />,
  },
  {
    path: "/dmd/amendatory_procurement_plan",
    element: <DMDAmendatoryProcurementPlan />,
  },
  {
    path: "/dmd/balance_checker_app_id",
    element: <DMDBalanceCheckerAppID />,
  },
]

export const DASHBOARD_ROUTES = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]

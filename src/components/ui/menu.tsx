import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ADMINISTRATION_LINKS = [
  { name: "Home", url: "/administration_home" },
  { name: "Database", url: "/administration/database" },
]

const INFRACOM_LINKS = [
  { name: "Home", url: "/infrastructure/home" },
  { name: "Database", url: "/infrastructure/database" },
]

const TECHNICAL_LINKS = [
  { name: "Home", url: "/technical/home" },
  { name: "Database", url: "/technical/database" },
  { name: "Edit Database", url: "/technical/edit_database" },
]

const DATABASE_MANAGEMENT_LINKS = [
  { name: "Home", url: "/dmd/home" },
  { name: "Validation", url: "/dmd/validation" },
  { name: "Public Bidding", url: "/dmd/public_bidding" },
]

const NAVIGATION_LINKS = [
  { name: "Home", url: "/" },
  { name: "Logout", url: "/logout" },
]

export default function Menu(props) {
  const [links, setLinks] = useState([])

  useEffect(() => {
    switch (props.department) {
      case "ADMINISTRATION":
        setLinks(ADMINISTRATION_LINKS)
        break

      case "INFRACOM":
        setLinks(INFRACOM_LINKS)
        break

      case "TECHNICAL_SERVICES":
        setLinks(TECHNICAL_LINKS)
        break

      case "DATABASE_MANAGEMENT":
        setLinks(DATABASE_MANAGEMENT_LINKS)
        break

      default:
        setLinks([])
        break
    }
  }, [])

  return (
    <div className="flex  py-4 px-8 w-full items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <img src="/hamburger.svg" className="h-8 w-8" />{" "}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => (
            <DropdownMenuItem
              key={link.name}
              className=" hover:text-gray-300  rounded-md "
            >
              <Link to={link.url} viewTransition>
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-4">
        {NAVIGATION_LINKS.map((link) => (
          <Link
            to={link.url}
            key={link.name}
            className="text-white"
            viewTransition
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

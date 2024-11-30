
import Timer from '@/components/ui/timer'
import BaseTemplate from '../BaseTemplate'
import Navbar from '@/components/ui/navbar'

export default function LandingPage() {

  return (

    <BaseTemplate>
      <Navbar />
        <div className="h-full flex flex-col">
      <div className="h-1/4 w-full flex justify-center items-center">
        <div className="h-32 w-32 rounded-full bg-white"></div>
      </div>

      <div className="h-1/4 w-full flex items-center mt-4 flex-col">
        <div className="text-center text-white text-4xl">ORG NAME</div>
        <div className="relative w-1/4 h-1/4 mt-4">
          <input
            type="text"
            className="h-full text-black w-full placeholder:text-black placeholder:ml-4 pl-4"
            placeholder="Search...."
          />
          <button className="absolute inset-y-0 right-0 px-3 text-white bg-[#274E7E]">
            Go
          </button>
        </div>

        <h1 className="italic text-white">Project numbers only</h1>
      </div>

      <Timer />

      
    </div>
    </BaseTemplate>

  )
}
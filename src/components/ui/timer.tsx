import {useState, useEffect} from 'react'   

export default function Timer(){ 
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])
  
    const formatDate = (date: Date) => {
      return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear().toString().substr(-2)}`
    }
  
    const formatTime = (date: Date) => {
      return date.toTimeString().split(' ')[0]
    }
  

    return ( 
        <div className="flex h-1/2 w-full items-end">
        <div className="flex w-1/4 flex-col ml-16 mb-8 bg-gray-50 bg-opacity-50">
          <h1 className="ml-4 h-auto text-6xl leading-tight" id="date">
            {formatDate(currentTime)}
          </h1>
          <h1 className="ml-4 h-auto text-5xl leading-tight" id="time">
            {formatTime(currentTime)}
          </h1>
        </div>
</div>
    )
}



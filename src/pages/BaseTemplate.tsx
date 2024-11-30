import { ReactNode } from "react";

export default function BaseTemplate({ children, overflow }: { children: ReactNode, overflow?: boolean }){ 

    return( 
        <div
          className={`${overflow ? "min-h-screen" : "h-screen"} w-full no-repeat bg-cover bg-center flex flex-col`}
          style={{ backgroundImage: 'url("/background.png")' }}
        >

            {children}

        </div>

    )
}

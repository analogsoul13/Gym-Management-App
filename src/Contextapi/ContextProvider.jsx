import React, {useState} from 'react'
import { createContext } from 'react'

export const responseContext = createContext()

function ContextProvider({children}) {
    const [response, setResponse] = useState("")
    // console.log(prop)

  return (
    <>
    <responseContext.Provider value={{response,setResponse}}>
        {children}
    </responseContext.Provider>
    </>
  )
}

export default ContextProvider
import { createContext } from "react"


export const optionalStyle ={
    textColor : 'black',
    bordercolor : 'black',
}

export const styleContext = createContext(optionalStyle);
import { createContext } from "react"


export const optionalStyle ={
    textColor : 'black',
    bordercolor : 'black',
    backgroundColor : '#ffffff',
}

export const styleContext = createContext(optionalStyle);
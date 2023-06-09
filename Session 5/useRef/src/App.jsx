import React, { useState } from 'react'
import TextBox from './Components/TextBox'

export default function App() {
  const [exp,setExp] = useState('')
  return (
    <>
    <TextBox defaultShowState={true} onchange={(e)=>setExp(e.target.value)}/>
    <p>{exp}</p><br />
    </>
  )
}

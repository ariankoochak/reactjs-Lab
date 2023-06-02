import React from 'react'

const errStyle ={
    color : "red",
    fontSize : 50,
}
export default function ErrorComponent({errText}) {
  return (
    <p style={errStyle}>{errText}</p>
  )
}

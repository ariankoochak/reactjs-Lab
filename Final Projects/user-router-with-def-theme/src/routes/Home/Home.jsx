import React, { useContext } from 'react'
import { styleContext } from '../../utils/style'

export default function Home() {
  const optionalStyle = useContext(styleContext)
    const textStyles = {
    color:optionalStyle.textColor,
  }

  return (
      <>
          <h1 style={textStyles}>Home Page</h1>
          <h3 style={textStyles}>this is home page of admin panel!</h3>
      </>
  );
}

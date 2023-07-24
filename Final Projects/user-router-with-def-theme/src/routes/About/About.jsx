import React, { useContext } from 'react'
import { styleContext } from '../../utils/style';

export default function About() {
    const optionalStyle = useContext(styleContext);
    const textStyles = {
        color: optionalStyle.textColor,
    };
  return (
      <>
          <h1 style={textStyles}>About Page</h1>
          <h3 style={textStyles}>this is about page of admin panel!</h3>
      </>
  );
}

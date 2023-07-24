import React, { useRef, useContext, useState } from "react";
import { styleContext } from '../../utils/style';

export default function Setting(props) {
  const optionalStyle = useContext(styleContext)
  const textColorInpRef = useRef();
  const borderColorInpRef = useRef();
  const backgroundColorInpRef = useRef();

  const [textColorVal,setTextColorVal] = useState(optionalStyle.textColor)
  const [backgroundColorVal, setBackgroundColorVal] = useState(optionalStyle.backgroundColor);
  const [borderColorVal, setBorderColorVal] = useState(optionalStyle.borderColor);
  const handleApplyClick = ()=>{
    props.onApply(textColorInpRef.current.value,borderColorInpRef.current.value,backgroundColorInpRef.current.value);
  }

  const quickApply= (textColor,borderColor,backgroundColor)=>{
      props.onApply(textColor,borderColor,backgroundColor);
  }

  const textStyles = {
    color:optionalStyle.textColor,
  }
  const handleChangeColor = (e)=>{
    switch(e.target.id){
      case 'text':
        setTextColorVal(e.target.value)
        break;
      case 'background':
        setBackgroundColorVal(e.target.value);
        break;
      case 'border':
        setBorderColorVal(e.target.value);
        break;
        default:
          console.log('error in handleChnageColor');
    }
  }
  const handleDefaultThemes = (e)=>{
    let newTextColor = ''
    let newBorderColor = "";
    let newBackgroundColor = "";  
    switch (e.target.id) {
        case "dark":
            newTextColor = "#e0e1dd";
            newBackgroundColor = "#1b263b";
            newBorderColor = "#0d1b2a";
            break;
        case "red":
              newTextColor = "#660708";
              newBackgroundColor = "#e5383b";
              newBorderColor = "#660708";
            break;
        case "light":
              newTextColor = "#8d99ae";
              newBackgroundColor = "#edf2f4";
              newBorderColor = "#2b2d42";
            break;
        default:
            console.log("error in handleChnageColor");
    }
    setTextColorVal(newTextColor);
    setBackgroundColorVal(newBackgroundColor);
    setBorderColorVal(newBorderColor);
    quickApply(newTextColor, newBorderColor, newBackgroundColor);
  }
  return (
    <>
    <div>
      <h2 style={textStyles}>Text Color</h2>
      <input type="color" value={textColorVal}  id="text"  ref={textColorInpRef} onChange={handleChangeColor}/>
      <h2 style={textStyles}>Background Color</h2>
      <input type="color" value={backgroundColorVal}  id="background"  ref={backgroundColorInpRef} onChange={handleChangeColor}/>
      <h2 style={textStyles}>Border Color</h2>
      <input type="color" value={borderColorVal} id = "border" ref={borderColorInpRef} onChange={handleChangeColor}/><br /><br />
      <button onClick={handleApplyClick}>Apply</button><br /><br />
      <button onClick={handleDefaultThemes} id="dark">Dark Theme</button>
      <button onClick={handleDefaultThemes} id="light">Light Theme</button>
      <button onClick={handleDefaultThemes} id="red">Red Theme</button>
    </div>
    </>
  )
}

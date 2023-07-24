import React, { useRef, useContext } from "react";
import { styleContext } from '../../utils/style';

export default function Setting(props) {
  const optionalStyle = useContext(styleContext)
  const textColorInpRef = useRef();
  const borderColorInpRef = useRef();
  const handleApplyClick = ()=>{
    props.onApply(textColorInpRef.current.value,borderColorInpRef.current.value);
  }
  const textStyles = {
    color:optionalStyle.textColor,
  }
  return (
    <>
    <div>
      <h2 style={textStyles}>Text Color</h2>
      <input type="color" defaultValue={optionalStyle.textColor}  id="favcolor" name="favcolor" ref={textColorInpRef}/>
      <h2 style={textStyles}>Border Color</h2>
      <input type="color" defaultValue={optionalStyle.borderColor} ref={borderColorInpRef}/><br /><br />
      <button onClick={handleApplyClick}>Apply</button>
    </div>
    </>
  )
}

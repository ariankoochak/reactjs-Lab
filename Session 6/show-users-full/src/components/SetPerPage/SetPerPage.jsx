import React from 'react'
import styleModule from './style.module.css'
import one from './1-square.svg'
import oneFill from "./1-square-fill.svg";
import three from "./3-square.svg";
import threeFill from "./3-square-fill.svg";
import five from "./5-square.svg";
import fiveFill from "./5-square-fill.svg";
import seven from "./7-square.svg";
import sevenFill from "./7-square-fill.svg";

export default function SetPerPage(props) {
  const handleClicked = (e)=>{
     props.changeUserPerPage(+(e.target.alt))
  }
  return (
      <div>
          user per page:
          <img src={props.upp === 1 ? oneFill : one} alt="1" className={styleModule.imageStyle} onClick={handleClicked}/>
          <img src={props.upp === 3 ? threeFill : three} alt="3" className={styleModule.imageStyle} onClick={handleClicked}/>
          <img src={props.upp === 5 ? fiveFill : five} alt="5" className={styleModule.imageStyle} onClick={handleClicked}/>
          <img src={props.upp === 7 ? sevenFill : seven} alt="7" className={styleModule.imageStyle} onClick={handleClicked}/>
      </div>
  );
}

import React from 'react'
import rightArrow from './arrow-right.svg';
import leftArrow from "./arrow-left.svg";
import styleModule from './style.module.css';

export default function Pagination(props) {
    const handleClickedPage = (e)=>{
        props.changePage(+(e.target.textContent))
    }
    const handleClickedArrows = (pos)=>{
        if(pos === 0 && props.currentPage > 1)
            props.changePage(props.currentPage - 1)
        else if(pos !== 0 && props.currentPage < Math.ceil(props.userCount / props.perPage))
            props.changePage(props.currentPage + 1)
    }
    const setPageElements = ()=>{
        const pages = [];
        const pageNum = Math.ceil(props.userCount / props.perPage);
        for (let i = 1; i <= pageNum; i++) {
            pages.push(<div className={`${styleModule.numberStyle} ${props.currentPage === i ? styleModule.selected : ''}`} key={i} onClick={handleClickedPage}>{i}</div>);
        }
        return pages;
    }
  return (
      <div>
          <div className={styleModule.arrowStyle} onClick={()=>{handleClickedArrows(0)}}><img src={leftArrow} alt="" /></div>
          {setPageElements()}
          <div className={styleModule.arrowStyle} onClick={()=>{handleClickedArrows(1)}}><img src={rightArrow} alt="" /></div>
      </div>
  );
}

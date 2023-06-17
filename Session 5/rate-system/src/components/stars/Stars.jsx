import React, { useState } from 'react'
import emptyStar from './star.svg'
import fullStar from './star-fill.svg'

export default function Stars() {
  
  const [rate,setRate] = useState(0);
  const [submitrate,setSubmitRate] = useState(0);
  const [backUpSubmit,setBackUpSubmit] = useState(0);

  const handleMouseEnter = (num)=>{
    setRate(num)
    setSubmitRate(0);
  }

  const handleMouseOut = ()=>{
    setRate(0);
    setSubmitRate(backUpSubmit);
  }

  const handleSoure = (elementID)=>{
    return (elementID <= rate || elementID <= submitrate) ? fullStar : emptyStar
  }

  const handleSumbitRate = (num)=>{
    setSubmitRate(num);
    setBackUpSubmit(num);
  }

  return (
      <>
        <div onMouseLeave={handleMouseOut}>
          <img src={handleSoure(1)} alt="star" onMouseEnter={()=>handleMouseEnter(1)} onClick={()=>handleSumbitRate(1)}/>
          <img src={handleSoure(2)} alt="star" onMouseEnter={()=>handleMouseEnter(2)} onClick={()=>handleSumbitRate(2)}/>
          <img src={handleSoure(3)} alt="star" onMouseEnter={()=>handleMouseEnter(3)} onClick={()=>handleSumbitRate(3)}/>
          <img src={handleSoure(4)} alt="star" onMouseEnter={()=>handleMouseEnter(4)} onClick={()=>handleSumbitRate(4)}/>
          <img src={handleSoure(5)} alt="star" onMouseEnter={()=>handleMouseEnter(5)} onClick={()=>handleSumbitRate(5)}/>
        </div>
      </>
  );
}

import React, { useState } from 'react'
import emptyStar from './star.svg'
import fullStar from './star-fill.svg'

export default function Stars() {
  
  const [rate,setRate] = useState(0);
  const [submitrate,setSubmitRate] = useState(0);
  const [backUpSubmit,setBackUpSubmit] = useState(0);

  const handleMouseEnter = (e)=>{
    setRate(+(e.target.id))
    setSubmitRate(0);
  }

  const handleMouseOut = ()=>{
    setRate(0);
    setSubmitRate(backUpSubmit);
  }

  const handleSoure = (elementID)=>{
    return (elementID <= rate || elementID <= submitrate) ? fullStar : emptyStar
  }

  const handleSumbitRate = (e)=>{
    setSubmitRate(+e.target.id);
    setBackUpSubmit(+e.target.id);
  }

  return (
      <>
        <div onMouseLeave={handleMouseOut}>
          <img src={handleSoure(1)} alt="star" id='1' onMouseEnter={handleMouseEnter} onClick={handleSumbitRate}/>
          <img src={handleSoure(2)} alt="star" id='2' onMouseEnter={handleMouseEnter} onClick={handleSumbitRate}/>
          <img src={handleSoure(3)} alt="star" id='3' onMouseEnter={handleMouseEnter} onClick={handleSumbitRate}/>
          <img src={handleSoure(4)} alt="star" id='4' onMouseEnter={handleMouseEnter} onClick={handleSumbitRate}/>
          <img src={handleSoure(5)} alt="star" id='5' onMouseEnter={handleMouseEnter} onClick={handleSumbitRate}/>
        </div>
      </>
  );
}

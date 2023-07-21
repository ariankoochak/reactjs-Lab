import React from 'react'
import { useDispatch } from "react-redux";
import { minus } from '../utils/slices/counter';

export default function Comp3() {
    const dispatch = useDispatch();
  return (
    <div>Comp3
        <button onClick={()=>{dispatch(minus())}}>minus</button>
    </div>
  )
}

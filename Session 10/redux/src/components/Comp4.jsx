import React from 'react'
import { useDispatch } from "react-redux";
import { addBy } from '../utils/slices/counter';

export default function Comp4() {
    const dispatch = useDispatch();
  return (
    <div>Comp4
        <button onClick={()=>{dispatch(addBy(3))}}>add 3</button>
    </div>
  )
}

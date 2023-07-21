import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../utils/slices/counter'


export default function Comp2() {
    const dispatch = useDispatch()
  return (
    <div>Comp2
        <button onClick={()=>{dispatch(add())}}>Add</button>
    </div>
  )
}

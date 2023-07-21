import React from 'react'
import { useSelector } from 'react-redux'

export default function Comp1() {
    const count = useSelector((state)=>state.counter.val)
  return (
    <div>Comp1 --- {count}</div>
  )
}

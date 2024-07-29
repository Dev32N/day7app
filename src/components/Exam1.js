import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countDown, countUp } from '../redux/countSlice'

export default function Exam1() {
    const dispatch =useDispatch()
    const count = useSelector((state) => state.count.value)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(countUp())}>CountUP</button>
        <button onClick={()=>dispatch(countDown())}>CountDown</button>
    </div>
  )
}

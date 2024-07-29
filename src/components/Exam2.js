import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName } from '../redux/userSlice'

export default function Exam2() {
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user.user)
  return (
    <div>
        <h1>user's name: {user.name}</h1>
        <h1>user's age: {user.age}</h1>
        <button onClick={()=>dispatch(changeName("nhan yeu nam"))}>change Name</button>
        <button onClick={()=>dispatch(changeAge(20))}>Change Age</button>
    </div>
  )
}

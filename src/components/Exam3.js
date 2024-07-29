import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAVG, reChecked } from '../redux/studentSlice'

export default function Exam3() {
    const dispatch = useDispatch()
    const student = useSelector(state=>state.student.student)
    const checked = useSelector(state=>state.student.checked)
  return (
    <div>
        <h1>Tên học sinh: {student.name}</h1>
        <h1>điểm toán: {student.math}</h1>
        <h1>điểm lập trình: {student.pro}</h1>
        <h1>điểm trung bình: {student.avg}</h1>
        <h1>cheked: {checked?"true":"false"}</h1>
        <button onClick={()=>dispatch(reChecked())}>reChecked</button>
        <button onClick={()=>dispatch(changeAVG())}>Tính điểm TB</button>
    </div>
  )
}

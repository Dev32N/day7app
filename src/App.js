import React from 'react'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'
import ToDoList from './components/ToDoList'


export default function App() {
  return (
    <div>
      <ToDoList />
      <Exam1 />
      <Exam2 />
      <Exam3 />
    </div>
  )
}

import React, { useState } from 'react'

export default function Demo() {
    const [count,setCount] =useState(0)
    const number = [1,2,3,4,5,6]
    const dbnumber = number.map((value,index) => value * 2)
    const names = ['Alice', 'Bob', 'Charlie'];

    const coppynum = [...number]

    const gopmang = [...number,...names]
    const countUp = () => {
        setCount(count+1)
    }

    const [list,setList] = useState({
        name: "nhanphan",
        age: 15,
        job: "dev"
    })

    const updateList = () => {
        setList({...list,address: "dĩ an"})
    }
  return (
    <div>
        <h1>{JSON.stringify(list)}</h1>
        <button onClick={updateList}>update</button>
        <p>Number Array: {number}</p>
        <p>Results: {dbnumber}</p>
        <ul>
            {
                names.map((name,index)=>(
                    <li key = {index}>
                      {name}
                    </li>
                ))
            }
        </ul>
        <p>{coppynum}</p>
        <p>mảng được gộp: {gopmang}</p>
        <h1>Số hiện tại: {count}</h1>
        <button onClick={countUp}>Tăng</button>
    </div>
  )
}

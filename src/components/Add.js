import React, { useState } from 'react'

export default function Add(props) {
    const { handle_add } = props
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (text.trim() !== "") {
                handle_add(text)
                setText("")  
            }
        }
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Nhập tên học sinh mới'
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown} 
            />
        </div>
    )
}

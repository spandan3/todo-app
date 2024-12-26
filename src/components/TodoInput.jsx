import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputvalue] = useState('')
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputvalue(e.target.value)
            }} placeholder="Add Task" />
            <button onClick={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputvalue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
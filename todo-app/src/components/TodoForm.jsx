import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(e)
        setValue('')
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' className='input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='btn'>Add Task</button>
    </form>
  )
}

export default TodoForm

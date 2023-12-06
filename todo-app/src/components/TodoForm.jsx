import React from 'react'

const TodoForm = () => {
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type='text' className='input' placeholder='What is the task today?' onChange={(e) => console.log(e.target.value)} />
      <button type='submit' className='btn'>Add Task</button>
    </form>
  )
}

export default TodoForm

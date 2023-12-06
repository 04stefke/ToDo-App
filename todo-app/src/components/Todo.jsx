import React from 'react'

const Todo = ({task, editToDo}) => {

  return (
    <div className='todo-task'>
      <p>{task.task}</p>
      <div>
        <i className='bx bx-edit-alt icon' onClick={() => editToDo(task.id)}></i>
        <i className='bx bx-trash icon'></i>
      </div>
    </div>
  )
}

export default Todo

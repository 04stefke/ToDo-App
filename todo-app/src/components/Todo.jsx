import React from 'react'

const Todo = ({task, editToDo, deleteTodo, toggleComplete}) => {

  return (
    <div className='todo-task'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : 'not-completed'}`}>{task.task}</p>
      <div>
        <i className='bx bx-edit-alt icon' onClick={() => editToDo(task.id)}></i>
        <i className='bx bx-trash icon' onClick={() => deleteTodo(task.id)}></i>
      </div>
    </div>
  )
}

export default Todo

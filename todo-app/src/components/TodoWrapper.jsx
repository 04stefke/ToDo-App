import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuidv4'
import Todo from './Todo';
uuidv4();
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
  return (
    <div className='container'>
        <h1 className='title'>Lets get some things out of the way!</h1>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper

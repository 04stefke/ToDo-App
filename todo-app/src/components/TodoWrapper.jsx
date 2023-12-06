import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuidv4'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    
    const editToDo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
  return (
    <div className='container'>
        <h1 className='title'>Lets get some things out of the way!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editToDo={editTask}/>
        ) : (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editToDo={editToDo}/>)
      ))}
    </div>
  )
}

export default TodoWrapper

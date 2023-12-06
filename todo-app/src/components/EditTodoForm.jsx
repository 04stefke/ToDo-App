import React, {useState} from 'react'

const EditTodoForm = ({task, editToDo}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
  e.preventDefault()
  editToDo(value, task.id )
  
  setValue('')
}

return (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Changed your mind?' value={value} onChange={(e) => setValue(e.target.value)} className='input'/>
    <button type='submit' className='btn'>Update Task</button>
  </form>
  )
}

export default EditTodoForm

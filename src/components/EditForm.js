import React, {useState} from 'react'

export const EditForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="save-task-input" placeholder='Update task' />
    <button type="submit" className='save-task-btn'>Save Task</button>
  </form>
  )
}
import React, {useState} from 'react'

export const Form = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="add-task-input" placeholder='Enter a task to complete' />
      <button type="submit" className='add-task-btn'>Add Task</button>
    </form>
  )
}
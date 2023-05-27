import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "./components/Task";
import { Form } from "./components/Form";
import { EditForm } from "./components/EditForm";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
  }, []);

  const addTodo = todo => {
      const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const toggleComplete = id => {
      const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = id => {
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
      const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <div className="main-content">
      <h1>Organise</h1>
      <Form addTodo={addTodo} />
      
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditForm editTodo={editTask} task={todo} />
        ) : (
          <Task task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      ))}
    </div>
  )
}

export default App;
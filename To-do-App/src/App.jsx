import React from 'react'
import { useState } from 'react'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'


function App(){
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>{
    setTodos([...todos, {id: Date.now(), text}]); 
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App

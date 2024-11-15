import React, { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;

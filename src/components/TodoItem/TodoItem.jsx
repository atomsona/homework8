import React from 'react';
import './TodoItem.css';

function TodoItem({ index, todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>X</button>
    </li>
  );
}

export default TodoItem;

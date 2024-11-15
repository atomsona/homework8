import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

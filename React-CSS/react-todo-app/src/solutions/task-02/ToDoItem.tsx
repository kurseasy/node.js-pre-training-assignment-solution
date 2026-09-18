import React from 'react';
import { TodoItemProps } from '../../types';

export const ToDoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        padding: '8px',
        margin: '4px 0',
        border: '1px solid #ccc',
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      {todo.title} {todo.completed ? '✅' : '⏳'}
    </div>
  );
};

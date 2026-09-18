import React, { useState } from 'react';
import { Todo } from '../../types';

export const CompleteToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const title = inputValue.trim();
    if (!title) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue('');
  };

  const markCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? 'completed' : 'not completed'}
            {!todo.completed && (
              <button onClick={() => markCompleted(todo.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

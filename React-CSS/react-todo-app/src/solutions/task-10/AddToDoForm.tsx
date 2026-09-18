import React, { useState } from 'react';
import { Todo } from '../../types';

export const AddToDoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) {
      setError('Title cannot be empty');
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: trimmed,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle('');
    setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Enter a todo title..."
        />
        <button type="submit" disabled={!title.trim()}>
          Add Todo
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

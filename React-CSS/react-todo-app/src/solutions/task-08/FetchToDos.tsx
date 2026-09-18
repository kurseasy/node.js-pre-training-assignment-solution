import React, { useState, useEffect } from 'react';
import { Todo } from '../../types';

export const FetchToDos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) return;
        setTodos(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} — {todo.completed ? 'completed' : 'not completed'}
        </li>
      ))}
    </ul>
  );
};

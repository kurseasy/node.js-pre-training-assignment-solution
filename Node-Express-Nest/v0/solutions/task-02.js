// Express.js app with POST /todos endpoint
const express = require('express');
const app = express();

app.use(express.json()); // чтобы читать JSON из req.body

// In-memory storage for todos
const todos = [
  { id: 1, title: 'Buy milk', completed: false },
];

// POST /todos — add a new todo
app.post('/todos', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

module.exports = app;

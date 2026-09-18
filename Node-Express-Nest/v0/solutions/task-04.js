// Express.js app with GET /todos/:id endpoint
const express = require('express');
const app = express();

app.use(express.json());

// In-memory storage for todos
const todos = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Write code', completed: false },
];

// GET /todos/:id — return a single todo by id, or 404
app.get('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
});

module.exports = app;

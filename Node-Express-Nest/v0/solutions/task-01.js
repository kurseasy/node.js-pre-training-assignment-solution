// Express.js app with GET /todos endpoint
const express = require('express');
const app = express();

// In-memory storage for todos
const todos = [
  { id: 1, title: 'Buy milk', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Write code', completed: false },
];

// GET /todos — return the list of todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

module.exports = app;

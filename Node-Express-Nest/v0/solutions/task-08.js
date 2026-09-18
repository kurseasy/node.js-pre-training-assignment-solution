// Express.js static files serving for ToDo frontend
const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/static', express.static(path.join(__dirname, 'public')));

module.exports = router;

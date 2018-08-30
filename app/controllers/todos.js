const express = require('express');
const todos = express.Router();
const models = require('../models');
const Todo = models.Todo;

// Destroy
todos.delete('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    todoRecord.destroy().then(() => {
      res.status(200).json({});
    });
  });
});

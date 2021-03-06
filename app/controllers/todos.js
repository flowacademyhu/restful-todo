const express = require('express');
const todos = express.Router();
const models = require('../models');
const Todo = models.Todo;

// Index
todos.get('/', (req, res) => {
  Todo.findAll().then((allTodo) => {
    res.json(allTodo);
  });
});

// Show
todos.get('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    res.json(todoRecord);
  });
});

// Create
todos.post('/', (req, res) => {
  Todo.create(req.body).then(todo => {
    res.json(todo);
  }).catch(error => {
    res.json(error);
  });
});

// Update
todos.put('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    todoRecord.update().then((updatedTodoRecord) => {
      res.json(updatedTodoRecord)
    });
  });
});

// Destroy
todos.delete('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    todoRecord.destroy().then(() => {
      res.status(200).json({});
    });
  });
});

module.exports = todos;
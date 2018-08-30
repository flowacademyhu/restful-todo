const express = require('express');
const todos = express.Router();
const models = require('../models');

// Index
todos.get('/', (req, res) => {
  Todo.findAll().then((allTodo) => {
    res.json(allTodo);
  });
});

// New
todos.get('/new', (req, res) => {
  res.json(???);
});

// Show
todos.get('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    res.json(todoRecord);
  });
});

// Create
todos.post('/', (req, res) => {
  Todo.create({
    //
  }).then(todo => {
    res.json();
  }).catch(error => {
    res.json(error);
  });
});

// Edit
todos.get('/:id/edit', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    res.json(todoRecord);
  });
});

// Update
todos.put('/:id', (req, res) => {
  Todo.findById(req.params.id).then((todoRecord) => {
    todoRecord.update(req.body).then((updatedTodoRecord) => {
      res.json(updatedTodoRecord)
    });
  });
});

module.exports = todosApi;
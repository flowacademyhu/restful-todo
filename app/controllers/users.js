const express = require('express');
const users = express.Router({mergeParams: true});
const models = require('../models');
const User = models.User;

users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    res.json(allUser);
  });
});

users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.json(ctx);
  });
});

users.post('/', (req, res) => {
  if (req.body && req.body.id) {
    res.status(400).json({ message: 'Bad request, kill yourself!' });
  }
  User.create(req.body).then((userRecord) => {
    res.json(userRecord);
  });
});

users.put('/', (req, res) => {
  if (!req.body || !req.body.id) {
    res.status(400).json({ message: 'Bad request, kill yourself!' });
  }
  User.update(req.body).then((userRecord) => {
    res.json(userRecord);
  });
});

module.exports = users;

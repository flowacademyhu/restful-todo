const express = require('express');
const users = express.Router({mergeParams: true});
const models = require('../models');
const User = models.User;
/*
users.param('userId', (req, res, next, id) => {
  User.findById(id).then((userRecord) => {
    req.user = userRecord;
    next();
  });
});
*/
// get all of the users
users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    res.json(allUser);
  });
});

// get a specific user
users.get('/userId', (req, res) => {
  res.json(req.user);
});

// delete a specific user
users.delete('/userId', (req, res) => {
  res.json(req.user);
});

// Show
users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.json(ctx);
  });
});

module.exports = users;

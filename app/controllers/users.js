const express = require('express');
const users = express.Router();
const models = require('../models');
const User = models.User;

// Show
users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = { user: userRecord };
    res.json(ctx);
  });
});

module.exports = users;

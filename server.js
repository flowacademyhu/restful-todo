const express = require('express');
const app = express();

const users = require('./app/controllers/users');
app.use('/users', users);

const todos = require('./app/controllers/todos');
app.use('/todos', todos);

app.listen(8080);

// express settings
const express = require('express');
const app = express();

// controllers
const index = require('./app/controllers/indexes');
app.use('/', index);

const users = require('./app/controllers/users');
app.use('/users', users);

// static folder
app.use(express.static('./public'));

// APP start!
app.listen(8888);

<<<<<<< HEAD
const express = require('express');
const app = express();
const User = require('../models/user.model');
let user_controller = require('../controllers/user.controller');

app.get('/', (req, res) => {
  
});

app.get('/user', user_controller.getUser);

app.post('/user', user_controller.postUser);

app.put('/user/:id', user_controller.putUser);

app.delete('/user/:id', user_controller.deleteUser);


module.exports = app;
=======
const express = require('express')
const app = express()
const User = require('../models/user.model')
let user_controller = require('../controllers/user.controller')

app.get('/', (req, res) => {})

app.get('/user', user_controller.getUser)

app.post('/user', user_controller.postUser)

app.put('/user/:id', user_controller.putUser)

app.delete('/user/:id', user_controller.deleteUser)

module.exports = app
>>>>>>> CRUD app cafe

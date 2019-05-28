const express = require('express')
const app = express()
const User = require('../models/user.model')
let user_controller = require('../controllers/user.controller')
const { checkToken, checkAdminRole } = require('../middlewares/authorization')

app.get('/', (req, res) => {})

app.get('/user', user_controller.getUser)

app.post('/user', checkToken, checkAdminRole, user_controller.postUser)

app.put('/user/:id', user_controller.putUser)

app.delete('/user/:id', checkToken, checkAdminRole, user_controller.deleteUser)

module.exports = app

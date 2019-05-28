const express = require('express')
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const app = express()

const { getToken } = require('../services/user.services')

app.post('/login', (req, res) => {
  let body = req.body

  User.findOne({ email: body.email }, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }

    if (!userDB) {
      return res.status(400).json({
        ok: false,
        message: 'user incorrect'
      })
    }

    if (!bcrypt.compareSync(body.password, userDB.password)) {
      return res.status(400).json({
        ok: false,
        message: 'password incorrect'
      })
    }
    const token = getToken(userDB)
    res.json({
      ok: true,
      user: userDB,
      token
    })
  })
})

module.exports = app

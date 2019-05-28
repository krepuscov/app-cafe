const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

// settings
require('./config/config')
const database = require('./config/database')

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use(require('./routes'))

// database mongodb

database.then(() => {
  console.log(`Conect database mongodb`)
  app.listen(process.env.PORT, () => {
    console.log(`server listen in port ${process.env.PORT}`)
  })
})

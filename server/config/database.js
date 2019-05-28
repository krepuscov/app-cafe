const mongoose = require('mongoose')

const database = mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})

module.exports = database

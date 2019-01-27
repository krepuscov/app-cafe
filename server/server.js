<<<<<<< HEAD
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();

// settings
require('./config/config');


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(require('./routes/user.route'));

=======
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// settings
require('./config/config')

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// routes
app.use(require('./routes'))
>>>>>>> CRUD app cafe

// database mongodb
let options = {
  useNewUrlParser: true,
  useCreateIndex: true
}
<<<<<<< HEAD
let db = mongoose.connect('mongodb://localhost/cafeudemy', options);

db.then(() => console.log(`Conect database mongodb`))
  .catch((err) => {
    throw err;
  })
=======
let db = mongoose.connect('mongodb://localhost/cafeudemy', options)

db.then(() => console.log(`Conect database mongodb`)).catch(err => {
  throw err
})
>>>>>>> CRUD app cafe

// mongoose.connect('mongodb://localhost/cafeudemy', (err) => {
//   if (err) {
//     throw err
//   }

//   console.log(`Conect database mongodb`);
// });

<<<<<<< HEAD

app.listen(process.env.PORT, () => {
  console.log(`server listen in port ${process.env.PORT}`);
})
=======
app.listen(process.env.PORT, () => {
  console.log(`server listen in port ${process.env.PORT}`)
})
>>>>>>> CRUD app cafe

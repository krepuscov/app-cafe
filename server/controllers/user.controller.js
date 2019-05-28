const bcrypt = require('bcrypt')
const _ = require('underscore')
const User = require('../models/user.model')

let getUser = (req, res) => {
  let skip = req.query.skip || 0
  skip = Number(skip)

  let limit = req.query.limit || 3
  limit = Number(limit)

  User.find({}, 'name email')
    .skip(skip)
    .limit(limit)
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        })
      }

      User.countDocuments((err, count) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err
          })
        }

        res.json({
          ok: true,
          users,
          count
        })
      })
    })
}

let postUser = (req, res) => {
  let body = req.body

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role
  })

  user
    .save()
    .then(userDB => {
      return res.json({
        ok: true,
        user: userDB
      })
    })
    .catch(err => {
      return res.status(400).json({
        ok: false,
        err
      })
    })
}

let putUser = (req, res) => {
  let id = req.params.id

  let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'status'])

  let options = {
    new: true,
    runValidators: true
  }

  User.findOneAndUpdate({ _id: id }, body, options)
    .then(userDB => {
      res.json({
        ok: true,
        user: userDB
      })
    })
    .catch(err => {
      return res.status(400).json({
        ok: false,
        err
      })
    })
}

let deleteUser = (req, res) => {
  let id = req.params.id

  let options = {
    new: true
  }

  let status = {
    status: false
  }

  User.findOneAndUpdate({ _id: id }, status, options)
    .then(userDB => {
      res.json({
        ok: true,
        user: userDB
      })
    })
    .catch(err => {
      return res.status(400).json({
        ok: false,
        err
      })
    })
}

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
}

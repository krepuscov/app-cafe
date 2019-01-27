const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidates = {
  values: ['USER_ROLE', 'ADMIN_ROLE'],
  message: 'role not validated'
}

const userSchema = new Schema({

  name: {
    type: String,
    required: [true, 'name is necesary']
  },
  email: {
    type: String,
    required: [true, 'email is necesary'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password is necesary']
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: rolesValidates
  },
  status: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObbject = user.toObject();
  delete userObbject.password;

  return userObbject;
}

userSchema.plugin(uniqueValidator, '{PATH} should be unique');
module.exports = mongoose.model('User', userSchema);
const jwt = require('jsonwebtoken')

const getToken = user => {
  const payload = {
    user
  }
  const seed = process.env.SEED
  const expiresIn = { expiresIn: process.env.EXPIRED }

  const token = jwt.sign(payload, seed, expiresIn)

  return token
}

const verifyToken = async token => {
  try {
    const decoded = await jwt.verify(token, process.env.SEED)
    return decoded
  } catch (err) {
    throw err
  }
}

module.exports = {
  getToken,
  verifyToken
}

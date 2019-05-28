const { verifyToken } = require('../services/user.services')

const checkToken = (req, res, next) => {
  const token = req.get('token')
  if (!token) {
    return res.json({
      ok: false,
      err: {
        message: 'not found token'
      }
    })
  }
  verifyToken(token)
    .then(decoded => {
      req.user = decoded.user
      next()
    })
    .catch(err => {
      return res.json({
        ok: false,
        err
      })
    })
}

const checkAdminRole = (req, res, next) => {
  const user = req.user
  const role = user.role

  if (role !== 'ADMIN_ROLE') {
    return res.json({
      ok: false,
      err: {
        message: 'not ADMIN ROLE'
      }
    })
  }

  next()
}

module.exports = {
  checkToken,
  checkAdminRole
}

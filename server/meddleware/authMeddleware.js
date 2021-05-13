const jwtWebToken = require('jsonwebtoken')
const config = require('../config')

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Dont authorization' })
  }

  const userToken = req.headers.authorization.split(' ')[1]
  console.log(userToken);
  try {
    jwtWebToken.verify(userToken, config.secret, function (err, decoded) {
      if (err) {
        return res.status(400).json({ message: 'incorect token' })
      }
      console.log(decoded.username)
    });
  } catch (e) {

  }


  next()
}
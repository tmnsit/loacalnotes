const jwtWebToken = require('jsonwebtoken')
const config = require('../config')

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Dont authorization' })
  }

  const userToken = req.headers.authorization.split(' ')[1]
  try {
    jwtWebToken.verify(userToken, config.secret, function (err, decoded) {
      if (err) {
        return res.status(400).json({ message: 'incorect token' })
      }
      req.body.user = {
        username: decoded.username,
        userid: decoded.userid
      }   
      next()
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'server error' })
  }
}
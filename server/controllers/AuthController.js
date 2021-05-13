const User = require('../models/User')
const Role = require('../models/User')
const jwtWebToken = require('jsonwebtoken')
const config = require('../config')
const { validationResult } = require('express-validator');


class AuthControllers {
  async login(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ message: errors });
    }
    if (!req.body.username || !req.body.password) {
      return res.status(403).json({ message: 'Send the correct username and password' })
    }
    const candidat = User.findOne({ username: req.body.username })
    if (!candidat) {
      return res.status(403).json({ message: "Wrong login or password" })
    }
    try {
      const token = await jwtWebToken.sign({
        username: 'tmnsittt'
      }, config.secret, { expiresIn: 60 * 60 })

      return res.status(200).json({ token: token })
    } catch (e) {
      return res.status(403).json(e)
    }

  }
  async register(req, res, next) {
    return res.json({ message: "Register" })
  }
}



module.exports = new AuthControllers()
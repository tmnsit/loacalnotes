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
    const candidat = await User.findOne({ username: req.body.username })
    if (!candidat) {
      return res.status(403).json({ message: "Wrong login or password1" })
    }
    if(candidat.password !== req.body.password){
      return res.status(403).json({ message: "Wrong login or password1" })
    }
    console.log(candidat._id);

    try {
      const token = await jwtWebToken.sign({
        username: candidat.username,
        userid: candidat._id
      }, config.secret, { expiresIn: 60 * 60 })

      return res.status(200).json({ token: token })
    } catch (e) {
      return res.status(403).json(e)
    }

  }
  async register(req, res, next) {
    return res.json({ message: "no register" })
  }
}



module.exports = new AuthControllers()
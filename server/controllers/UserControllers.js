const User = require('../models/User')

class UserControllers {


  async getUser(req, res, next) {
    const username = req.params.username
    const user = await User.find({ username })
    res.json({ message: user })
  }
  async getUsers(req, res, next) {
    res.json({
      message: 'getUsers',
    })
  }
}

module.exports = new UserControllers()
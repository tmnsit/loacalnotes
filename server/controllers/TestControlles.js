// const User = require('../models/User')

class TestControllers {


    async getTest(req, res, next) {
        res.json({ "message": 'getTest' })
    }
    async postTest(req, res, next) {

        res.json({ "message": "Post test", "req": req.body })
    }
}

module.exports = new TestControllers()
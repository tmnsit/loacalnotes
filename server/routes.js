const express = require('express')
const router = express.Router()
const UserControllers = require('./controllers/UserControllers')
const TestControlles = require('./controllers/TestControlles')

router.get('/api/get-users', UserControllers.getUsers)
router.get('/api/get-user/:username', UserControllers.getUser)
router.get('/api/test', TestControlles.getTest)
router.post('/api/test', TestControlles.postTest)


router.all('*', (req, res, next) => {
    res.status(404).json({ code: 404, message: 'route mot found' })
})
module.exports = router 
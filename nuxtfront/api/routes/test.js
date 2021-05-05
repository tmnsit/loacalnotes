const { Router } = require('express')

const router = Router()


router.get('/test', function (req, res, next) {
    res.json({ message: "sdasdsad" })
})

module.exports = router
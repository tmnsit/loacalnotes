const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
  res.json({ message: 'admin' })
})

router.post('/', (req, res, next) => {
  res.json({ message: 'admin' })
})


module.exports = router 
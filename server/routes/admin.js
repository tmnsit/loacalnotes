const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
  console.log(req.body.user);
  res.json({ message: 'admin', username: req.body.user.username })
})

router.post('/', (req, res, next) => {
  res.json({ message: 'admin' })
})


module.exports = router 
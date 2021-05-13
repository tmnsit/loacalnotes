const express = require('express')
const router = express.Router()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const authMeddleware = require('./meddleware/authMeddleware')
const authRoutes = require('./routes/auth')


router.use('/api/auth/', authRoutes)
router.use('/api/user/', userRoutes)

router.use('/api/admin/', authMeddleware, adminRoutes)


router.all('*', (req, res, next) => {
  res.status(404).json({ code: 404, message: 'route mot found' })
})
module.exports = router 
const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const { body } = require('express-validator');


router.post('/login', body('username').isLength({ min: 5 }), AuthController.login)

module.exports = router 
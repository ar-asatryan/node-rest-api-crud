
const express = require('express');
const router = express.Router()

const {
    registerUser,
    // loginUser,
    // getMe
} = require('../controllers/userController')

router
.post('/', registerUser)
// .post('/login', loginUser)
// .get('/me', getMe)

module.exports = router
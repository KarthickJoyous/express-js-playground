const express = require('express');
const router = express.Router();

const { registerRequest, loginRequest } = require('./requests/auth/authRequestValidators');

const { register, login } = require('../../controllers/authController');

router.post('/register', registerRequest, register);
router.post('/login', loginRequest, login);

module.exports = router;
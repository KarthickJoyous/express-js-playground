const express = require('express');
const router = express.Router();

const { jwtValidator } = require('../../middlewares/jwtValidator');

const {me, logout} = require('../../controllers/profileController');

router.get('/me', jwtValidator, me);
router.post('/logout', jwtValidator, logout);

module.exports = router;
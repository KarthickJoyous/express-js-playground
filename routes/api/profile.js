const express = require('express');
const router = express.Router();

const {me, logout} = require('../../controllers/profileController');

router.get('/me', me);
router.post('/logout', logout);

module.exports = router;
const express = require('express');
const router = express.Router();

const { tokenValidator } = require('../../middlewares/tokenValidator');

const {me, logout} = require('../../controllers/profileController');

router.get('/me', tokenValidator, me);
router.post('/logout', tokenValidator, logout);

module.exports = router;
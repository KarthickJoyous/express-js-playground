const express = require('express');
const router = express.Router();

const { logger } = require('../middlewares/logger');
const { tokenValidator } = require('../middlewares/tokenValidator');

const blogs = require('./api/blogs');
const auth = require('./api/auth');
const profile = require('./api/profile');

router.use(logger);

router.use(auth);
router.use('/blogs', tokenValidator, blogs);
router.use(profile);

router.all('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
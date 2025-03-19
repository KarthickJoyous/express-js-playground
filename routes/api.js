const express = require('express');
const router = express.Router();

const { logger } = require('../middlewares/logger');

const blogs = require('./api/blogs');
const auth = require('./api/auth');
const profile = require('./api/profile');

router.use(logger);

router.use('/blogs', blogs);
router.use(auth);
router.use(profile);

router.all('*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
const express = require('express');
const router = express.Router();

const blogs = require('./api/blogs');

router.use('/blogs', blogs);

module.exports = router;
const express = require('express');
const router = express.Router();

const webRoutes = require('./web');
const apiRoutes = require('./api');

router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;
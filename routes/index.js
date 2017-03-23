const express = require('express');
const router = express.Router();
const db = require('../models');

router.use('/', require('./forums'));
router.use('/forum', require('./forum'));
router.use('/profile', require('./profile'));

module.exports = router;

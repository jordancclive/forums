const express = require('express');
const router = express.Router();
const db = require('../models');

router.use('/', require('./forums'));
router.use('/forum', require('./forum'));
router.use('/profile', require('./profile'));
router.use('/user', require('./user'));

module.exports = router;

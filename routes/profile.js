const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next)=>{
  res.render('profile', { page: 'Profile' });
})

module.exports = router;

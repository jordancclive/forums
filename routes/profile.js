const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.render('profile', { page: 'profile'});
})

module.exports = router;

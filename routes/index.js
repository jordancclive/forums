const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
  res.render('index', { page: 'Home' });
})

router.use('/forum', (req, res, next)=>{
  res.render('forum', { page: 'Forums' });
})

module.exports = router;

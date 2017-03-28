const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req,res,next)=>{
  db.models.Forum.findAll({order:'topic'})
    .then(result => res.render('index', {forum:result}))
    .catch(next);
});

module.exports = router;

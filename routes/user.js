const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:name', (req, res, next)=>{
  let name = db.models.User.findOne({ where: { name: req.params.name }});
  res.render('user', { user: name });
})

module.exports = router;

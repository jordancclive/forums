const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:topic', (req, res, next)=>{
  db.models.Forums.findOne({ where: { topic: req.params.topic }, include: [{ model: db.models.Users }]})
    .then(result => res.render('forum', { forum: result }))
})

module.exports = router;

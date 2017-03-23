const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next)=> {
  db.models.Forums.findAll({ order: 'topic' })
    .then(result => res.render('index', { forums: result }))
    .catch(next);
});

module.exports = router;

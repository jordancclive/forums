const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next)=> {
  db.models.Forums.findAll({ order: 'topic' })
    .then( result => res.render('index', { forums: result }))
    .catch(next);
});

router.get('/forum/:topic', (req, res, next)=>{
  db.models.Forums.findOne({ where: { topic: req.params.topic }, include: [{ model: db.models.Users }]})
    .then(result => res.render('forum', { forum: result }))
})

router.use('/profile', (req, res, next)=>{
  res.render('profile', { page: 'Profile' });
})

module.exports = router;

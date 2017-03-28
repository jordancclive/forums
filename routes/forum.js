const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:topic', (req, res, next)=>{
  db.models.Forum.findOne({where: {topic: req.params.topic }, include: [{ model: db.models.User }]})
    .then((result)=>{ res.render('forum', { forum: result })})
})

router.post('/:topic', (req, res, next)=>{
  db.models.User.findOne({where: {name: req.body.username}})
    .then((user)=>{ db.models.Forum.findOne({where: {topic:req.params.topic}})
      .then((forum)=>{ forum.addUser(user)
        .then(()=>{ res.redirect('/forum/' + req.params.topic)})
      })
    })
})

module.exports = router;

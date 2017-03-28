const db = require('./_db');
const Forum = require('./_forum');
const User = require('./_user');
const ForumMember = require('./_forum_member');

Forum.hasMany(ForumMember);
User.hasMany(ForumMember);
ForumMember.belongsTo(Forum);
ForumMember.belongsTo(User);

const seed = ()=>{
  let fan;
  let montessori;
  return db.sync({force:true})
    .then(()=>{
      Forum.bulkCreate([
        {topic: "Entrepreneurship"},
        {topic: "Montessori"},
        {topic: "Legos"},
        {topic: "Breast Feeding"}
      ])
    })
    .then(()=>{
      Forum.findOne({
        where: {topic: "Montessori"}
      })
    })
    .then((_montessori)=>{montessori = _montessori})
    .then(()=>{
      User.bulkCreate([
        {name: "Jordan"},
        {name: "Fan"},
        {name: "Lincoln"},
        {name: "Serene"}
      ])
    })
    .then(()=>{
      User.findOne({
        where: {name: "Fan"}
      })
    })
    .then((_fan)=>{fan = _fan})
    .then(()=>{ ForumMember.Create({ userId: fan.id, forumId: montessori.id }) })
}

module.exports = {
  seed,
  models: {
    Forum,
    User,
    ForumMember
  }
};

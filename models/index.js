const db = require('./_db');
const Forum = require('./_forum');
const User = require('./_user');

Forum.belongsToMany(User, {
  through: 'forum_member'
})
User.belongsToMany(Forum, {
  through: 'forum_member'
})

const seed = ()=>{
  let jordan;
  let fan;
  let lincoln;
  let serene;
  let entrepreneurship;
  let montessori;
  let legos;
  let breast_feeding;
  return db.sync({force:true})
    .then(()=>{
      return Forum.bulkCreate([
        {topic: "Entrepreneurship"},
        {topic: "Montessori"},
        {topic: "Legos"},
        {topic: "Breast Feeding"}
      ])
    })
    .then(()=>{
      return Forum.findOne({
        where: {topic: "Entrepreneurship"}
      })
    })
    .then((_entrepreneurship)=>{entrepreneurship = _entrepreneurship})
    .then(()=>{
      return Forum.findOne({
        where: {topic: "Montessori"}
      })
    })
    .then((_montessori)=>{montessori = _montessori})
    .then(()=>{
      return Forum.findOne({
        where: {topic: "Legos"}
      })
    })
    .then((_legos)=>{legos = _legos})
    .then(()=>{
      return Forum.findOne({
        where: {topic: "Breast Feeding"}
      })
    })
    .then((_breast_feeding)=>{breast_feeding = _breast_feeding})
    .then(()=>{
      return User.bulkCreate([
        {name: "Jordan"},
        {name: "Fan"},
        {name: "Lincoln"},
        {name: "Serene"}
      ])
    })
    .then(()=>{
      return User.findOne({
        where: {name: "Jordan"}
      })
    })
    .then((_jordan)=>{jordan = _jordan})
    .then(()=>{
      return User.findOne({
        where: {name: "Fan"}
      })
    })
    .then((_fan)=>{fan = _fan})
    .then(()=>{
      return User.findOne({
        where: {name: "Lincoln"}
      })
    })
    .then((_lincoln)=>{lincoln = _lincoln})
    .then(()=>{
      return User.findOne({
        where: {name: "Serene"}
      })
    })
    .then((_serene)=>{serene = _serene})
    .then(()=>{ entrepreneurship.addUser(jordan) })
    .then(()=>{ montessori.addUser(fan) })
    .then(()=>{ legos.addUser(lincoln) })
    .then(()=>{ breast_feeding.addUser(serene) })
}

module.exports = {
  seed,
  models: {
    Forum,
    User
  }
};

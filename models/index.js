const db = require('./_db');
const Forums = require('./_forums');
const Users = require('./_users');

Forums.belongsToMany(Users, {
  through: 'UserForums'
});
Users.belongsToMany(Forums, {
  through: 'UserForums'
});

const seed = ()=>{
  let bilal;
  let islam;
  return db.sync({force:true})
    .then(()=> Forums.bulkCreate([
      { topic: "Islam" },
      { topic: "Mormonism" },
      { topic: "Libertarianism" },
      { topic: "Entrepreneurship" },
      { topic: "Montessori" }
    ]))
    .then(Forums.findOne({
      where: {topic: "Islam"}
    }))
    .then((_islam)=> islam = _islam)
    .then(()=> Users.bulkCreate([
      { name: "Jordan" },
      { name: "Bilal" },
      { name: "Fan" }
    ]))
    .then(Users.findOne({
      where: {name: "Bilal"}
    }))
    .then((_bilal)=> bilal = _bilal)
}

module.exports = {
  seed,
  models: {
    Forums,
    Users
  }
}

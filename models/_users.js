const db = require('./_db');

const Users = db.define('users', {
  name: db.Sequelize.STRING
})

module.exports = Users;

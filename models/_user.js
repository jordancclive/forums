const db = require('./_db');

const User = db.define('user', {
  name: db.Sequelize.STRING
})

module.exports = User;

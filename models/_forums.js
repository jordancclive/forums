const db = require('./_db');

const Forums = db.define('forums', {
  topic: db.Sequelize.STRING
})

module.exports = Forums;

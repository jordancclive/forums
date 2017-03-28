const db = require('./_db');

const Forum = db.define('forum', {
  topic: db.Sequelize.STRING
})

module.exports = Forum;

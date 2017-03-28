const db = require('./_db');

const ForumMember = db.define('forum_member', {
  primary: db.Sequelize.BOOLEAN
})

module.exports = ForumMember;

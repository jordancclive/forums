const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL;
const db = new Sequelize(dbURL);

module.exports = db;

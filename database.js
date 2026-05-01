// config/database.js
require('dotenv').config(); // loads .env file
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,      // e.g. 'school_db'
  process.env.DB_USER,      // e.g. 'app_user' (NOT root)
  process.env.DB_PASSWORD,  // from .env file
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
// .env file (never commit this!):
// DB_NAME=school_db   DB_USER=app_user   DB_PASSWORD=secret123
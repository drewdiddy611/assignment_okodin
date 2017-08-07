const dotenv = require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: 127.0.0.1,
    dialect: 'postgres',
    define: {
      underscored: true
    },
  },
}

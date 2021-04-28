const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

exports.ppi_db = new Sequelize(process.env.DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});
exports.ct_db = new Sequelize(process.env.CT_DATABASE_URL, {
  host: 'localhost',
  dialect: 'postgres'
});
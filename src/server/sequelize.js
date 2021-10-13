const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const gdsDatabaseURL = process.env.GDS_DATABASE_URL;

exports.gdsConnector = new Sequelize(`${gdsDatabaseURL}`, {
  logging: (str) => {},
});

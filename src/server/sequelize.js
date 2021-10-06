const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const gdsUrl = process.env.GDS_URL;
const gdsDatabase = process.env.GDS_DATABASE;

exports.gdsConnector = new Sequelize(`${gdsUrl}/${gdsDatabase}`, {
  logging: (str) => {},
});

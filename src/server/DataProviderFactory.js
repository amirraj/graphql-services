const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

class DataProviderFactory {
  constructor(connection_string) {
    this.db = new Sequelize(connection_string, {
      host: "localhost",
      dialect: "postgres",
      logging: false,
    });
  }
}
module.exports = DataProviderFactory;

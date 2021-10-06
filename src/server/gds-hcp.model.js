const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("./sequelize");
dotenv.config();

let hcpModel = {
  name: "hcp",
  db_properties: {
    expert_id: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    onekey_id: {
      allowNull: true,
      unique: true,
      type: DataTypes.STRING,
    },
    full_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    first_name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    middle_name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    affiliation: {
      allowNull: true,
      type: DataTypes.STRING(1234),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
      values: [
        "Germany",
        "United States",
        "UK",
        "France",
        "Italy",
        "Spain",
        "Belgium",
        "The Netherlands",
      ],
    },
  },
  db_schema: {
    schema: `${process.env.GDS_SCHEMA}`,
    tableName: "hcp",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  },
};

const hcp = sequelize.gdsConnector.define(
  hcpModel.name,
  hcpModel.db_properties,
  hcpModel.db_schema
);

module.exports = hcp;

const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("./sequelize");
dotenv.config();

let guidelinesModel = {
  name: "guidelines",
  db_properties: {
    guideline_id: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING,
    },
    expert_id: {
      type: DataTypes.STRING,
    },
    onekey_id: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    expert_name: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    name_of_the_guideline: {
      type: DataTypes.STRING(1234),
    },
  },
  db_schema: {
    schema: `${process.env.GDS_SCHEMA}`,
    tableName: "guidelines",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  },
};

const guidelines = sequelize.gdsConnector.define(
    guidelinesModel.name,
    guidelinesModel.db_properties,
    guidelinesModel.db_schema
);

module.exports = guidelines;

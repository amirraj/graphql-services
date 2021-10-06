const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("./sequelize");
dotenv.config();

let conferenceModel = {
  name: "conference",
  db_properties: {
    conference_id: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING,
    },
    conference_title_id: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING,
    },
    expert_id: {
      allowNull: true,
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
    meeting_name: {
      type: DataTypes.STRING(1234),
    },
  },
  db_schema: {
    schema: `${process.env.GDS_SCHEMA}`,
    tableName: "conferences",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  },
};

const conferences = sequelize.gdsConnector.define(
  conferenceModel.name,
  conferenceModel.db_properties,
  conferenceModel.db_schema
);

module.exports = conferences;

const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("./sequelize");
dotenv.config();

let clinicalTrialsModel = {
  name: "clinical_trials",
  db_properties: {
    clinical_trial_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    expert_id: {
      type: DataTypes.STRING,
    },
    onekey_id: {
      type: DataTypes.STRING,
    },
    expert_name: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    trial_title: {
      type: DataTypes.STRING(1234),
    },
  },
  db_schema: {
    schema: `${process.env.GDS_SCHEMA}`,
    tableName: "clinical_trials",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  },
};

const clinicalTrials = sequelize.gdsConnector.define(
  clinicalTrialsModel.name,
  clinicalTrialsModel.db_properties,
  clinicalTrialsModel.db_schema
);

module.exports = clinicalTrials;

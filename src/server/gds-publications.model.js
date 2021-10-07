const { DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const sequelize = require("./sequelize");
dotenv.config();

let publicationsModel = {
  name: "publications",
  db_properties: {
    publication_id: {
      allowNull: true,
      unique: false,
      type: DataTypes.STRING,
    },
    additional_expert_id: {
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
    article_title: {
      type: DataTypes.STRING(1234),
    },
  },
  db_schema: {
    schema: `${process.env.GDS_SCHEMA}`,
    tableName: "publications",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  },
};

const publications = sequelize.gdsConnector.define(
  publicationsModel.name,
  publicationsModel.db_properties,
  publicationsModel.db_schema
);

module.exports = publications;

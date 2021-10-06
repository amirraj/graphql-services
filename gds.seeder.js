const async = require("async");
const dotenv = require("dotenv");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
var util = require("util");
dotenv.config();

const result = excelToJson({
  sourceFile: "gds_data.xlsx",
  sheets: [
    {
      name: "Basic",
      columnToKey: {
        A: "expert_id",
        B: "onekey_id",
        C: "full_name",
        D: "first_name",
        E: "middle_name",
        F: "last_name",
        G: "affiliation",
        H: "country",
      },
    },
    {
      name: "Conferences",
      columnToKey: {
        A: "conference_id",
        B: "conference_title_id",
        C: "expert_id",
        D: "onekey_id",
        E: "expert_name",
        F: "country",
        G: "meeting_name",
      },
    },
    {
      name: "Clinical Trials",
      columnToKey: {
        A: "clinical_trial_id",
        B: "expert_id",
        C: "onekey_id",
        D: "expert_name",
        E: "country",
        F: "trial_title",
      },
    },
  ],
});

async function init() {
  const sequelize = require("./src/server/sequelize");
  const gds_schema = process.env.GDS_SCHEMA;
  const gdsHcpModel = require("./src/server/gds-hcp.model");
  const gdsConferenceModel = require("./src/server/gds-conferences.model");
  const gdsClinicalTrialsModel = require("./src/server/gds-clinical-trials.model");

  async function gdsDbStructureSeeder() {
    await sequelize.gdsConnector.query(
      `CREATE SCHEMA IF NOT EXISTS "${gds_schema}"`
    );
    await sequelize.gdsConnector.sync();
  }

  function gdsDataSeeder() {
    gdsHcpModel.destroy({ truncate: { cascade: true } }).then(() => {
      gdsHcpModel
        .bulkCreate(result["Basic"])
        .then(() => {
          console.log(`Successful Hcp Migration.`);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    gdsConferenceModel.destroy({ truncate: { cascade: true } }).then(() => {
      gdsConferenceModel
        .bulkCreate(result["Conferences"])
        .then(() => {
          console.log(`Successful Conference Migration.`);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    gdsClinicalTrialsModel.destroy({ truncate: { cascade: true } }).then(() => {
      gdsClinicalTrialsModel
        .bulkCreate(result["Clinical Trials"])
        .then(() => {
          console.log(`Successful Clinical Trials Migration.`);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  async.waterfall([gdsDbStructureSeeder, gdsDataSeeder], function (err) {
    if (err) console.error(err);
    else console.info("DB seed completed!");
    process.exit();
  });
}

init();

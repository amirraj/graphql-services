const async = require("async");
const dotenv = require("dotenv");
const excelToJson = require("convert-excel-to-json");
dotenv.config();

const result = excelToJson({
  sourceFile: "gds_data.xlsx",
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
});

async function init() {
  const sequelize = require("./src/server/sequelize");
  const gds_schema = process.env.GDS_SCHEMA;
  const gdsHcpModel = require("./src/server/gds.hcp.model");

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
          console.log(`successful database migration.`);
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

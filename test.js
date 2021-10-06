const excelToJson = require("convert-excel-to-json");

const result = excelToJson({
  sourceFile: "gds_data.xlsx",
});

console.log(result["Basic"]);

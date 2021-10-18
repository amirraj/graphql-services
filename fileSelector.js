const glob = require("glob");

module.exports = () => {
  const files = glob.sync("GDS_*xlsx");
  const fileNameAndDates = [];
  for (const file of files) {
    let fileDate = file.split("GDS_")[1].split(".").slice(0, -1).join();
    fileDate = fileDate.replace(/_/g, "-");
    fileNameAndDates.push({
      name: file,
      date: fileDate,
    });
  }

  fileNameAndDates.sort((a, b) => new Date(b.date) - new Date(a.date));

  return fileNameAndDates[0].name;
};

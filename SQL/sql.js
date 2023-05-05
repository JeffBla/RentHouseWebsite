const { QueryFile } = require("pg-promise");
const { join: joinPath } = require("path");

// Helper for linking to external query files:
function sql(file) {
  const fullPath = joinPath(__dirname, file); // generating full path;
  return new QueryFile(fullPath, { minify: true });
}

module.exports = {
  // external queries for Users:
  //   users: {
  //     add: sql("users/create.sql"),
  //     search: sql("users/search.sql"),
  //     report: sql("users/report.sql"),
  //   },
  // external queries for Products:
  rentInfo: {
    selectCover: sql("rentInfo/selectRentInfo_cover.sql"),
    selectCover_cover: sql("rentInfo/selectRentInfo_cover_count.sql"),
    selectCoverAll_forTest: sql("rentInfo/selectRentInfo_coverAll_forTest.sql"),
  },
};

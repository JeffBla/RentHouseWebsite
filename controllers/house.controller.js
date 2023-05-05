const houseModule = require("../modules/house.module");
const filter_data = require("../modules/filter_data");

const houseSelect = (req, res) => {
  houseModule
    .SelectRentInfo_cover(req.body.isAuth, req.body.limit)
    .then((result) => {
      res.render("index", {
        houses: result,
        filter_data: filter_data,
      });
    })
    .catch((err) => {
      return res.send(err);
    });
};

const SelectAllHouseData = (req, res) => {
  houseModule
    .SelectAllRentInfo_cover_forTest(req.body.isAuth, req.body.limit)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
};

const submit_search = (req, res) => {
  console.log("data:\n" + JSON.stringify(req.body));

  houseModule
    .SelectAllRentInfo_cover_forTest(req.body.isAuth, req.body.limit)
    .then((result) => {
      res.send(result);
      //res.send({houses : result, pageCnt : ''});
    })
    .catch((err) => {
      return res.send(err);
    });
};

const testHouse = (req, res) => {
  houseModule
    .SelectRentInfo_cover(req.body.isAuth, req.body.limit)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
};

module.exports = { testHouse, houseSelect, SelectAllHouseData, submit_search };

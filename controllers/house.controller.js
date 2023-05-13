const houseModule = require("../modules/house.module");
const filter_data = require("../modules/filter_data");

const houseSelect = (req, res) => {
  res.render("index", {
    filter_data: filter_data,
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
    .SelectRentInfo_cover(
      req.body.isAuth,
      req.body.limit,
      req.body.page_num,
      req.body.order_by,
      req.body.address,
      req.body.house_type,
      req.body.price_permonth,
      req.body.published_by,
      req.body.building_type,
      req.body.area,
      req.body.floor,
      req.body.facilities,
      req.body.features,
      req.body.layout,
      req.body.min_rent_period,
      req.body.gender_requirement
    )
    .then((result) => {
      res.send(result);
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

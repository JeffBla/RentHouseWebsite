"use strict";

const express = require("express");
const router = new express.Router();
const houseCtrl = require("../controllers/house.controller");

/* eslint-disable no-unused-vars */
router.route("/").get(houseCtrl.houseSelect);

router.route("/testHouse").get(houseCtrl.SelectAllHouseData);

router.route("/submit").post(houseCtrl.submit_search);

module.exports = router;

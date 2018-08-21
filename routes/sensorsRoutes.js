const express = require("express");
const humidityMeasure = require("../plugins/humidity");
const router = express.Router();

router.get("/humidity", (req, res, next) => {
  console.log("request recieved");
  humidityMeasure(value => {
    console.log("value", value);
    res.json({ value: value });
  });
});
module.exports = router;

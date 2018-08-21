const sleep = require("../utils/utils");
const Gpio = require("onoff").Gpio;
const humidityVcc = new Gpio(25, "out");
const humidityPin = new Gpio(4, "in");

const humidityMeasure = callback => {
  humidityVcc.writeSync(1);
  let humidityValue;
  sleep(20).then(() => {
    humidityPin.read((err, value) => {
      sleep(20).then(() => humidityVcc.writeSync(0));
      humidityValue = value;
      if (err) console.log(err);
      else
        console.log("Humidity sensor:", humidityValue == 1 ? "dry" : "humid");
    });
  });
  callback(humidityValue);
};

// const interval = setInterval(function() {
// humidityMeasure();
// }, 1500);
process.on("SIGINT", () => {
  // clearInterval(interval);
  humidityPin.unexport();
  humidityVcc.unexport();
  console.log("Shutting down");
  process.exit();
});
module.exports = humidityMeasure;

let express = require("express");

let server = express();

server.use("/humidity", (req, res) => {
  console.log("request recieved");
  res.status(201).json({ humidity: 2000 });
});

server.listen(8000, () => {
  console.log("server running on port 8000");
});

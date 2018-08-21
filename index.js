let express = require("express");
const sensorsRoutes = require("./routes/sensorsRoutes");

let server = express();

server.use("/sensors", sensorsRoutes);

server.use("/", (req, res) => {
  console.log("Hello from me");
  res.json({ status: "success" });
});
server.listen(8000, () => {
  console.log("server running on port 8000");
});

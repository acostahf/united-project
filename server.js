const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

require("dotenv").config();
require("./config/database");

var cohortsRouter = require("./routes/api/cohorts");

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/cohorts", cohortsRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

const express = require("express");
// const path = require("path");

const app = express();
require("dotenv").config();

// require("dotenv").config();
require("./config/database");

var cohortsRouter = require("./routes/cohorts");
app.use("/api/cohorts", cohortsRouter);

// app.use(logger("dev"));
// app.use(express.json());

// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
// app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

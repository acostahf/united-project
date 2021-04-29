var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cohortSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    date: { type: String },
    catagory: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cohort", cohortSchema);

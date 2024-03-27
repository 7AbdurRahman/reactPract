const mongoose = require("mongoose");

const rData = mongoose.Schema({
  name: String,
  email: String,
  uname: String,
  password: String,
});

const regData = new mongoose.model("registerDetails", rData);

module.exports = regData;

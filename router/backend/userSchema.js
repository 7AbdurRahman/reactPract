const mongoose = require("mongoose");

const uData = mongoose.Schema({
  uname: String,
  password: Number,
});

const loginData = new mongoose.model("loginDetails", uData);

module.exports = loginData;

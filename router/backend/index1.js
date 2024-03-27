const express = require("express");
const app = express();
const PORT = 8002;
const cors = require("cors");
const regData = require("./registerSchema");
app.use(cors());
app.use(express.json());
require("connection.js");

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  let uname = req.body.uname;
  let password = req.body.password;

  regData
    .findOne({ uname: uname, password: password })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const regData = {
    name: req.body.name,
    email: req.body.email,
    uname: req.body.uname,
    password: req.body.password,
  };
  regData.save();
});

app.listen(PORT, () => {
  console.log(`This port is running on ${PORT}`);
});

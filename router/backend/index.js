const express = require("express");
const app = express();
const PORT = 8001;
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./connection");
const regData = require("./registerSchema");

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

  const regDetails = new regData({
    name: req.body.name,
    email: req.body.email,
    uname: req.body.uname,
    password: req.body.password,
  });

  regDetails.save();
  res.send(regDetails);
});

app.listen(PORT, () => {
  console.log(`this port is running at ${PORT}`);
});

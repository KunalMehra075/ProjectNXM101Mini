const express = require("express");
const main = express.Router();

main.get("/", (req, res) => {
  try {
    res.render("index.hbs");
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});
main.get("/login", (req, res) => {
  try {
    res.render("login.hbs");
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});
main.get("/signup", (req, res) => {
  try {
    res.render("signup.hbs");
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});
main.get("/about", (req, res) => {
  try {
    res.render("about.hbs");
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});
module.exports = { main };

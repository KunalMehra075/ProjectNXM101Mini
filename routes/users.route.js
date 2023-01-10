const express = require("express");
const { UsersModel } = require("../models/users.model");
const usersRouter = express.Router();

//? <!----------------------------------------------- < Reading Data> ----------------------------------------------->

usersRouter.get("/", async (req, res) => {
  let query = req.query;
  console.log(query);
  try {
    let data = await UsersModel.find(query);
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});

//? <!----------------------------------------------- < Creating > ----------------------------------------------->

usersRouter.post("/", async (req, res) => {
  let data = req.body;
  try {
    const instance = new UsersModel(data);
    await instance.save();
    console.log(instance);
    res.send(instance);
  } catch (err) {
    console.log(err);
    res.send({ Error: err.message });
  }
});

//? <!----------------------------------------------- < Patching> ----------------------------------------------->

usersRouter.patch("/:id", async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    await UsersModel.findByIdAndUpdate({ _id: id }, data);
    console.log("Patched Successfully");
    res.send("Patched user Successfully");
  } catch (err) {
    console.log(err);
    res.send({ Error: err.message });
  }
});

//? <!----------------------------------------------- < Deleteing> ----------------------------------------------->

usersRouter.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await UsersModel.findByIdAndDelete({ _id: id });
    console.log("Deleted Successfully");
    res.send("Deleted User Successfully");
  } catch (err) {
    console.log(err);
    res.send({ Error: err.message });
  }
});

module.exports = { usersRouter };

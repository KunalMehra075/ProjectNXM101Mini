const express = require("express");
const path = require("path");
// const hbs = require("hbs");
const { connection } = require("./db");
const { usersRouter } = require("./routes/users.route");
require("dotenv").config();

const app = express();
app.use(express.json());

// app.use("/static", express.static("public"));
// // template engines
// app.set("view engine", "hbs");
// app.set("views", "view");

app.use("/users", usersRouter);
app.get("/", (req, res) => {
  try {
    res.sendFile(__dirname + "/views/index.html");
  } catch (err) {
    console.log(err);
    res.send({ Error: err });
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB");
  }
  console.log(`Server is Running on port ${process.env.port}`);
});

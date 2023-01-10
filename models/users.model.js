const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String, required: true },
  password: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const UsersModel = mongoose.model("users", usersSchema);
module.exports = { UsersModel };

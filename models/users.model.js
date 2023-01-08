const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const UsersModel = mongoose.model("users", usersSchema);
module.exports = { UsersModel };

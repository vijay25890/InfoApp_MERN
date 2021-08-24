const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, unique: true },
  age: Number,
  city: String,
  country: String,
});

module.exports = mongoose.model("User", UserSchema);

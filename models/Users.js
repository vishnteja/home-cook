const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    maxlength: 6,
    trim: true,
    enum: ["Male", "Female", "male", "female"]
  },
  mobile: {
    type: Number,
    min: 1000000000,
    max: 9999999999
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("user", userSchema);

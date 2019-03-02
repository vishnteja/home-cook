const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const deliverySchema = new Schema({
  id: {
    type: Number,
    required: true
  },
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
  age: {
    type: Number,
    min: 1,
    max: 120
  },
  mobile: {
    type: Number,
    min: 1000000000,
    max: 9999999999
  },
  email: {
    type: String,
    required: true
  }
});

const delivery = mongoose.model("delivery", deliverySchema);

module.exports = delivery;

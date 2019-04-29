const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cust_uname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  hk_uname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  del_uname: {
    type: String,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  food_details: [
    {
      name: { type: String, required: true },
      cost: { type: Number, required: true },
      count: { type: Number, required: true }
    }
  ],
  total: {
    type: Number
  },
  order_status: {
    type: String,
    required: true,
    maxlength: 9,
    trim: true,
    enum: ["accepted", "delivery", "rejected", "completed", "on delivery"]
  }
});

module.exports = mongoose.model("order", orderSchema);

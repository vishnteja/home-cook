const express = require("express");
const router = express.Router();

// User model
const Delivery = require("../models/deliverySchema");

// @route   GET /api/delivery/
// @desc    Get all delivery personnel
// @access  Public
router.get("/", async (req, res) => {
  try {
    const deliveryDudes = await Delivery.find({});
    res.send({ deliveryDudes });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/delivery/:id
// @desc    Get a specific delivery personnel
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const deliveryDude = await Delivery.findById(req.params.id);
    res.send({ deliveryDude });
  } catch (err) {
    res.status(404).send({ message: "User not found!" });
  }
});

// @route   POST /api/delivery/
// @desc    Create a delivery personnel
// @access  Public
router.post("/", async (req, res) => {
  try {
    console.log("first");
    const newDeliveryDude = await Delivery.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      mobile: req.body.mobile,
      email: req.body.email
    });
    console.log("second");
    res.send({ newDeliveryDude });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log("reached routes/delivery.js");
  }
});

// @route   PUT /api/delivery/:id
// @desc    Update a delivery personnel
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const updatedDeliveryDude = await Delivery.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The user was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/delivery/:id
// @desc    Delete a user
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const removeDeliveryDude = await Delivery.findByIdAndRemove(req.params.id);
    res.send({ message: "The user was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;

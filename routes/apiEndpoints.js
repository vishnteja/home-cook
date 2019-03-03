const express = require("express");
const router = express.Router();

// User models
const Delivery = require("../models/deliverySchema");
const HK = require("../models/hkSchema");
const Menu = require("../models/menuSchema");

//for deliverySchema

// @route   GET /api/delivery/
// @desc    Get all delivery personnel
// @access  Public
router.get("/delivery/", async (req, res) => {
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
router.get("/delivery/:id", async (req, res) => {
  try {
    const deliveryDude = await Delivery.findById(req.params.id);
    res.send({ deliveryDude });
  } catch (err) {
    res.status(404).send({ message: "Delivery personnel not found!" });
  }
});

// @route   POST /api/delivery/
// @desc    Create a delivery personnel
// @access  Public
router.post("/delivery/", async (req, res) => {
  try {
    const newDeliveryDude = await Delivery.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      mobile: req.body.mobile,
      email: req.body.email
    });
    res.send({ newDeliveryDude });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/delivery/:id
// @desc    Update a delivery personnel
// @access  Public
router.put("/delivery/:id", async (req, res) => {
  try {
    const updatedDeliveryDude = await Delivery.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The delivery personnel was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/delivery/:id
// @desc    Delete a delivery personnel
// @access  Public
router.delete("/delivery/:id", async (req, res) => {
  try {
    const removeDeliveryDude = await Delivery.findByIdAndRemove(req.params.id);
    res.send({ message: "The delivery personnel was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//for hkSchema

// @route   GET /api/hk/
// @desc    Get all home kitchens
// @access  Public
router.get("/hk/", async (req, res) => {
  try {
    const hks = await HK.find({});
    res.send({ hks });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/hk/:id
// @desc    Get a specific home kitchen
// @access  Public
router.get("/hk/:id", async (req, res) => {
  try {
    const hk = await HK.findById(req.params.id);
    res.send({ hk });
  } catch (err) {
    res.status(404).send({ message: "Home kitchen not found!" });
  }
});

// @route   POST /api/hk/
// @desc    Create a home kitchen
// @access  Public
router.post("/hk/", async (req, res) => {
  try {
    const newHK = await HK.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      mobile: req.body.mobile,
      email: req.body.email,
      address: req.body.address
    });
    res.send({ newHK });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/hk/:id
// @desc    Update a home kitchen
// @access  Public
router.put("/hk/:id", async (req, res) => {
  try {
    const updatedHK = await HK.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "The home kitchen was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/hk/:id
// @desc    Delete a home kitchen
// @access  Public
router.delete("/hk/:id", async (req, res) => {
  try {
    const removeHK = await HK.findByIdAndRemove(req.params.id);
    res.send({ message: "The home kitchen was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//for menuSchema

// @route   GET /api/menu/
// @desc    Get all menu items
// @access  Public
router.get("/menu/", async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.send({ menus });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/menu/:id
// @desc    Get a specific menu item
// @access  Public
router.get("/menu/:id", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.send({ menu });
  } catch (err) {
    res.status(404).send({ message: "Menu item not found!" });
  }
});

// @route   POST /api/menu/
// @desc    Create a menu item
// @access  Public
router.post("/menu/", async (req, res) => {
  try {
    const newMenu = await Menu.create({
      name: req.body.name,
      cost: req.body.cost,
      count: req.body.count
    });
    res.send({ newMenu });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/menu/:id
// @desc    Update a menu item
// @access  Public
router.put("/menu/:id", async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "The menu item was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/menu/:id
// @desc    Delete a menu item
// @access  Public
router.delete("/menu/:id", async (req, res) => {
  try {
    const removeMenu = await Menu.findByIdAndRemove(req.params.id);
    res.send({ message: "The menu item was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;

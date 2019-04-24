const express = require("express");
const router = express.Router();

// User models
const Delivery = require("../models/deliverySchema");
const HK = require("../models/hkSchema");
const Menu = require("../models/menuSchema");
const Customer = require("../models/customerSchema");
const Order = require("../models/orderSchema");

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
      hkname: req.body.hkname,
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

//for customerSchema

// @route   GET /api/customer/
// @desc    Get all customers' details
// @access  Public
router.get("/customer/", async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.send({ customers });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/customer/:id
// @desc    Get a specific customer's details
// @access  Public
router.get("/customer/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.send({ customer });
  } catch (err) {
    res.status(404).send({ message: "Customer id not found!" });
  }
});

// @route   POST /api/customer/
// @desc    Create a customer
// @access  Public
router.post("/customer/", async (req, res) => {
  try {
    const newCustomer = await Customer.create({
      name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      mobile: req.body.mobile,
      email: req.body.email,
      address: req.body.address
    });
    res.send({ newCustomer });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/customer/:id
// @desc    Update a customer's details
// @access  Public
router.put("/customer/:id", async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The customer's details were updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/customer/:id
// @desc    Delete a customer
// @access  Public
router.delete("/customer/:id", async (req, res) => {
  try {
    const removeCustomer = await Customer.findByIdAndRemove(req.params.id);
    res.send({ message: "The customer was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//for orderSchema

// @route   GET /api/order/
// @desc    Get all orders' details
// @access  Public
router.get("/order/", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send({ orders });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/order/:id
// @desc    Get a specific order's details
// @access  Public
router.get("/order/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.send({ order });
  } catch (err) {
    res.status(404).send({ message: "Order id not found!" });
  }
});

// @route   POST /api/order/
// @desc    Create an order
// @access  Public
router.post("/order/", async (req, res) => {
  try {
    const newOrder = await Order.create({
      cust_uname: req.body.cust_uname,
      hk_uname: req.body.hk_uname,
      del_uname: req.body.del_uname,
      // food_details.name = req.body.food_details.name,
      total: req.body.total,
      order_status: req.body.order_status
    });
    res.send({ newOrder });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/order/:id
// @desc    Update an order's details
// @access  Public
router.put("/order/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "The order's details were updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/order/:id
// @desc    Delete an order
// @access  Public
router.delete("/order/:id", async (req, res) => {
  try {
    const removeOrder = await Order.findByIdAndRemove(req.params.id);
    res.send({ message: "The order was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;

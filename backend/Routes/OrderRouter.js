const express = require("express");

const {
  createOrder,
  getMyOrders,
} = require("../Controllers/OrderController");

const ensureAuthenticated = require("../Middlewares/AuthMiddleware");

const router = express.Router();

router.post("/", ensureAuthenticated, createOrder);

router.get("/my-orders", ensureAuthenticated, getMyOrders);

module.exports = router;
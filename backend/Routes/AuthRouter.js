// const { signup, login }=require("../Controllers/AuthController");
// const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

// const router =require('express').Router();

// router.post('/login',loginValidation,login);

// router.post('/signup',signupValidation,signup);

// module.exports=router;

const express = require("express");

const {
  signup,
  login,
  getProfile
} = require("../Controllers/AuthController");

const {
  signupValidation,
  loginValidation
} = require("../Middlewares/AuthValidation");

const ensureAuthenticated = require("../Middlewares/AuthMiddleware");

const router = express.Router();

router.post("/signup", signupValidation, signup);

router.post("/login", loginValidation, login);

router.get("/profile", ensureAuthenticated, getProfile);

module.exports = router;
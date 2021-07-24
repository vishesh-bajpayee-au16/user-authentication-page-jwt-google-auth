require("dotenv").config();
const router = require("express").Router();
const UserModel = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("./validation");
const bcrypt = require("bcrypt");

// Signup
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // checking if user is already present in database
  const emailExists = await UserModel.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already Exists");

  // hashing passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // Create new user
  const user = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    console.log(req.body.firstname);
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  // Login Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if email exists and assigning that use obj to user variable
  const user = await UserModel.findOne({ email: req.body.email });
  // checking if email is not existing
  if (!user) return res.status(400).send("Email is not found");

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Password");

  // Create and assign a Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  // assigning token to the header
  res.header("auth-token", token).send(token);

  res.send("Logged in");
});

module.exports = router;

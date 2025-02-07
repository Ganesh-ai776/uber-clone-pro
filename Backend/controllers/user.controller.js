const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const blocklistTokenModel = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");
async function registerUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.json({ token, user });
}

async function loginUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user });
}

async function getUserProfile(req, res, next) {
  const user = await userModel.findById(req.user._id);
  res.json(user);
}
async function logoutUser(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blocklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
}
module.exports = { registerUser, loginUser, getUserProfile, logoutUser };

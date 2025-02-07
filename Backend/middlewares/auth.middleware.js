const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const jwt = require("jsonwebtoken");
const blocklistTokenModel = require("../models/blacklistToken.model");

async function authUser(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isTokenBlocked = await blocklistTokenModel.findOne({ token });
  if (isTokenBlocked) {
    return res.status(401).json({ message: "Unauthorized Blocked" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded._id);
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

async function authCaptain(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isTokenBlocked = await blocklistTokenModel.findOne({ token });
  if (isTokenBlocked) {
    return res.status(401).json({ message: "Unauthorized Blocked" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.captain = await captainModel.findById(decoded._id);
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}

module.exports = { authUser, authCaptain };

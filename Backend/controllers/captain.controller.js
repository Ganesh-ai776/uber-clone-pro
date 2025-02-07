const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");
const { validationResult } = require("express-validator");

async function registerCaptain(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const existingCaptain = await captainModel.findOne({ email });
  if (existingCaptain) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const captain = await createCaptain({
    fullname,
    email,
    password,
    vehicle,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
}

module.exports = { registerCaptain };

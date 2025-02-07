const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerCaptain } = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be atleast 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color should be atleast 3 characters long"),
    body("vehicle.plateNumber")
      .isLength({ min: 3 })
      .withMessage("Plate number should be atleast 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity should be atleast 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto-rickshaw"])
      .withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);

module.exports = router;

const captainModel = require("../models/captain.model");
const createCaptain = async ({ fullname, email, password, vehicle }) => {
  if (!fullname || !email || !password || !vehicle) {
    throw new Error("All fields are required");
  }

  const captain = captainModel.create({
    fullname: { firstname: fullname.firstname, lastname: fullname.lastname },
    email,
    password,
    vehicle: {
      color: vehicle.color,
      plateNumber: vehicle.plateNumber,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    },
  });

  return captain;
};
module.exports = {
  createCaptain,
};

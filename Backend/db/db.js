const mongoose = require("mongoose");
function connectToDB() {
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}
module.exports = connectToDB;

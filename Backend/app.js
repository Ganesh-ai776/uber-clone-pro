const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./db/db");
connectToDB();
const userRouter = require("./routes/user.routes");
const captainRouter = require("./routes/captain.routes");
const cookies = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.get("/", (req, res) => {
  console.log("Hello World");
});
app.use("/users", userRouter);
app.use("/captains", captainRouter);

module.exports = app;

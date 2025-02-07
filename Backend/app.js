const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDB = require("./db/db");
connectToDB();
const router = require("./routes/user.routes");
const cookies = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

app.get("/", (req, res) => {
  console.log("Hello World");
});
app.use("/users", router);

module.exports = app;

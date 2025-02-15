// require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser');

const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const carBookingRoutes = require("./routes/carBookingRoutes");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Car-rental-system");
    console.log("Connected to Database of MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is working....");
});

app.use("/users", userRoutes);
app.use("/cars", carRoutes);
app.use("/bookings", carBookingRoutes);

const PORT = 80;
app.listen(PORT, () => {
  console.log("Server is listening on port", 80);
});
connect();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/Car-rental-system");
    console.log("Connected to Database of MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const carRoutes = require("./routes/carRoutes");

app.get("/", (req, res) => {
  res.send("server is working....");
});

app.use("/auth", authRoutes);
app.use("/cars", bookingRoutes);
app.use("/bookings", carRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening on port", 8000);
});
connect();

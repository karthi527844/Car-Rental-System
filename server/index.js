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


app.get("/", (req, res) => {
  res.send("server is working....");
});

app.use("/auth", authRoutes);


const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is listening on port", 8000);
});
connect();

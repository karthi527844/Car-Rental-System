const carModel = require("../models/carSchema");

const createCar = async (req, res) => {
  try {
    const { make, model, year, pricePerDay, availability } = req.body;

    const carDoc = new carModel({ make, model, year, pricePerDay, availability });
    await carDoc.save();
    res.status(201).json({ message: "Car created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating car" });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await carModel.find().exec();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cars" });
  }
};

module.exports = { createCar, getAllCars };
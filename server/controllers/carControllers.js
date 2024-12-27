const Car = require("../models/car");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addCars = async (req, res) => {
  const { name, brand, price, availability, model } = req.body;
  try {
    const car = new Car({ name, brand, price, availability, model });
    await car.save();

    res.status(201).json({ message: "Car added successfully", car });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.updateCar = async (req, res) => {
  const { id } = req.params;
  const { name, brand, price, availability, model } = req.body;
  try {
    const car = await Car.findByIdAndUpdate(id, { name, brand, price, availability, model }, { new: true });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });

      res.status(200).json({ message: " Car updated successfully", car });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });

      res.status(200).json({ message: "Car deleted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
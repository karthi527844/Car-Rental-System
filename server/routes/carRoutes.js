const express = require('express');
const Car = require('../models/car');
const router = express.Router();
// const {
//   getAllCars,
//   addCar,
//   updateCar,
//   deleteCar,
// } = require('../controllers/carControllers')

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500)({ msg: "Server error", error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, brand, price, availability, model } = req.body;

  try {
    const car = new Car({ name, brand, price, availability, model });
    await car.save();

    res.status(201).json({ msg: "Car added successfully", car });
  } catch (err) {
    res.status(500).json({ msg: "server error", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brand, price, availability, model } = req.body;

  try {
    const car = await Car.findByIdAndUpdate(id, { name, brand, price, availability, model }, { new: true });
    if (!car) return res.status(404).json({ message: "Car not Found" });

    res.status(200).json({ message: "Car updated successfully", car });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);
    if (!car) return res.status(404).json({ message: "Car not found" });

    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// router.get("/", getAllCars);
// router.post("/", addCar);
// router.put("/:id", updateCar);
// router.delete("/:id", deleteCar);

module.exports = router;
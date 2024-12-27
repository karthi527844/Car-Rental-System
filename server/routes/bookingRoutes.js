const express = require('express');
const booking = require('../models/booking');
const Car = require('../models/car');
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, carId, totalPrice, startDate, endDate } = req.body;

  try {
    const car = await Car.findById(carId);
    if (!car || !car.available) return res.status(404).json({ message: "Car not found" });

    const booking = await booking.create({ userId, carId, totalPrice, startDate, endDate });
    await booking.save();

    car.available = false;
    await car.save();

    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

router.get("user/:userId", async (req, res) => {
  const userId = req.params;
  try {
    const bookings = await booking.find({ userId }.populate("carId"));
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await booking.find().populate("carId userId");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

module.exports = router;
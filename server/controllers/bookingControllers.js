const Booking = require("../models/booking");
const Car = require("../models/car");

exports.createBooking = async (req, res) => {
  const { userId, carId, totalPrice, startDate, endDate } = req.body
  try {
    const car = await Car.findById(carId);
    if (!car || car.available) return
    res.status(400).json({ message: "Car is not available" });

    const booking = new Booking({
      userId,
      carId,
      totalPrice,
      startDate,
      endDate
    });
    await booking.save();

    car.available = false;
    await car.save();

    res.status(201).json({ message: "Booking created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.userBookings = async (req, res) => {
  const { id } = req.params;
  try {
    const bookings = await Booking.find({ userId: id }.populate("carId"));
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("carId");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
}
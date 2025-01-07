const bookingModel = require("../models/carBookingSchema");

const createBooking = async (req, res) => {
  try {
    const { car, user, bookingDate, endDate, status } = req.body;
    const bookingDoc = new bookingModel({
      car: car,
      user: user,
      bookingDate: bookingDate,
      endDate: endDate,
      status: status
    });
    await bookingDoc.save();
    res.status(201).json({ message: "Booking created successfully",bookingDoc });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ message: "Error creating booking" });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.find();
    console.log(bookings)
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

const getBookings = async (req, res) => {
  const id = req.params.id;
  try {
    const bookingsDoc = await bookingModel.find({ id });
    res.json({ bookingModel: bookingsDoc, message: "Bookings fetched successfully" });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ message: "Error fetching bookings" });
  }
}

module.exports = { createBooking, getAllBookings, getBookings };
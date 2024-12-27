const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: " Car", required: true },
  totalPrice: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

bookingSchema.pre("save", function (next) {
  if (this.startDate >= this.endDate) {
    return next(new Error("Start date must be before end date"));
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
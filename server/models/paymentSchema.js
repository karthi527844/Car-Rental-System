const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ["Cash", "Card"],
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  }

);

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;

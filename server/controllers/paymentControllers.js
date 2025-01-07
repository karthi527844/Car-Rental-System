const paymentModel = require("../models/paymentSchema");
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const createPayment = async (req, res) => {
  try {
    const { amount, date, paymentMethod } = req.body;
    const paymentDoc = new paymentModel({
      amount,
      date,
      paymentMethod,
    });
    await paymentDoc.save();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      date: date,
      payment_method_types: [paymentMethod],
    });
    res.json({ success: true, paymentIntent, paymentDoc, message: "Payment created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error creating payment" });
  }
}

module.exports = { createPayment };

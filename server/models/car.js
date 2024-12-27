const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  model: String,
  availability: String,
});

module.exports = mongoose.model('Car', carSchema);
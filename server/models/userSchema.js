const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const roles = {
  "admin": 1,
  "user": 2
}

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "Password must be at least 8 characters"],
  },
  role: {
    type: Number,
    enum: Object.values(roles),
    required: true,
    default: 1,
  },
},
  {
    timestamps: true,
  });

const User = mongoose.model("User", userSchema);
module.exports = User;
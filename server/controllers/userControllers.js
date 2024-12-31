const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    console.log(req.body);

    const UserDoc = new userModel({ name, email, password, role });
    await UserDoc.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user!" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server not functioning");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.password !== password)
      return res
    .status(400).json({ message: "Invalid password" });

    res.status(200).json({
      message: "Login successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.err("Server error", err);
    res.status(500).json("Server not functioning");
  }
}




module.exports = { createUser, getAllUsers, loginUser };
const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, loginUser } = require("../controllers/userControllers");

router.post("/register-user", createUser);

router.get("/get-all-users", getAllUsers);

router.post ("/login-user", loginUser);

module.exports = router;
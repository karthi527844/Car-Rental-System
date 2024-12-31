const express = require('express');
const router = express.Router();

const { getAllUsers, createUser } = require("../controllers/userControllers");

router.post("/register-user", createUser);

router.get("/get-all-users", getAllUsers);

module.exports = router;
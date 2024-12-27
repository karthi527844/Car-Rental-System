const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getAllUsers } = require("../controllers/authControllers");

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.get("/get-all-users", getAllUsers);

module.exports = router;
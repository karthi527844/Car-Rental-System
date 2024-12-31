const express = require('express');
const { createCar, getAllCars } = require('../controllers/carControllers');
const router = express.Router();

router.post("/add-car", createCar);

router.get("/get-all-cars", getAllCars);

module.exports = router;
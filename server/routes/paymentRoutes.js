const express = require('express');
const { createPayment } = require('../controllers/paymentControllers');
const router = express.Router();

router.post('/createPayment', createPayment);

module.exports = router;
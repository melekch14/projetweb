const express = require('express');
const router = express.Router();
const resController = require('../controllers/reservationController.js');

router.post('/check', resController.check);
router.post('/booknow', resController.addReservation);
router.get('/allreservations', resController.getAllReservations);

module.exports = router;

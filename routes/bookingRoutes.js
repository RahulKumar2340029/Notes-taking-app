const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

// Route for fetching available slots
router.get('/slots', BookingController.getAvailableSlots);

// Route for booking a slot
router.post('/book', BookingController.bookSlot);

// Route for canceling a booking
router.delete('/cancel', BookingController.cancelBooking);

module.exports = router;

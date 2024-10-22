const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true, // Ensures the user can only have one active booking
    },
    court: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Court',
      required: true,
    },
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Slot',
      required: true,
    },
    bookingTime: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['booked', 'cancelled'],
      default: 'booked',
    },
  });
  
  const Booking = mongoose.model('Booking', BookingSchema);
  module.exports = Booking;
  
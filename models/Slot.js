const mongoose = require('mongoose');


const SlotSchema = new mongoose.Schema({
    court: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Court',
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  });
  
  const Slot = mongoose.model('Slot', SlotSchema);
  module.exports = Slot;
  
const mongoose = require('mongoose');


const CourtSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['badminton'],
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
  });
  
  const Court = mongoose.model('Court', CourtSchema);
  module.exports = Court;
  
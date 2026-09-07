const mongoose = require('mongoose');

const bookVisitSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  location: String,
  budget: String,
  visitDate: String,
  timeSlot: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BookVisit', bookVisitSchema);

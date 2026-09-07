const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  requirement: String,
  project: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);

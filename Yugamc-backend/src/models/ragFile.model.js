const mongoose = require('mongoose');

const ragFileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  content: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RagFile', ragFileSchema);

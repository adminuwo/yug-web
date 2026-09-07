const mongoose = require('mongoose');

const chatLeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  messages: [{ 
    role: String, 
    content: String, 
    timestamp: { type: Date, default: Date.now } 
  }],
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatLead', chatLeadSchema);

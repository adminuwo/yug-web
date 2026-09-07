const mongoose = require('mongoose');
const env = require('./env');

const connectDB = () => {
  return mongoose.connect(env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB via Mongoose'))
    .catch(err => {
      console.error('MongoDB connection error:', err);
      throw err;
    });
};

module.exports = { connectDB, mongoose };

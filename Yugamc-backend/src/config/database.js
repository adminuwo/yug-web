const mongoose = require('mongoose');
const env = require('./env');

const MONGO_OPTIONS = {
  serverSelectionTimeoutMS: 10000,   // 10s timeout for each connection attempt
  heartbeatFrequencyMS: 5000,        // Ping server every 5s to detect reconnection
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  retryWrites: true,
  retryReads: true,
};

const connectDB = async () => {
  const attemptConnect = () => {
    return mongoose.connect(env.MONGO_URI, MONGO_OPTIONS)
      .then(() => console.log('[DB] Connected to MongoDB via Mongoose'))
      .catch(err => {
        console.error('[DB] MongoDB connection error:', err.message);
        console.log('[DB] Retrying connection in 5 seconds...');
        setTimeout(attemptConnect, 5000);
      });
  };

  // Handle reconnection events
  mongoose.connection.on('connected', () => console.log('[DB] Mongoose connected'));
  mongoose.connection.on('disconnected', () => {
    console.warn('[DB] Mongoose disconnected — auto-reconnect active...');
  });
  mongoose.connection.on('error', (err) => {
    console.error('[DB] Mongoose error:', err.message);
  });

  return attemptConnect();
};

module.exports = { connectDB, mongoose };


const dns = require('dns');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']); 
} catch(e) { console.warn('DNS override failed, using default.'); }
if (dns.setDefaultResultOrder) dns.setDefaultResultOrder('ipv4first');

const env = require('./config/env');
const { connectDB } = require('./config/database');
const app = require('./app');

const PORT = Number(process.env.PORT) || env.PORT || 8080;

// Start listening immediately on 0.0.0.0 so Cloud Run container startup probe passes instantly
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB asynchronously without blocking container startup
connectDB().then(() => {
  console.log('Database connected successfully.');
}).catch((err) => {
  console.error('Warning: Failed to connect to MongoDB at startup:', err.message);
});

module.exports = server;

const dns = require('dns');
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']); 
} catch(e) { console.warn('DNS override failed, using default.'); }
if (dns.setDefaultResultOrder) dns.setDefaultResultOrder('ipv4first');

const env = require('./config/env');
const { connectDB } = require('./config/database');
const app = require('./app');

// Connect to MongoDB and start server
let server;
connectDB().then(() => {
  const PORT = env.PORT;
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB. Exiting...');
  process.exit(1);
});

module.exports = server;

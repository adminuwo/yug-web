const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const env = require('./config/env');
const { globalLimiter } = require('./middleware/rateLimiter');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Security HTTP headers
app.use(helmet());

// Restrict CORS
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (/^http:\/\/localhost(:\d+)?$/.test(origin) || /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin) || env.ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS'));
  },
  credentials: true
}));

// Body parser, reading data from body into req.body, with a size limit
app.use(express.json({ limit: '50kb' }));

// Apply global rate limiting
app.use('/api', globalLimiter);

// Health Check Route
app.get('/', (req, res) => res.send('YUG AMC Backend is Live!'));

// Register Modular Routes
app.use(routes);

// Centralized Error Handling Middleware
app.use(errorHandler);

module.exports = app;

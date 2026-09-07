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
    // Allow localhost and 127.0.0.1
    if (/^http:\/\/localhost(:\d+)?$/.test(origin) || /^http:\/\/127\.0\.0\.1(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    // Allow Google Cloud Run domains (*.run.app)
    if (/^https:\/\/([a-zA-Z0-9-]+)\.run\.app$/.test(origin) || origin.endsWith('.run.app')) {
      return callback(null, true);
    }
    // Allow production domains
    if (/^https:\/\/([a-zA-Z0-9-]+\.)?uwo24\.com$/.test(origin) || /^https:\/\/([a-zA-Z0-9-]+\.)?yugamc\.com$/.test(origin)) {
      return callback(null, true);
    }
    // Allow origins configured via ALLOWED_ORIGINS env
    if (env.ALLOWED_ORIGINS && env.ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
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

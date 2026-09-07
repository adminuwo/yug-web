const rateLimit = require('express-rate-limit');

// General API rate limiter: 300 requests per 15 minutes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 300, 
  message: { success: false, error: 'Too many requests from this IP, please try again later' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

// Login rate limiter: 50 attempts per 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { success: false, error: 'Too many login attempts, please try again after a few minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Chat register limiter: 50 registrations per 15 minutes
const chatRegisterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { success: false, error: 'Too many registration attempts, please wait a moment' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Chat rate limiter: 60 messages per 5 minutes
const chatLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 60,
  message: { success: false, error: 'Too many messages sent, please wait a few minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  globalLimiter,
  loginLimiter,
  chatRegisterLimiter,
  chatLimiter
};

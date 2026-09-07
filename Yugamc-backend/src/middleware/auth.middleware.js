const jwt = require('jsonwebtoken');
const env = require('../config/env');

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.admin = decoded;
    next();
  });
};

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const expectedApiKey = env.SUPER_ADMIN_API_KEY;
  if (apiKey && apiKey === expectedApiKey) {
    return next();
  }
  return res.status(401).json({ error: 'Access denied: Invalid API Key' });
};

module.exports = {
  authenticateAdmin,
  authenticateApiKey
};

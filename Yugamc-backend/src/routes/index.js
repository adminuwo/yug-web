const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.routes');
const bookingRoutes = require('./booking.routes');
const contactRoutes = require('./contact.routes');
const chatRoutes = require('./chat.routes');

router.get('/api', (req, res) => {
  res.json({
    status: 'success',
    message: 'YUG AMC Backend API is operational',
    endpoints: {
      health: '/health',
      contact: 'POST /api/contact',
      booking: 'POST /api/book-visit',
      chat: 'POST /api/chat',
      admin: '/api/admin'
    }
  });
});

router.use('/api', adminRoutes);
router.use('/api', bookingRoutes);
router.use('/api', contactRoutes);
router.use('/api', chatRoutes);

module.exports = router;

const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.routes');
const bookingRoutes = require('./booking.routes');
const contactRoutes = require('./contact.routes');
const chatRoutes = require('./chat.routes');

router.use('/api', adminRoutes);
router.use('/api', bookingRoutes);
router.use('/api', contactRoutes);
router.use('/api', chatRoutes);

module.exports = router;

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');
const { authenticateAdmin } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');
const { bookingSchema } = require('../validators/booking.validator');

router.post('/book-visit', validate(bookingSchema), bookingController.createBooking);
router.get('/admin/book-visits', authenticateAdmin, bookingController.getBookings);
router.delete('/admin/book-visits/:id', authenticateAdmin, bookingController.deleteBooking);

module.exports = router;

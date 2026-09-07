const BookVisit = require('../models/bookVisit.model');
const { sendBookVisitEmail } = require('../services/email.service');
const { sendWebhookNotification } = require('../services/webhook.service');
const { sendRealtimeLead } = require('../services/sse.service');

const createBooking = async (req, res) => {
  const { name, phone, email, location, budget, visitDate, timeSlot } = req.body;
  console.log(`[POST /api/book-visit] Received booking from ${name} (${phone})`);

  if (!name || !phone || !email || !visitDate) {
    return res.status(400).json({ success: false, message: 'Required fields missing.' });
  }

  // 1. Save to MongoDB
  let bookingId = null;
  try {
    const bookingEntry = new BookVisit({ name, phone, email, location, budget, visitDate, timeSlot });
    const savedBooking = await bookingEntry.save();
    bookingId = savedBooking._id;
    console.log(`[DB SUCCESS] Booking saved with ID: ${bookingId}`);
  } catch (dbError) {
    console.error('[DB ERROR] Failed to save booking:', dbError);
  }

  // 2. Send Email Notification
  await sendBookVisitEmail({ name, phone, email, location, budget, visitDate, timeSlot, bookingId });

  if (bookingId) {
    // --- Trigger Webhook for Super Admin ---
    sendWebhookNotification('NEW_BOOKING', { name, phone, email, location, budget, visitDate, timeSlot, bookingId });
    sendRealtimeLead('NEW_BOOKING', { name, phone, email, location, budget, visitDate, timeSlot, bookingId });

    res.status(200).json({ success: true, message: 'Your site visit has been booked successfully! Our team will contact you shortly.' });
  } else {
    res.status(500).json({ success: false, message: 'Server error. Please try again or call us directly.' });
  }
};

const getBookings = async (req, res) => {
  try {
    const leads = await BookVisit.find().sort({ timestamp: -1 });
    res.json({ leads });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book visit leads' });
  }
};

const deleteBooking = async (req, res) => {
  try {
    await BookVisit.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book visit lead deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting lead' });
  }
};

module.exports = {
  createBooking,
  getBookings,
  deleteBooking
};

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { authenticateAdmin } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');
const { contactSchema } = require('../validators/contact.validator');

router.post('/contact', validate(contactSchema), contactController.createContactLead);
router.get('/admin/enquiries', authenticateAdmin, contactController.getEnquiries);
router.delete('/admin/enquiries/:id', authenticateAdmin, contactController.deleteEnquiry);

module.exports = router;

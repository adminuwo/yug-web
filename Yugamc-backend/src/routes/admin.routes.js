const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { authenticateAdmin, authenticateApiKey } = require('../middleware/auth.middleware');
const uploadMiddleware = require('../middleware/upload.middleware');
const { addClient } = require('../services/sse.service');
const { loginLimiter } = require('../middleware/rateLimiter');

router.post('/admin/login', loginLimiter, adminController.login);
router.post('/connector', adminController.connector);
router.get('/leads/all', authenticateApiKey, adminController.getAllLeads);
router.get('/webhook/leads', authenticateApiKey, adminController.getWebhookLeads);
router.get('/leads/stream', authenticateApiKey, (req, res) => {
  addClient(req, res);
});

router.post('/admin/upload', authenticateAdmin, uploadMiddleware, adminController.uploadFiles);
router.get('/admin/files', authenticateAdmin, adminController.getFiles);
router.delete('/admin/files/:filename', authenticateAdmin, adminController.deleteFile);

module.exports = router;

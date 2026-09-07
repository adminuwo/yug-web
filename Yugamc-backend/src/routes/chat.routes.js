const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');
const { authenticateAdmin } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');
const { chatSchema, chatRegisterSchema } = require('../validators/chat.validator');
const { chatLimiter, chatRegisterLimiter } = require('../middleware/rateLimiter');

router.post('/chat/register', chatRegisterLimiter, validate(chatRegisterSchema), chatController.registerChatLead);
router.get('/admin/chat-leads', authenticateAdmin, chatController.getChatLeads);
router.get('/admin/chat-leads/:id', authenticateAdmin, chatController.getChatLeadHistory);
router.get('/admin/chat-leads/export', authenticateAdmin, chatController.exportChatLeads);
router.post('/chat', chatLimiter, validate(chatSchema), chatController.chatWithAI);

module.exports = router;

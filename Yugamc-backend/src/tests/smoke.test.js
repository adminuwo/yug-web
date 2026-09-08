const test = require('node:test');
const assert = require('node:assert');

test('Smoke Test - Environment Config', () => {
  const env = require('../config/env');
  assert.ok(env.PORT, 'PORT configuration should exist');
  assert.ok(env.MONGO_URI, 'MONGO_URI configuration should exist');
  assert.ok(env.JWT_SECRET, 'JWT_SECRET configuration should exist');
});

test('Smoke Test - Express App Initialization', () => {
  const app = require('../app');
  assert.strictEqual(typeof app.handle, 'function', 'App should be an Express request handler');
});

test('Smoke Test - Mongoose Models Schema Validation', () => {
  const Lead = require('../models/lead.model');
  const BookVisit = require('../models/bookVisit.model');
  const ChatLead = require('../models/chatLead.model');
  const RagFile = require('../models/ragFile.model');

  assert.strictEqual(Lead.modelName, 'Lead');
  assert.strictEqual(BookVisit.modelName, 'BookVisit');
  assert.strictEqual(ChatLead.modelName, 'ChatLead');
  assert.strictEqual(RagFile.modelName, 'RagFile');
});

test('Smoke Test - Services Importability', () => {
  const emailService = require('../services/email.service');
  const sseService = require('../services/sse.service');
  const webhookService = require('../services/webhook.service');
  const chatService = require('../services/chat.service');
  const storageService = require('../services/storage.service');
  const parserService = require('../services/parser.service');

  assert.ok(emailService.sendContactLeadEmail);
  assert.ok(sseService.sendRealtimeLead);
  assert.ok(webhookService.sendWebhookNotification);
  assert.ok(chatService.generateResponse);
  assert.ok(storageService.uploadFile);
  assert.ok(parserService.extractText);
});

test('Smoke Test - Health Controller & Routes', () => {
  const healthController = require('../controllers/health.controller');
  const healthRoutes = require('../routes/health.routes');

  assert.strictEqual(typeof healthController.getHealth, 'function');
  assert.strictEqual(typeof healthController.getLiveness, 'function');
  assert.strictEqual(typeof healthController.getReadiness, 'function');
  assert.strictEqual(typeof healthController.getDetailedHealth, 'function');
  assert.ok(healthRoutes);
});


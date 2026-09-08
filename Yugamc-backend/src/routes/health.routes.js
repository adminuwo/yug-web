const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controller');

// Standard Health Check (accessible via /health and /api/health)
router.get('/health', healthController.getHealth);
router.get('/api/health', healthController.getHealth);

// Liveness Probe (container alive)
router.get('/health/live', healthController.getLiveness);
router.get('/api/health/live', healthController.getLiveness);

// Readiness Probe (database ready to accept traffic)
router.get('/health/ready', healthController.getReadiness);
router.get('/api/health/ready', healthController.getReadiness);

// Detailed Diagnostics
router.get('/health/detailed', healthController.getDetailedHealth);
router.get('/api/health/detailed', healthController.getDetailedHealth);

module.exports = router;

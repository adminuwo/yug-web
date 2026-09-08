const mongoose = require('mongoose');

const getDbStatus = () => {
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return states[mongoose.connection.readyState] || 'unknown';
};

const formatUptime = (seconds) => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(' ');
};

// General health check (Returns 200 if server process is running and responding)
const getHealth = (req, res) => {
  const dbStatus = getDbStatus();

  res.status(200).json({
    status: dbStatus === 'connected' ? 'ok' : 'initializing',
    message: 'YUG AMC Backend is Live!',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: dbStatus,
    environment: process.env.NODE_ENV || 'development',
  });
};

// Liveness probe (Returns 200 if process is up - for Cloud Run / Kubernetes)
const getLiveness = (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};

// Readiness probe (Returns 200 only if DB connection is active and ready to take traffic)
const getReadiness = (req, res) => {
  const isDbReady = mongoose.connection.readyState === 1;

  if (!isDbReady) {
    return res.status(503).json({
      status: 'unavailable',
      message: 'Database connection is not ready',
      database: getDbStatus(),
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(200).json({
    status: 'ready',
    message: 'Backend is ready to serve requests',
    database: 'connected',
    timestamp: new Date().toISOString(),
  });
};

// Detailed diagnostics and system metrics
const getDetailedHealth = async (req, res) => {
  const dbStatus = getDbStatus();
  let dbLatencyMs = null;

  if (mongoose.connection.readyState === 1 && mongoose.connection.db) {
    const start = Date.now();
    try {
      await mongoose.connection.db.admin().ping();
      dbLatencyMs = Date.now() - start;
    } catch {
      dbLatencyMs = -1;
    }
  }

  const mem = process.memoryUsage();

  res.json({
    status: dbStatus === 'connected' ? 'ok' : 'degraded',
    message: 'YUG AMC Backend System Diagnostics',
    timestamp: new Date().toISOString(),
    uptime: {
      seconds: Math.floor(process.uptime()),
      formatted: formatUptime(process.uptime()),
    },
    system: {
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      pid: process.pid,
      environment: process.env.NODE_ENV || 'development',
    },
    memory: {
      rss: `${Math.round(mem.rss / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(mem.heapTotal / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(mem.heapUsed / 1024 / 1024)} MB`,
    },
    database: {
      status: dbStatus,
      latency: dbLatencyMs !== null ? `${dbLatencyMs}ms` : 'N/A',
    },
  });
};

module.exports = {
  getHealth,
  getLiveness,
  getReadiness,
  getDetailedHealth,
};

const path = require('path');
const fs = require('fs');

const rootEnv = path.resolve(__dirname, '../../../.env');
const localEnv = path.resolve(__dirname, '../../.env');

if (fs.existsSync(rootEnv)) {
  require('dotenv').config({ path: rootEnv });
} else if (fs.existsSync(localEnv)) {
  require('dotenv').config({ path: localEnv });
} else {
  require('dotenv').config();
}

// Fallback defaults for admin/super-admin if not specified
process.env.SUPER_ADMIN_API_KEY = process.env.SUPER_ADMIN_API_KEY || 'yug-super-admin-api-key';
process.env.SUPER_ADMIN_WEBHOOK_SECRET = process.env.SUPER_ADMIN_WEBHOOK_SECRET || 'yug-super-admin-secret-2026';
process.env.ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
process.env.ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$10$d3rMmgHqAMGn6MvvSDfQ9OkX/BhT2iJS7/FrObRJshpuoE0zS7FJy';

const requiredEnv = [
  'MONGO_URI',
  'JWT_SECRET',
  'EMAIL_USER',
  'EMAIL_PASS',
  'GCP_PROJECT_ID',
  'GCS_BUCKET_NAME'
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is required but missing.`);
  }
}

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET,
  GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
  GOOGLE_LOCATION: process.env.GOOGLE_LOCATION || 'asia-south1',
  GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
  SUPER_ADMIN_API_KEY: process.env.SUPER_ADMIN_API_KEY,
  SUPER_ADMIN_WEBHOOK_URL: process.env.SUPER_ADMIN_WEBHOOK_URL,
  SUPER_ADMIN_PLATFORM_ID: process.env.SUPER_ADMIN_PLATFORM_ID || 'yugamc-id',
  SUPER_ADMIN_WEBHOOK_SECRET: process.env.SUPER_ADMIN_WEBHOOK_SECRET,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  GCS_BUCKET_NAME: process.env.GCS_BUCKET_NAME,
  ALLOWED_ORIGINS: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',').map(o => o.trim()),
};

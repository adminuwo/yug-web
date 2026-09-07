const crypto = require('crypto');
const env = require('../config/env');

const sendWebhookNotification = async (eventType, payload) => {
  const webhookUrl = env.SUPER_ADMIN_WEBHOOK_URL;
  if (!webhookUrl) return; 

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-platform-id': env.SUPER_ADMIN_PLATFORM_ID,
        'x-api-key': env.SUPER_ADMIN_API_KEY
      },
      body: JSON.stringify({
        eventType: eventType,
        data: payload
      })
    });
    console.log(`[WEBHOOK SUCCESS] Event: ${eventType} sent to Super Admin`);
  } catch (error) {
    console.error(`[WEBHOOK ERROR] Event: ${eventType} failed. Reason:`, error.message);
  }
};

const verifySignature = (signature, rawPayload, secret) => {
  if (!signature || !rawPayload || !secret) return false;
  try {
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawPayload)
      .digest('hex');

    const sigBuf = Buffer.from(signature, 'hex');
    const expectedBuf = Buffer.from(expectedSignature, 'hex');

    if (sigBuf.length !== expectedBuf.length) {
      return false;
    }
    return crypto.timingSafeEqual(sigBuf, expectedBuf);
  } catch (err) {
    return false;
  }
};

module.exports = {
  sendWebhookNotification,
  verifySignature
};

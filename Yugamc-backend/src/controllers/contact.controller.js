const Lead = require('../models/lead.model');
const { sendContactLeadEmail } = require('../services/email.service');
const { sendWebhookNotification } = require('../services/webhook.service');
const { sendRealtimeLead } = require('../services/sse.service');

const createContactLead = async (req, res) => {
  const { name, phone, email, requirement, project, message } = req.body;
  console.log(`[POST /api/contact] Received lead from ${name} (${phone})`);

  if (!name || !phone || !email || !requirement) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // 1. Save to MongoDB First (Priority)
  let leadId = null;
  try {
    const leadEntry = new Lead({ name, phone, email, requirement, project, message });
    const savedLead = await leadEntry.save();
    leadId = savedLead._id;
    console.log(`[DB SUCCESS] Lead saved with ID: ${leadId}`);
  } catch (dbError) {
    console.error('[DB ERROR] Failed to save lead:', dbError);
  }

  // 2. Send Email Notification
  await sendContactLeadEmail({ name, phone, email, requirement, project, message, leadId });

  if (leadId) {
    // --- Trigger Webhook for Super Admin ---
    sendWebhookNotification('NEW_ENQUIRY', { name, phone, email, requirement, project, message, leadId });
    sendRealtimeLead('NEW_ENQUIRY', { name, phone, email, requirement, project, message, leadId });

    res.status(200).json({ success: true, message: 'Your inquiry has been received. We will call you back.' });
  } else {
    res.status(500).json({ success: false, message: 'System error. Please call us directly.' });
  }
};

const getEnquiries = async (req, res) => {
  try {
    const dbLeads = await Lead.find().sort({ timestamp: -1 });
    const leads = dbLeads.map(l => ({
      id: l._id.toString(),
      name: l.name,
      phone: l.phone,
      email: l.email,
      requirement: l.requirement,
      project: l.project,
      message: l.message,
      timestamp: l.timestamp
    }));
    res.json({ leads });
  } catch (e) {
    console.error('Error fetching leads from DB:', e);
    res.status(500).json({ error: 'Error reading leads' });
  }
};

const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    await Lead.findByIdAndDelete(id);
    res.json({ message: 'Lead deleted' });
  } catch (e) {
    console.error('Error deleting lead from DB:', e);
    res.status(500).json({ error: 'Delete failed' });
  }
};

module.exports = {
  createContactLead,
  getEnquiries,
  deleteEnquiry
};

const ChatLead = require('../models/chatLead.model');
const RagFile = require('../models/ragFile.model');
const { sendChatRegistrationEmail } = require('../services/email.service');
const { sendWebhookNotification } = require('../services/webhook.service');
const { sendRealtimeLead } = require('../services/sse.service');
const { generateResponse } = require('../services/chat.service');

const registerChatLead = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and Email are required' });

  try {
    const newLead = new ChatLead({ name, email, messages: [] });
    await newLead.save();

    // Send Email Notification to Admin
    await sendChatRegistrationEmail(name, email);

    // --- Trigger Webhook for Super Admin ---
    sendWebhookNotification('NEW_CHAT_LEAD', { name, email, leadId: newLead._id });
    sendRealtimeLead('NEW_CHAT_LEAD', { name, email, leadId: newLead._id });

    res.json({ success: true, leadId: newLead._id });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

const getChatLeads = async (req, res) => {
  try {
    const leads = await ChatLead.find().sort({ timestamp: -1 });
    res.json({ leads });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat leads' });
  }
};

const getChatLeadHistory = async (req, res) => {
  try {
    const lead = await ChatLead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    res.json({ lead });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
};

const exportChatLeads = async (req, res) => {
  try {
    const leads = await ChatLead.find().sort({ timestamp: -1 });
    let csv = 'Name,Email,Registration Time,Message Count\n';
    leads.forEach(l => {
      csv += `"${l.name}","${l.email}","${l.timestamp.toISOString()}","${l.messages.length}"\n`;
    });
    res.header('Content-Type', 'text/csv');
    res.attachment('yug_amc_chat_leads.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Export failed' });
  }
};

const chatWithAI = async (req, res) => {
  const { message, history, leadId } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  try {
    // If leadId is provided, save user message
    if (leadId) {
      await ChatLead.findByIdAndUpdate(leadId, {
        $push: { messages: { role: 'user', content: message } }
      });
    }

    // Get Dynamic RAG Context from DB (Select only content to save memory)
    const ragEntries = await RagFile.find({}, 'content');
    let contextLines = ragEntries.map(f => f.content).join("\n\n---\n\n");
    
    // Cap context size to ~20,000 characters to avoid exceeding token limits
    if (contextLines.length > 20000) {
      contextLines = contextLines.substring(0, 20000) + "\n...[Context Truncated]...";
    }

    const responseText = await generateResponse(message, history, contextLines);
    
    // If leadId is provided, save model response
    if (leadId) {
      await ChatLead.findByIdAndUpdate(leadId, {
        $push: { messages: { role: 'model', content: responseText } }
      });
    }

    res.json({ response: responseText });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Assistant error', details: error.message });
  }
};

module.exports = {
  registerChatLead,
  getChatLeads,
  getChatLeadHistory,
  exportChatLeads,
  chatWithAI
};

import { ENDPOINTS } from '../config/api';

export const sendChatMessage = async (message, history, leadId) => {
  const response = await fetch(ENDPOINTS.assistant.chat, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      history: history.length > 1 ? history : [],
      leadId
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.details || data.error || 'Failed to send message');
  }
  return data;
};

export const registerLead = async (regData) => {
  const response = await fetch(ENDPOINTS.assistant.register, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(regData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Registration failed');
  }
  return data;
};

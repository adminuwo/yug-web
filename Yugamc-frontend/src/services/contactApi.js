import { ENDPOINTS } from '../config/api';

export const submitContact = async (formData) => {
  const response = await fetch(ENDPOINTS.contact, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to send message.');
  }
  return data;
};

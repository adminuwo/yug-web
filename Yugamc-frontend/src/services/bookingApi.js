import { ENDPOINTS } from '../config/api';

export const bookVisit = async (formData) => {
  const response = await fetch(ENDPOINTS.booking, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }
  return data;
};

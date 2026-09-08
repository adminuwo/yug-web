// Centralized Single API Endpoint from Environment Variable (VITE_API_URL)
// Frontend connects to the backend through this single endpoint base.
// In Local Dev: VITE_API_URL=/api is forwarded by Vite Proxy to http://localhost:8080.
// In Production: Express server handles /api on the single Cloud Run domain.
// If an external host is specified in .env, it routes all API calls to that host.

const getNormalizedApiBase = () => {
  let url = (import.meta.env.VITE_API_URL || '/api').trim().replace(/\/+$/, '');
  if (!url) return '/api';
  if (!url.endsWith('/api')) {
    url = `${url}/api`;
  }
  return url;
};

export const API_BASE_URL = getNormalizedApiBase();

export const ENDPOINTS = {
  admin: {
    login: `${API_BASE_URL}/admin/login`,
    enquiries: `${API_BASE_URL}/admin/enquiries`,
    enquiryDetail: (id) => `${API_BASE_URL}/admin/enquiries/${id}`,
    files: `${API_BASE_URL}/admin/files`,
    fileDetail: (filename) => `${API_BASE_URL}/admin/files/${filename}`,
    upload: `${API_BASE_URL}/admin/upload`,
    chatLeads: `${API_BASE_URL}/admin/chat-leads`,
    chatLeadsExport: `${API_BASE_URL}/admin/chat-leads/export`,
    bookVisits: `${API_BASE_URL}/admin/book-visits`,
    bookVisitDetail: (id) => `${API_BASE_URL}/admin/book-visits/${id}`,
  },
  assistant: {
    chat: `${API_BASE_URL}/chat`,
    register: `${API_BASE_URL}/chat/register`,
  },
  contact: `${API_BASE_URL}/contact`,
  booking: `${API_BASE_URL}/book-visit`,
  health: `${API_BASE_URL}/health`,
};

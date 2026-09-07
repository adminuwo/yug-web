export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://yugamc-backend-246449377479.asia-south1.run.app';

export const ENDPOINTS = {
  admin: {
    login: `${API_BASE_URL}/api/admin/login`,
    enquiries: `${API_BASE_URL}/api/admin/enquiries`,
    enquiryDetail: (id) => `${API_BASE_URL}/api/admin/enquiries/${id}`,
    files: `${API_BASE_URL}/api/admin/files`,
    fileDetail: (filename) => `${API_BASE_URL}/api/admin/files/${filename}`,
    upload: `${API_BASE_URL}/api/admin/upload`,
    chatLeads: `${API_BASE_URL}/api/admin/chat-leads`,
    chatLeadsExport: `${API_BASE_URL}/api/admin/chat-leads/export`,
    bookVisits: `${API_BASE_URL}/api/admin/book-visits`,
    bookVisitDetail: (id) => `${API_BASE_URL}/api/admin/book-visits/${id}`,
  },
  assistant: {
    chat: `${API_BASE_URL}/api/chat`,
    register: `${API_BASE_URL}/api/chat/register`,
  },
  contact: `${API_BASE_URL}/api/contact`,
  booking: `${API_BASE_URL}/api/book-visit`,
};

import { ENDPOINTS } from '../config/api';

const authenticatedFetch = async (url, options = {}) => {
  const token = localStorage.getItem('adminToken');
  const headers = {
    'Authorization': token ? `Bearer ${token}` : '',
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    window.dispatchEvent(new CustomEvent('admin-unauthorized'));
    throw new Error('Session expired');
  }

  return response;
};

export const adminLogin = async (credentials) => {
  const response = await fetch(ENDPOINTS.admin.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Invalid username or password');
  }
  return data;
};

export const getEnquiries = async () => {
  const response = await authenticatedFetch(ENDPOINTS.admin.enquiries);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch enquiries');
  return data.leads || [];
};

export const getFiles = async () => {
  const response = await authenticatedFetch(ENDPOINTS.admin.files);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch files');
  return data.files || [];
};

export const getChatLeads = async () => {
  const response = await authenticatedFetch(ENDPOINTS.admin.chatLeads);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch chat leads');
  return data.leads || [];
};

export const getSiteVisits = async () => {
  const response = await authenticatedFetch(ENDPOINTS.admin.bookVisits);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to fetch site visits');
  return data.leads || [];
};

export const exportLeads = async () => {
  const response = await authenticatedFetch(ENDPOINTS.admin.chatLeadsExport);
  if (!response.ok) throw new Error('Export failed');
  return await response.blob();
};

export const deleteEnquiry = async (id) => {
  const response = await authenticatedFetch(ENDPOINTS.admin.enquiryDetail(id), {
    method: 'DELETE',
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to delete enquiry');
  return data;
};

export const deleteSiteVisit = async (id) => {
  const response = await authenticatedFetch(ENDPOINTS.admin.bookVisitDetail(id), {
    method: 'DELETE',
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to delete site visit');
  return data;
};

export const uploadFiles = async (formData) => {
  const response = await authenticatedFetch(ENDPOINTS.admin.upload, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to upload files');
  return data;
};

export const deleteFile = async (filename) => {
  const response = await authenticatedFetch(ENDPOINTS.admin.fileDetail(filename), {
    method: 'DELETE',
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Failed to delete file');
  return data;
};

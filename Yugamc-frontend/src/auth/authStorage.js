export const getToken = () => localStorage.getItem('adminToken');
export const setToken = (token) => localStorage.setItem('adminToken', token);
export const removeToken = () => localStorage.removeItem('adminToken');

export const logout = () => {
  removeToken();
  window.location.href = '/admin/login';
};

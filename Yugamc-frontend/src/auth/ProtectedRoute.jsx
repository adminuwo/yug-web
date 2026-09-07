import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getToken, removeToken } from './authStorage';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    const handleUnauthorized = () => {
      removeToken();
      alert('Your session has expired. Please log in again.');
      navigate('/admin/login');
    };

    window.addEventListener('admin-unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('admin-unauthorized', handleUnauthorized);
    };
  }, [navigate]);

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

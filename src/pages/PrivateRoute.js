import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userId = localStorage.getItem('userId');  // Check if userId exists in localStorage

  return userId ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

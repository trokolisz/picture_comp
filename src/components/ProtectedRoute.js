// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, role, children }) => {
   if (!user) {
      return <Navigate to="/login" />;
   }
   if (user.role !== role) {
      return <Navigate to="/" />;
   }
   return children;
};

export default ProtectedRoute;

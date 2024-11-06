import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompetitionOverview from './pages/CompetitionOverview';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import AdminDashboard from './pages/AdminDashboard';
import JudgeDashboard from './pages/JudgeDashboard';
import TeamDashboard from './pages/TeamDashboard';
import LoginPage from './pages/LoginPage';
import { auth } from './firebase/firebaseConfig';
import ProtectedRoute from './components/ProtectedRoute';





function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionOverview />} />
      <Route path="/admin" element={<ProtectedRoute user={user} role="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/judge" element={<ProtectedRoute user={user} role="judge"><JudgeDashboard /></ProtectedRoute>} />
      <Route path="/team" element={<ProtectedRoute user={user} role="competitor"><TeamDashboard /></ProtectedRoute>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>

  );
}
export default App;

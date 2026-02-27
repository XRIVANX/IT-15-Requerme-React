import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route - Standalone */}
        <Route path="/" element={<div className="login-theme"><Login /></div>} />
        
        {/* Dashboard Route - Standalone */}
        <Route path="/dashboard" element={<div className="dashboard-theme"><Dashboard /></div>} />
        
        {/* Redirect any unknown routes back to Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

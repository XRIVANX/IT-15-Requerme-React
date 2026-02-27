import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, ChevronRight, Fingerprint } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // This triggers the high-tech redirect to your dashboard
    console.log("Authenticating...", { email, password });
    navigate('/dashboard'); 
  };

  return (
    <div className="login-container">
      <div className="bg-glow purple"></div>
      <div className="bg-glow cyan"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="login-card"
      >
        <div className="login-header">
          <div className="auth-icon-wrapper">
            <Fingerprint size={40} className="auth-icon" />
            <div className="icon-pulse"></div>
          </div>
          <h1>GWAPO<span>KO</span></h1>
          <p>AUTHORIZED PERSONNEL ONLY</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input 
              type="email" 
              placeholder="Terminal ID (Email)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input 
              type="password" 
              placeholder="Access Key" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0, 242, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="login-button"
          >
            INITIALIZE SESSION <ChevronRight size={18} />
          </motion.button>
        </form>

        <div className="login-footer">
          <p>System status: <span>Secured</span></p>
          <a href="#reset">Forgot Access Key?</a>
        </div>
        
        <div className="card-scanner"></div>
      </motion.div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, ShieldAlert, Cpu, Palette, Sliders } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="settings-container"
    >
      <div className="settings-header">
        <h2><SettingsIcon size={24} /> SYSTEM CONFIGURATION</h2>
      </div>

      <div className="settings-grid">
        {/* Security Section */}
        <div className="settings-card">
          <div className="settings-card-title">
            <ShieldAlert size={20} className="icon-cyan" />
            <h3>Security Protocol</h3>
          </div>
          <div className="setting-row">
            <span>Two-Factor Authentication</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-row">
            <span>Biometric Scanner Access</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Interface Section */}
        <div className="settings-card">
          <div className="settings-card-title">
            <Palette size={20} className="icon-purple" />
            <h3>Interface Styles</h3>
          </div>
          <div className="setting-row">
            <span>Neon Accents (Cyan/Purple)</span>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-row">
            <span>Glassmorphism Effects</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Performance Section */}
        <div className="settings-card full-width">
          <div className="settings-card-title">
            <Cpu size={20} className="icon-cyan" />
            <h3>System Performance</h3>
          </div>
          <div className="performance-meter">
            <div className="meter-label">
              <span>CPU Load</span>
              <span>24%</span>
            </div>
            <div className="meter-bar">
              <motion.div 
                className="meter-fill"
                initial={{ width: 0 }}
                animate={{ width: "24%" }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
          <button className="reboot-btn">INITIALIZE SYSTEM REBOOT</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;

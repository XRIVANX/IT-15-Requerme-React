import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users as UsersIcon, 
  Settings as SettingsIcon, 
  Bell, 
  Search, 
  Package,
  LogOut // Added this
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added this
import './Dashboard.css'; 

import Orders from '../Orders/Orders';
import Users from '../Users/Users';
import Settings from '../Settings/Settings';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [activeTab, setActiveTab] = useState('dashboard');

  // Function to handle logout
  const handleLogout = () => {
    // You could clear localStorage/sessionStorage here if needed
    console.log("Terminating session...");
    navigate('/'); // Sends user back to Login page
  };

  const cards = [
    { title: 'Total Revenue', value: '$54,230', icon: <BarChart3 /> },
    { title: 'Active Users', value: '1,284', icon: <UsersIcon /> },
    { title: 'New Users', value: '42', icon: <SettingsIcon /> },
  ];

  return (
    <div className="dashboard-container">
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="sidebar"
      >
        <div className="logo">Gwapo<span>KO</span></div>
        <nav style={{ flex: 1 }}>
          <div 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20}/> Dashboard
          </div>
          
          <div 
            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <UsersIcon size={20}/> Users
          </div>

          <div 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <Package size={20}/> Orders
          </div>

          <div 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <SettingsIcon size={20}/> Settings
          </div>
        </nav>

        {/* Logout Button at the bottom of sidebar */}
        <div className="nav-item logout-item" onClick={handleLogout}>
          <LogOut size={20} /> Logout
        </div>
      </motion.aside>

      <main className="main-content">
        <header>
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search parameters..." />
          </div>
          <div className="header-actions">
            <Bell size={20} className="icon-glow" />
            <div className="profile-badge"></div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <>
            <section className="stats-grid">
              {cards.map((card, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="stat-card"
                >
                  <div className="card-header">
                    <span className="card-icon">{card.icon}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="card-value">{card.value}</p>
                  <div className="card-progress">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="progress-bar" 
                    />
                  </div>
                </motion.div>
              ))}
            </section>

            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="visualizer-section"
            >
              <div className="chart-placeholder">
                <div className="scanning-line"></div>
                <p>SYSTEM DATA VISUALIZER ACTIVE</p>
              </div>
            </motion.section>
          </>
        )}

        {activeTab === 'orders' && <Orders />}
        {activeTab === 'users' && <Users />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  );
};

export default Dashboard;
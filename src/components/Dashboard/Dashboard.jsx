import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, Users, Settings, Bell, Search } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const cards = [
    { title: 'Total Revenue', value: '$54,230', change: '+12.5%', icon: <BarChart3 /> },
    { title: 'Active Users', value: '1,284', change: '+3.2%', icon: <Users /> },
    { title: 'System Load', value: '42%', change: '-5%', icon: <Settings /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="sidebar"
      >
        <div className="logo">NEURAL<span>OS</span></div>
        <nav>
          <div className="nav-item active"><LayoutDashboard size={20}/> Dashboard</div>
          <div className="nav-item"><BarChart3 size={20}/> Analytics</div>
          <div className="nav-item"><Users size={20}/> Team</div>
          <div className="nav-item"><Settings size={20}/> Settings</div>
        </nav>
      </motion.aside>

      {/* Main Content */}
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
                <span className="card-percent">{card.change}</span>
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
      </main>
    </div>
  );
};

export default Dashboard;
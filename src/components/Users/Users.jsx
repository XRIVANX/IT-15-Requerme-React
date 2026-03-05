import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield, Zap, Globe, Mail, ShieldAlert, ShieldOff } from 'lucide-react';
import './Users.css';

const Users = () => {
  // Expanded dataset with Active and Non-Active personnel
  const userData = [
    { id: 1, name: "Dr. Aris Thorne", role: "System Admin", status: "Online", access: "Level 5" },
    { id: 2, name: "Sarah Connor", role: "Security Lead", status: "Online", access: "Level 4" },
    { id: 3, name: "Julian Vane", role: "Data Scientist", status: "Away", access: "Level 3" },
    { id: 4, name: "Kaelen Flynn", role: "Network Tech", status: "Offline", access: "Level 2" },
    { id: 5, name: "Elena Rossi", role: "UI Designer", status: "Online", access: "Level 3" },
    { id: 6, name: "Marcus Wright", role: "Infiltration", status: "Offline", access: "Level 4" },
    { id: 7, name: "Kyle Reese", role: "Tactical Lead", status: "Online", access: "Level 4" },
    { id: 8, name: "T-800 Model 101", role: "Heavy Support", status: "Away", access: "Level 5" },
    { id: 9, name: "John Connor", role: "Resistance Leader", status: "Online", access: "Level 5" },
    { id: 10, name: "Dani Ramos", role: "Operations", status: "Offline", access: "Level 2" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="users-container"
    >
      <div className="users-header">
        <h2>
          <UserCheck size={24} /> 
          PERSONNEL DIRECTORY ({userData.length})
        </h2>
      </div>

      <div className="users-grid">
        {userData.map((user, index) => (
          <motion.div 
            key={user.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`user-card ${user.status === 'Offline' ? 'offline-card' : ''}`}
          >
            <div className="user-avatar">
              {/* Dynamic icon based on status */}
              {user.status === 'Online' ? (
                <Shield size={32} className="shield-icon" />
              ) : user.status === 'Away' ? (
                <ShieldAlert size={32} style={{ color: '#ffcc00' }} />
              ) : (
                <ShieldOff size={32} style={{ color: '#555' }} />
              )}
              
              <div className={`status-dot ${user.status.toLowerCase()}`}></div>
            </div>
            
            <div className="user-info">
              <h3>{user.name}</h3>
              <p className="user-role">{user.role}</p>
              
              <div className="user-tags">
                <span className="access-tag"><Zap size={12} /> {user.access}</span>
                <span className={`status-tag ${user.status === 'Online' ? 'active-label' : 'inactive-label'}`}>
                  {user.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="user-actions">
              <button className="action-btn" title="Send Message"><Mail size={16} /></button>
              <button className="action-btn" title="View Profile"><Globe size={16} /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Users;

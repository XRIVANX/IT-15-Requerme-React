import React from 'react';
import { motion } from 'framer-motion';
import { Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import './Orders.css';

const Orders = () => {
  const orderData = [
    { id: "#8842", customer: "Alex Rivera", product: "Cyber-Link Pro", status: "Completed", amount: "$299.00" },
    { id: "#8843", customer: "Sarah Chen", product: "Neural Interface", status: "Pending", amount: "$850.00" },
    { id: "#8844", customer: "Marcus Volt", product: "Data Shard 1TB", status: "Processing", amount: "$45.00" },
    { id: "#8845", customer: "Elena Frost", product: "Bio-Sensor v2", status: "Completed", amount: "$1,200.00" },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle size={16} className="status-icon green" />;
      case 'Pending': return <Clock size={16} className="status-icon yellow" />;
      default: return <AlertCircle size={16} className="status-icon blue" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="orders-section"
    >
      <div className="section-header">
        <h2><Package size={24} /> SYSTEM ORDERS</h2>
        <span className="live-indicator">LIVE FEED</span>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>PRODUCT</th>
              <th>STATUS</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <motion.tr 
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="id-cell">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {getStatusIcon(order.status)} {order.status}
                  </span>
                </td>
                <td className="amount-cell">{order.amount}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Orders;
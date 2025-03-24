// src/dashboard/Dashboardd.jsx
import React from 'react';
import '../dashboard/dashstyle/Mydashboard.css'; // Import CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Dashboardd() {
  const navigate = useNavigate();

  const handleManageProducts = () => {
    navigate('/dashboard/allproducts'); // Navigate to All Products
  };

  return (
    <div className="dashboard-container">
      <h1>Electronics Shop Dashboard</h1>
      <p>Welcome to the central hub for managing your electronics store.</p>
      <div className="dashboard-summary">
        <div className="summary-item summary-revenue">
          <h2>Total Revenue</h2>
          <p>$125,000</p>
        </div>
        <div className="summary-item summary-orders">
          <h2>New Orders</h2>
          <p>250</p>
        </div>
        <div className="summary-item summary-stock">
          <h2>Products in Stock</h2>
          <p>1,200</p>
        </div>
      </div>
      <button className="manage-products-button" onClick={handleManageProducts}>
        Manage Products
      </button>
    </div>
  );
}

export default Dashboardd;
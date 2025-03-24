// Sidebar.jsx
import React from 'react';
import '../dashboard/dashstyle/Sidebardash.css';
import image from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Sidebar() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={image} alt="ELECTRONICS Shop" className="logo-image" />
        <span>ELECTRONICS SHOP</span>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/Mydashboard')}>
              <i className="fas fa-th-large"></i> Mydashboard
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/Products')}>
              <i className="fas fa-shopping-cart"></i> All Product
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/Product')}>
              <i className="fas fa-plus-circle"></i> Add Product
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/orders')}>
              <i className="fas fa-shopping-cart"></i> Orders
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/payments')}>
              <i className="fas fa-money-bill-wave"></i> Payments
            </a>
          </li>
          <li>
            <a href="" onClick={() => handleNavigation('/dashboard/categories')}>
              <i className="fas fa-tags"></i> Categories
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
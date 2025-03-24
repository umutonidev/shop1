// Navbar.jsx
import React from 'react';
import image from "../assets/profile.jpg";
import '../dashboard/dashstyle/Navbardash.css'; // Import CSS file
import '../dashboard/dashstyle/Navbardash.css'; // Import Navbar.css for specific styling


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle">
          <i className="fas fa-bars"></i> {/* Font Awesome Hamburger Icon */}
        </button>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <img src={image} alt="Profile" className="profile-image" />
          <span className="admin-label">Admin</span>
          <button className="logout-button">
            <a href="/Loginform">Logout</a></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
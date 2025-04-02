import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { IoMdSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const shopCategories = [
    { name: 'Camera', icon: 'camera' },
    { name: 'Speaker', icon: 'speaker' },
    { name: 'Smart TV', icon: 'tv' },
    { name: 'Smart Phone', icon: 'smartphone' }
  ];

  return (
  
      <div className="vi-connect-navbar">
        <div className="top-navbar">
          <div className="logo">
            <span>FRI ELECTRONICS</span>
            <span className="logo-suffix">Shop</span>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search Product Here..." 
              className="search-input" 
            />
            <button className="search-button">
              <i className="search-icon"><IoMdSearch /></i>
            </button>
          </div>
          
          <div className="navbar-icons">
            <Link to="/Unpayed" className="icon-item">
              <span><FaHeart /></span>
              <span>Un paid Orders</span>
            </Link>
            
            <Link to="/Loginform" className="icon-item">
              <span><IoPersonCircle /></span>
              <span>Login or Register</span>
            </Link>
            
            <Link to="/Frw" className="icon-item">
              <span>🛒</span>
              <span>RWF</span>
            </Link>
          </div>
        </div>
        
        <div className="bottom-navbar">
          <div 
            className="shop-categories-dropdown"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <div className="shop-categories-trigger">
              <span>SHOP CATEGORIES</span>
              <span className="dropdown-icon">▼</span>
            </div>
            
            {showCategories && (
              <div className="categories-overlay">
                {shopCategories.map((category) => (
                  <Link 
                    key={category.name} 
                    to={`/category/${category.name.toLowerCase().replace(' ', '-')}`} 
                    className="category-item"
                  >
                    <span>{category.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="nav-links">
            <Link to="/store">STORE</Link>
            <Link to="/blog">BLOGS</Link>
            <Link to="/contact">CONTACTS</Link>
          </div>
        </div>
      </div>
  
  );
};

export default Navbar;
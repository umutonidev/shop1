import React, { useState } from 'react';
import '../Styles/Navbar.css'; // Import the CSS file
import image from'../assets/logo.jpg'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa"
import { PiShoppingCartLight } from "react-icons/pi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { BiGridHorizontal } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  const handleShopCategoriesHover = () => {
    setOverlayContent(
      <div className="shop-categories-overlay">
        <ul>
          <li>Camera</li>
          <li>Smart Phone</li>
          <li>Speakers</li>
          <li>Smart Tv</li>
        </ul>
      </div>
    );
  };

  const handleShopCategoriesMouseLeave = () => {
    setOverlayContent(null);
  };

  return (
    <nav className="navbar">
      {/* <div className="top-bar">
        <div className="top-bar-content">
          Free shipping Over 10000 & Free Returns
        </div>
        <div className="top-bar-hotline">
          Hotline:+250 787951809
        </div>
      </div> */}

      <div className="main-nav">
        <div className="logo">
          <img src={image} alt="Logo" /> {/* Replace with your actual logo URL */}
          <span className="shop-text">ELECTRONICS Shop</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Product Here...." />
          <button>
            <i className="fas fa-search"><IoIosSearch /></i> {/* Font Awesome search icon */}
          </button>
        </div>

        <div className="nav-icons">
          <div className="nav-icon">
            <i className="heart"><a href="Unpayed"><CiHeart /></a></i> {/* Font Awesome heart icon */}
            <span className='paid'> Un paid <br />
            orders
            
            </span>
           
            
          </div>
          <div className="nav-icon">
            <i className="user"><a href="/Loginform"><FaRegUserCircle/></a>  </i> {/* Font Awesome user icon */}
            <span>Login 
              <br />
              or register</span>
            
          </div>
          <div className="nav-icon">
            <i className="cart"><a href="Frw"><PiShoppingCartLight /></a></i> {/* Font Awesome shopping cart icon */}
            <span>RWF</span>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <div
          className="shop-categories"
          onMouseEnter={handleShopCategoriesHover}
          onMouseLeave={handleShopCategoriesMouseLeave}
        >
          <i className="fas fa-th"><BiGridHorizontal />
          </i> {/* Font Awesome grid icon */}
          <span>SHOP CATEGORIES</span>
          <i className="fas fa-chevron-down"><IoMdArrowDropdownCircle />
          </i> {/* Font Awesome down arrow icon */}
          {overlayContent}
        </div>
        <div className="nav-links">

          <a href="/Store">STORE</a> 
          <a href="/Blog">BLOGS</a>
         <a href="/Contact">CONTACTS</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar
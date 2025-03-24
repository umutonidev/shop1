import React from "react";
import "../Styles/Footer.css";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-content">
          <FaInstagram className="newsletter-icon" />
          <h3>Sign Up for Newsletter</h3>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Contact us</h4>
          <p>Hno: 345 Near City Market, <br /> Downtown Kigali City <br /> PinCode: 345436665456</p>
          <p>+250 787951809</p>
          <p>ufridaus52@gmail.com</p>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Refund Policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Accounts</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Contact</li>
            <li>Our Store</li>
            <li>Cart</li>
            <li>Login / Register</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025; Powered by Klab</p>
      </div>
    </footer>
  );
};

export default Footer;

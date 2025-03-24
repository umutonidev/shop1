// Contact.jsx

import React from 'react';
import '../Styles/Contact.css'; // Import CSS
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

function Contact() {
  return (
    <div className="contact-container">
      <div className="header">
        <span>Home</span> / <span>Contact Us</span>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127651.38934190405!2d30.01901877715722!3d-1.955697126640534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca468ca02141d%3A0x1f30513531d0d56!2sKigali!5e0!3m2!1sen!2srw!4v1683649182764!5m2!1sen!2srw"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form and Details Section */}
      <div className="contact-info-section">
        <div className="contact-form">
          <h2>Contact</h2>
          <form>
            <div className="input-group">
              <span className="icon"><i className="fas fa-user"><FaUser /></i></span>
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="input-group">
              <span className="icon"><i className="fas fa-envelope"><MdEmail /></i></span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <span className="icon"><i className="fas fa-phone"><FaPhoneAlt /></i></span>
              <input type="tel" required />
              <label>Phone Number</label>
            </div>
            <div className="input-group textarea">
              <span className="icon"><i className="fas fa-comment"><MdEmail /></i></span>
              <textarea required></textarea>
              <label>Your Message</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Get In Touch</h2>
          <ul>
            <li>
              <span className="icon"><i className="fas fa-map-marker-alt"><FaHouse /></i></span>
              <span>Hno:277, Near Downtown , Kigali city , Rwanda Kigali city</span>
            </li>
            <li>
              <span className="icon"><i className="fas fa-phone"><FaPhoneAlt /></i></span>
              <span>+ 250 698765498765</span>
            </li>
            <li>
              <span className="icon"><i className="fas fa-envelope"><MdEmail /></i></span>
              <span>viconnekt@gmail.com</span>
            </li>
            <li>
              <span className="icon"><i className="fas fa-clock"><MdEmail /></i></span>
              <span>Monday - Friday 10 AM - 8 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
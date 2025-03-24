// src/components/Profile.jsx
import React from 'react';
import '../dashboard/dashstyle/Profile.css';
import profileImage from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>

      <main className="profile-main">
        <div className="profile-image-container">
          <img src={profileImage} alt="User Profile" className="profile-image" />
        </div>

        <section className="profile-info">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> Fridaus dev</p>
          <p><strong>Email:</strong> dev52@gmail.com</p>
          <p><strong>Location:</strong> Kigali, Rwanda</p>
        </section>

        <section className="profile-details">
          <h2>Account Details</h2>
          <p><strong>Membership Date:</strong> April 2, 2000</p>
          <p><strong>Last Login:</strong> October 26, 2023</p>
        </section>

        <section className="profile-actions">
          <h2>Actions</h2>
          <button className="profile-button">Edit Profile</button>
          <button className="profile-button">Change Password</button>
        </section>
      </main>
    </div>
  );
}

export default Profile;
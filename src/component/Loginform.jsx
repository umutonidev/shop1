import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import '../Styles/Loginform.css'; // Import the CSS file
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await fetch('https://electronicsbackend.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      console.log('Login successful:', data);
      alert('Login successful!');

      // Save user data (optional: token storage)
      localStorage.setItem('user', JSON.stringify(data));

      // Redirect to the dashboard
      navigate('/dashboard/Categories');

    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-page">
      {/* Navigation/Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="breadcrumb-separator">/</span>
          <span>Login</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="input-icon">
              <MdOutlineMail />
            </div>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="input-icon">
              <RiLockPasswordLine />
            </div>
          </div>

          <a href="/forgot-password" className="form-link">Forgot Password?</a>

          <a href="/signup" className="form-link">Signup?</a>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

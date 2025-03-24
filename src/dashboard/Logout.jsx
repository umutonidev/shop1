import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../dashboard/dashstyle/Logout.css';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication data
    localStorage.removeItem('authToken'); // Example: Remove auth token
    sessionStorage.clear();              // Clear session storage

    // ✅ Ensure navigation happens immediately after clearing storage
    setTimeout(() => {
      navigate('/loginform', { replace: true }); // Force navigation
    }, 1500);

  }, [navigate]);

  return (
    <div className="logout-container">
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;

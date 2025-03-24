import React, { useState } from 'react';
import '../Styles/Unpayed.css'; // Import the CSS
import mtnLogo from '../assets/download.png'; // Import the MTN logo image

const Checkout = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePayNow = () => {
    // Implement your payment logic here
    console.log('Paying now with Mobile Number:', mobileNumber, 'and Amount:', totalAmount);
    // You would typically send this data to your backend for processing
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>CHECKOUT</h1>
        <img src={mtnLogo} alt="MTN Logo" className="mtn-logo" />

      </div>

      <div className="checkout-content">
        <div className="unpaid-orders-section">
          <h2>Your Latest 3 unpaid orders:</h2>
          <p>Choose any by clicking on it</p>
          {/* Replace with your actual list of unpaid orders */}
          <ul>
            <li>Order #12345 - Amount: RWF 5000</li>
            <li>Order #67890 - Amount: RWF 7500</li>
            <li>Order #13579 - Amount: RWF 10000</li>
          </ul>
        </div>

        <div className="payment-section">
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Phone Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalAmount">Total amount:</label>
            <input
              type="number"
              id="totalAmount"
              value={totalAmount}
              readOnly // Assuming the total amount is not directly editable here
            />
          </div>

          <button className="pay-now-button" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
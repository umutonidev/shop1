// src/dashboard/Payments.jsx
import React, { useState } from 'react';
import '../dashboard/dashstyle/Payments.css';

function Payments() {
  const [payments, setPayments] = useState([
    { id: 78901, customer: 'John Doe', date: '2023-10-27', amount: 250, status: 'Successful' },
    { id: 78902, customer: 'Jane Smith', date: '2023-10-26', amount: 180, status: 'Pending' },
  ]);

  const handleProcessPayment = (id) => {
    setPayments(payments.map(payment => {
      if (payment.id === id) {
        return { ...payment, status: 'Successful' }; // Process the payment
      }
      return payment;
    }));
  };

  const handleRemovePayment = (id) => {
    setPayments(payments.filter(payment => payment.id !== id)); // Remove the payment
  };

  return (
    <div className="payments-container">
      <h1>Manage Payments</h1>
      <p>View and manage all customer payments.</p>
      <table className="payments-table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.customer}</td>
              <td>{payment.date}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
              <td>
                {payment.status === 'Pending' && (
                  <button className="process-payment-button" onClick={() => handleProcessPayment(payment.id)}>
                    Process Payment
                  </button>
                )}
                {payment.status === 'Successful' && (
                  <button className="remove-payment-button" onClick={() => handleRemovePayment(payment.id)}>
                    Remove Payment
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
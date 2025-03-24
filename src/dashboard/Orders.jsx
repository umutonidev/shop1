// src/dashboard/Orders.jsx
import React from 'react';
import '../dashboard/dashstyle/Orders.css';

function Orders() {
  return (
    <div className="orders-container">
      <h1>Manage Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>John Doe</td>
            <td>2023-10-26</td>
            <td>$250</td>
            <td>Shipped</td>
            <td><button className="view-order-button">View</button></td>
          </tr>
          <tr>
            <td>12346</td>
            <td>Jane Smith</td>
            <td>2023-10-25</td>
            <td>$180</td>
            <td>Processing</td>
            <td><button className="view-order-button">View</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
// Cart.jsx
import React from 'react';
import '../Styles/Frw.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Cart = () => {
  // Placeholder data for cart items
  const cartItems = [
    //  { id: 1, name: 'Product 1', price: 50, quantity: 2 },
    //  { id: 2, name: 'Product 2', price: 75, quantity: 1 },
  ]; // Replace with actual cart data

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Cart
      </div>

      <div className="cart-table">
        <div className="cart-header">
          <div className="cart-column">Products</div>
          <div className="cart-column">Price</div>
          <div className="cart-column">Quantity</div>
          <div className="cart-column">Total</div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message">Your cart is empty.</div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-column">{item.name}</div>
              <div className="cart-column">{item.price}</div>
              <div className="cart-column">{item.quantity}</div>
              <div className="cart-column">{item.price * item.quantity}</div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <Link to="/shop" className="back-to-shopping">
          back To shopping
        </Link>

        <div className="cart-total">
          RWF
          {calculateTotal()}
          <div className="tax-shipping">No Taxes and Shipping fees</div>
        </div>

        <Link to="/checkout" className="checkout-button">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
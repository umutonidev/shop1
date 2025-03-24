// src/dashboard/Addproducts.jsx
import React from 'react';
import '../dashboard/dashstyle/Products.css';

function Addproducts() {
  return (
    <div className="addproducts-container">
      <h1>Add New Product</h1>
      <p>Enter details for the new product.</p>
      <form className="add-product-form">
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category">
          <option value="smartphone">Smartphone</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
          <option value="accessory">Accessory</option>
        </select>

        <button type="submit" className="save-product-button">Save Product</button>
      </form>
    </div>
  );
}

export default Addproducts;
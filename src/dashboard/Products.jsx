// src/dashboard/Allproducts.jsx
import React, { useState } from 'react';
import '../dashboard/dashstyle/Products.css';

function Allproducts() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Smartphone X', description: 'High-performance smartphone with advanced features.', imageUrl: 'https://i.ytimg.com/vi/cJKQdzopuco/maxresdefault.jpg' },
    { id: 2, name: 'Laptop Pro', description: 'Powerful laptop for professional use.', imageUrl: 'https://media.istockphoto.com/id/1478610652/photo/hcmc-vietnam-macbook-pro-14-inches-m2.jpg?s=612x612&w=0&k=20&c=r7n3ZWk5KbIEW6MmpAGWaXsUIKvL-KgskI6fS-t5jv4=' },
    { id: 3, name: 'Tablet Z', description: 'Lightweight and versatile tablet.', imageUrl: 'https://www.android.com/static/2016/img/devices/tablets/transparent/galaxy-tab-s2_1x.png' },
    { id: 4, name: 'Smartwatch Y', description: 'Advanced smartwatch with fitness tracking.', imageUrl: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg' },
    { id: 5, name: 'Headphones A', description: 'Noise-cancelling wireless headphones.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRTxCuyoZCJt0rRl3gsKx6OMZgk_RS6u76w&s' },
    { id: 6, name: 'Bluetooth Speaker B', description: 'Portable Bluetooth speaker with powerful sound.', imageUrl: 'https://www.shutterstock.com/image-illustration/wireless-bluetooth-headphones-white-case-600nw-2051472314.jpg' },
  ]);

  const handleEditProduct = (id) => {
    // Implement logic to edit the product with the given ID
    alert(`Edit product with ID: ${id}`); // Placeholder for edit logic
  };

  const handleDeleteProduct = (id) => {
    // Implement logic to delete the product with the given ID
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="allproducts-container">
      <h1>All Products</h1>
      <p>Browse and manage your product catalog.</p>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-actions">
              <button className="edit-product-button" onClick={() => handleEditProduct(product.id)}>
                Edit
              </button>
              <button className="delete-product-button" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allproducts;
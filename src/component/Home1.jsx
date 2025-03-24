import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home1.css";
// src/component/Home1.jsx
// src/component/Home1.jsx
import Home from "./Home";
import image1 from "../assets/iphone.jpg";
import image2 from "../assets/camera.jpg";
import image3 from "../assets/speaker.jpg";
import image4 from "../assets/tv.jpg";
import image5 from "../assets/headset2.jpg";

const products = [
  { id: 1, name: "The iPhone 15 Features A 6.1-Inch", price: "900000 Rwf", image: image1 },
  { id: 2, name: "Camera Canon Pro with M3", price: "From 100 RWF or 8/mo.", image: image2 },
  { id: 3, name: "Creative Pebble V3", price: "For 35000 FRW or 2917RWF/mo.", image: image3 },
  { id: 4, name: "Take in stunning 8K", price: "For 400000 FRW or 33333RWF/mo.", image: image4 },
  { id: 5, name: "Portable Wireless Bass", price: "For 100 FRW or 8RWF/mo.", image: image5 }
];

const ProductShowcase = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const navigate = useNavigate();

  // Auto-change product every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="product-grid-container">
      <div className="featured-product">
        <img src={products[currentProduct].image} alt={products[currentProduct].name} />
        <div className="overlay">
          <span className="tagline">SUPERCHARGED FOR PROS</span>
          <h2>{products[currentProduct].name}</h2>
          <p>{products[currentProduct].price}</p>
          <button className="buy-btn" onClick={() => navigate(`Buy`)}>
            BUY NOW
          </button>
        </div>
      </div>

      {/* Right Side Products */}
      <div className="side-products">
        {products.slice(1).map(product => (  // Exclude the main product
          <div key={product.id} className="side-product">
            <img src={product.image} alt={product.name} />
            <div className="side-product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
  
    </div>
    <Home/>
    </>
  );
};

export default ProductShowcase;
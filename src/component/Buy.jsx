import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Buy.css';
import phone from '../assets/phone.jpg';
import Review from './Review';

function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const newItem = {
            id: 'iphone-15',
            name: 'The IPhone 15 Features A 6.1-Inch (155 Mm) Display',
            price: 900000,
            quantity: quantity,
            image: phone,
        };

        setCart([...cart, newItem]);
        alert('Added to cart!');
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/cart'); // Replace '/cart' with the actual cart route if different
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        setQuantity(isNaN(value) || value < 1 ? 1 : value);
    };

    return (
        <div className="product-details-container">
            <div className="breadcrumb">
                Home / Product Name
            </div>

            <div className="product-content">
                <div className="product-image">
                    <img src={phone} alt="iPhone 15" />
                </div>

                <div className="product-info">
                    <h1 className="product-title">The IPhone 15 Features A 6.1-Inch (155 Mm) Display With Super Retina XDR OLED Technology At A Resolution</h1>
                    <div className="product-price">RWF900000</div>

                    <div className="ratings">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">☆</span>
                        <span className="reviews">(Reviews)</span>
                    </div>

                    <a href="#" className="write-review">Write A Review</a>

                    <div className="product-details">
                        <div className="detail-row">
                            <span className="detail-label">Brand :</span>
                            <span className="detail-value">Apple</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Category :</span>
                            <span className="detail-value">Smart Phone</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Availability :</span>
                            <span className="detail-value">In Stock</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Color :</span>
                            <span className="detail-value">SkyBlue</span>
                        </div>
                    </div>

                    <div className="quantity-address">
                        <div className="quantity">
                            Quantity :
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                        <div className="address">
                            Address :
                            <input type="text" />
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>
                        <button className="buy-now-button" onClick={handleBuyNow}>Buy It Now</button>
                    </div>

                    <div className="add-links">
                        <a href="#" className="add-to-compare">
                            <i className="compare-icon"></i>
                            Add to Compare
                        </a>
                        <a href="#" className="add-to-wishlist">
                            <i className="wishlist-icon"></i>
                            Add to WishList
                        </a>
                    </div>

                    <div className="shipping-returns">
                        Shipp & Returns :<br />
                        Free shipping and returns Available onn all orders! We ship all US domestic orders within 5-10 business Days!
                    </div>
                </div>
            </div>
            <div>
            <h2>Cart:</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                           {item.name} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <Review/>
        </div>
    );
}

export default ProductDetails;
import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faGift, faHeadphones, faHeart } from '@fortawesome/free-solid-svg-icons';

// Images
import headphoneImage from '../assets/headerphone.jpg';
import watchImage from '../assets/watch.jpg';
import sunglassImage from '../assets/sunglass.jpg';
import tvImage from '../assets/tv.jpg';        // Renamed
import speakerImage from '../assets/speaker.jpg'; // Renamed
import smartwatchImage from '../assets/smartwatch.png'; // Renamed
import iphoneImage from '../assets/iphone.jpg';       //Renamed
import headset2Image from '../assets/headset2.jpg';   // Renamed
import laptopImage from '../assets/laptop.jpg';     //Renamed
import airpodsImage from '../assets/bluetooth.jpg'; // Renamed
import phoneImage from '../assets/phone.jpg';       //Renamed
import camera2Image from '../assets/camera.jpg';     // Renamed
import personImage from '../assets/person.jpg';       // Renamed

// Logo Images
import boseLogo from '../assets/bose.jpg';
import canonLogo from '../assets/canon.jpg';
import dellLogo from '../assets/dell.jpg';
import intelLogo from '../assets/intel.png';
import lgLogo from '../assets/lg.png';
import samsungLogo from '../assets/samusang.png';
import sandiskLogo from '../assets/sand.png';

// Banner Images
import watchAdImage from '../assets/smartwatch.png';    //Renamed
import lightbulbAdImage from '../assets/bulb.jpg'; //Renamed

const Home = () => {
    const [cart, setCart] = useState([]);
    const mostBoughtProducts = [
      {
        id: 'airpods',
        brand: 'Bose',
        name: 'Camera Canon Pro with ...',
        image: airpodsImage,
        ratings: 4,
        price: '100 RWF',
        productsAvailable: 37,
      },
      {
        id: 'iphone1',
        brand: 'Apple',
        name: 'The iPhone 15 Features ...',
        image: iphoneImage,
        ratings: 5,
        price: '900000 RWF',
        productsAvailable: 18,
      },
      {
        id: 'unknown',
        brand: 'Unknown Brand',
        name: 'Product Not Found',
        image: null,
        ratings: 3,
        price: '',
        productsAvailable: 10,
        specialProduct: true, // Flag for special product
      },
    ];
  const [scrollPosition, setScrollPosition] = useState(0);

    const categories = [
        { name: 'headphone', image: headphoneImage, orders: '3k orders this week' },
        { name: 'watch', image: watchImage, orders: '4k orders this week' },
        { name: 'sunglass', image: sunglassImage, orders: '6k orders this week' },
        { name:  'tv'     , image:tvImage,orders:'2k orders this week'},
        { name:'speaker',image:speakerImage,orders:'3k ordeers this week'},
        { name:'camera',image:camera2Image,orders:'10k oders this week'},
        { name:'iphone',image:phoneImage,orders:'20k ordesr this week'},
        { name:'laptop',image:laptopImage,orders:'4k orders this week'},
        { name:'bluetooth',image:airpodsImage,orders:'5k orders this week'},
        { name:'smartwatch',image:smartwatchImage,orders:'6k orders'}
    
    ];

  const handleAddToCart = (productId) => {
    const selectedProduct = mostBoughtProducts.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
      alert(`${selectedProduct.brand} ${selectedProduct.name} added to cart!`);
    } else {
      alert('Product not found.');
    }
  };
  const renderStarRating = (ratings) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className="star">
                 {i < ratings ? "★" : "☆"}</span>);
    }
    return stars;
  };
  const logoImages = [
    boseLogo,
    canonLogo,
    dellLogo,
    intelLogo,
    lgLogo,
    samsungLogo,
    sandiskLogo,
  ];
    const blogPosts = [
        {
            title: 'What new on Iphone Users',
            date: '2023-12-31T18:50:07.262Z',
            description: 'The iPhone is a line of smartphones produced by Apple Inc. that use Apple\'s own iOS mobile operating system. The first-generation iPhone was announced by then–Apple CEO.',
            image: headphoneImage, // Using headphone image as a placeholder
        },
        {
            title: 'The first digital watch, which debuted in 1972,',
            date: '2024-01-03T07:13:02.938Z',
            description: 'A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app.',
            image: watchImage, // Using watch image as a placeholder
        },
    ];
  return (
    <div className="home-container">
      {/* Services Section */}
      <div className="services-container">
        <div className="service-box">
          <FontAwesomeIcon icon={faTruck} size="2x" />
          <h3>Worldwide Delivery</h3>
          <p>
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
          <h3>Safe Payment</h3>
          <p>
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faGift} size="2x" />
          <h3>Daily Suprise Offers</h3>
          <p>
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faHeadphones} size="2x" />
          <h3>24/7 Support</h3>
          <p>
            We offer competitive prices on our 100 million plus product any
            range.
          </p>
        </div>
      </div>
      {/* Top Categories Section */}
      <div className="top-categories-container">
        <div className="top-categories-header">
          <h2>Top Categories</h2>
          <a href="#">View all</a>
        </div>

        <div className="categories-scroll-container">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.image} alt={category.name} />
              <div className="category-label">{category.name}</div>
              <div className="orders-badge">{category.orders}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Products Section */}
      <div className="featured-products-container">
        <h2>Featured Collection</h2>
        <div className="products-grid">
          <div className="product-card">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            <img src={airpodsImage} alt="Camera Canon Pro" />
            <p className="brand">Bose</p>
            <p className="product-name">Camera Canon Pro with M3, M...</p>
            <div className="ratings">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
            </div>
            <p className="price">100 RWF</p>
          </div>
          <div className="product-card">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            <img src={iphoneImage} alt="The iPhone 15" />
            <p className="brand">Apple</p>
            <p className="product-name">The iPhone 15 Features A 6.1-I...</p>
            <div className="ratings">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="price">900000 RWF</p>
          </div>
          <div className="product-card">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            <img src={headset2Image} alt="Portable Wireless Bass" />
            <p className="brand">Bose</p>
            <p className="product-name">Portable Wireless Bass Speake...</p>
            <div className="ratings">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
            </div>
            <p className="price">100 RWF</p>
          </div>
          <div className="product-card">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            <img src={tvImage} alt="Take in stunning 8K" />
            <p className="brand">Samsung</p>
            <p className="product-name">Take in stunning 8K resolution...</p>
            <div className="ratings">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="price">400000 RWF</p>
          </div>
          <div className="product-card">
            <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            <img src={camera2Image} alt="Camera" />
            {/* No brand for this one */}
            <p className="product-name">Camera </p>
            <div className="ratings">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="price">1000 RWF</p>
          </div>
        </div>
      </div>
      {/* Most Bought Products */}
      <div className="most-bought-products-container">
        <h2>Most Bought Products</h2>
        <div className="most-bought-grid">
          {mostBoughtProducts.map((product) => (
            <div className="most-bought-card" key={product.id}>
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <p>Image Not Found</p>
              )}
              <p className="brand">{product.brand}</p>
              <p className="product-name">{product.name}</p>
              <div className="ratings">{renderStarRating(product.ratings)}</div>
              <p className="price">{product.price}</p>
              <p>Products:{product.productsAvailable}</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${(product.productsAvailable / 40) * 100}%`, // Adjust max value for scaling
                  }}
                ></div>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Brand Logos Section */}
      <div className="brand-logos-container">
        <div className="brand-logos-scroll">
          {logoImages.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
      {/* Our Latest Blogs Section */}
      <div className="latest-blogs-container">
        <h2>Our Latest Blogs</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <img src={personImage} alt={post.title} />
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
      {/* Banner Ads Section */}
      <div className="banner-ads-container">
        <img src={watchAdImage} alt="Smart Watch Ad" className="banner-ad" />
        <img
          src={lightbulbAdImage}
          alt="Minimal Light Bulb Ad"
          className="banner-ad"
        />
      </div>
    </div>
  );
};

export default Home;
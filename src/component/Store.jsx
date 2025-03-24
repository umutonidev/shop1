import React, { useState, useEffect } from 'react';
import '../Styles/Store.css';
import tv from '../assets/tv.jpg';
import camera from '../assets/camera.jpg';
import speaker from '../assets/speaker.jpg';
import phone from '../assets/phone.jpg';
import phone2 from '../assets/phone2.jpg';
import headerphone from '../assets/headerphone.jpg';
import bluetooth from '../assets/bluetooth.jpg';
import kettle from '../assets/kettle.jpg';
import piano from '../assets/piano.jpg';

const StorePage = () => {
    const [randomProducts, setRandomProducts] = useState([]);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [hoverImage, setHoverImage] = useState(null);

    const productsData = [
        { image: tv, description: "Experience breathtaking visuals with vibrant colors.", alt: "Samsung TV", index: 0 },
        { image: camera, description: "High-resolution camera for professional photographers.", alt: "Canon Camera", index: 1 },
        { image: speaker, description: "Immersive sound experience with deep bass.", alt: "Bose Speaker", index: 2 },
        { image: phone, description: "The latest phone with advanced features.", alt: "Generic Phone", index: 3 },
        { image: phone2, description: "Great phone option with stunning display.", alt: "Another Phone", index: 4 },
        { image: headerphone, description: "Stylish speakers that deliver clear audio.", alt: "Header Phone", index: 5 },
        { image: bluetooth, description: "Noise cancellation for immersive audio.", alt: "Bluetooth Headphones", index: 6 },
        { image: kettle, description: "Efficient water heating with temperature control.", alt: "Electric Kettle", index: 7 },
        { image: piano, description: "Authentic piano experience with weighted keys.", alt: "Digital Piano", index: 8 }
    ];

    const [initialRandomProductsGenerated, setInitialRandomProductsGenerated] = useState(false);
    const numberOfRandomProducts = 6;

    useEffect(() => {
        const generateInitialRandomProducts = () => {
            const initialRandomIndices = [];
            while (initialRandomIndices.length < numberOfRandomProducts) {
                const randomIndex = Math.floor(Math.random() * productsData.length);
                if (!initialRandomIndices.includes(randomIndex)) {
                    initialRandomIndices.push(randomIndex);
                }
            }

            const initialProducts = initialRandomIndices.map((index) => ({
                image: productsData[index].image,
                alt: productsData[index].alt,
                description: productsData[index].description,
                price: Math.floor(Math.random() * 1000000) + 1000,
                rating: Math.floor(Math.random() * 5) + 1,
            }));

            setRandomProducts(initialProducts);
            setInitialRandomProductsGenerated(true);
        };

        if (!initialRandomProductsGenerated) {
            generateInitialRandomProducts();
        }
    }, [productsData, initialRandomProductsGenerated, numberOfRandomProducts]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            const newRandomIndices = [];
            while (newRandomIndices.length < numberOfRandomProducts) {
                const randomIndex = Math.floor(Math.random() * productsData.length);
                if (!newRandomIndices.includes(randomIndex)) {
                    newRandomIndices.push(randomIndex);
                }
            }

            const newRandomProducts = newRandomIndices.map((index) => ({
                image: productsData[index].image,
                alt: productsData[index].alt,
                description: productsData[index].description,
                price: Math.floor(Math.random() * 1000000) + 1000,
                rating: Math.floor(Math.random() * 5) + 1,
            }));

            setRandomProducts(newRandomProducts);
        }, 3000);

        return () => clearInterval(transitionInterval);
    }, [productsData, numberOfRandomProducts]);

    const handleMouseEnter = (index) => {
        // Get a random product different from the currently hovered product
        let newProductIndex = Math.floor(Math.random() * productsData.length);
        while (newProductIndex === index) {
            newProductIndex = Math.floor(Math.random() * productsData.length);
        }
        setHoveredProduct(index);
        setHoverImage({ image: productsData[newProductIndex].image, description: productsData[newProductIndex].description });
    };

    const handleMouseLeave = () => {
        setHoveredProduct(null);
        setHoverImage(null);
    };

    const products = productsData.map((product) => ({
        image: product.image,
        brand: "Brand",
        name: `Product ${product.index + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        price: Math.floor(Math.random() * 100000) + 1000,
        alt: product.alt,
        description: product.description,
        index: product.index
    }));

    return (
        <div className="store-container">
            <header className="store-header">
                <nav>
                    <a href="/">Home</a> / <a href="/store">Our Store</a>
                </nav>
            </header>

            <main className="store-main">
                <aside className="store-sidebar">
                    <div className="product-tags">
                        <h2>Product Tags</h2>
                        <button className="tag-button">Camera</button>
                        <button className="tag-button">Smart Phone</button>
                        <button className="tag-button">Speakers</button>
                        <button className="tag-button">Smart Tv</button>
                        <button className="tag-button">Headphones</button>
                        <button className="tag-button">Kettle</button>
                        <button className="tag-button">Piano</button>
                    </div>

                    <div className="random-product">
                        <h2>Random Product</h2>
                        <div className="random-product-grid">
                            {randomProducts.map((product, index) => (
                                <div className="random-product-card" key={index}>
                                    <img
                                        src={product.image}
                                        alt={product.alt}
                                        className="product-image"
                                    />
                                    <div className="product-details">
                                        <p className="product-description">{product.description}</p>
                                        <div className="star-rating">
                                            {Array.from({ length: product.rating }).map((_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                            {Array.from({ length: 5 - product.rating }).map((_, i) => (
                                                <span key={i} className="empty-star">⭐</span>
                                            ))}
                                        </div>
                                        <p>{product.price} RWF</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                <section className="product-listing">
                    <div className="product-header">
                        <div className="sort-by">
                            <span>Sort By:</span>
                            <select>
                                <option>All products</option>
                            </select>
                        </div>
                        <div className="product-count">
                            <span>{products.length} products</span>
                            <button className="view-button">||||</button>
                            <button className="view-button">|||</button>
                            <button className="view-button">||</button>
                            <button className="view-button">☰</button>
                        </div>
                    </div>

                    <div className="product-grid">
                        {products.map((product, index) => (
                            <div
                                className="product-card"
                                key={index}
                                onMouseEnter={() => handleMouseEnter(product.index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="like-button">🤍</button>
                                <img
                                    src={hoveredProduct === product.index && hoverImage ? hoverImage.image : product.image}
                                    alt={product.alt}
                                    className="product-image"
                                />
                                <p className="product-brand">{product.brand}</p>
                                <p className="product-name">{product.name}</p>
                                <p className="product-description">{hoveredProduct === product.index && hoverImage ? hoverImage.description : product.description}</p>
                                <div className="star-rating">
                                    {Array.from({ length: product.rating }).map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                    {Array.from({ length: 5 - product.rating }).map((_, i) => (
                                        <span key={i} className="empty-star">⭐</span>
                                    ))}
                                </div>
                                <p className="product-price">{product.price} RWF</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default StorePage;
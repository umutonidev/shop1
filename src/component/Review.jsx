import React, { useState } from 'react';
import '../Styles/Review.css';

const Review = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle review submission logic here (e.g., API call)
        console.log('Review submitted:', { name, email, rating, review });
    };

    return (
        <div className="reviews-container">
            <h2>Reviews</h2>

            <div className="customer-reviews">
                <h3>Custome Reviews</h3>
                <div className="customer-review-stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">☆</span> {/* Empty Star */}
                </div>
                <span className="based-on">Based on Reviews</span>
                <a href="#" className="write-a-review">Write a Review</a>
            </div>


            <form className="write-review-form" onSubmit={handleSubmit}>
                <h3>WRITE REVIEW</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-with-icon">
                        <i className="icon person-icon"></i>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-with-icon">
                        <i className="icon email-icon"></i>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Rating</label>
                    <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${star <= rating ? 'active' : ''}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="review">Your Review</label>
                    <div className="input-with-icon">
                        <i className="icon message-icon"></i>
                        <textarea
                            id="review"
                            placeholder="Your Message"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="submit-review-button">Submit Review</button>
            </form>
            <div className="yves-review">
                <p>Yves ⭐⭐⭐⭐ </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut atque ipsum quam esse nemo sint laboriosam fugit et laudantium fugiat consequatur facilis in aut, recusandae voluptates illum.</p>
            </div>
        </div>
    );
};

export default Review;
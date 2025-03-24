// Blog.jsx
import React from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import '../Styles/Blog.css';
import image1 from"../assets/person.jpg";
import image2 from"../assets/blogimage2.jpg";

// Mock Data - Replace with API calls in a real application
const blogData = [
  {
    id: 1,
    imageUrl: image1,
    date: '2023-12-31T18:50:07.262Z',
    title: 'What new on Iphone Users',
    excerpt: "The iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-",
    content: 'The iPhone is a line of smartphones produced by Apple Inc. that use Apple\'s own iOS mobile operating system. The first generation iPhone was released on June 29, 2007...',
  },
  {
    id: 2,
    imageUrl: image2,
    date: '2024-01-03T07:13:02.938Z',
    title: 'The first digital watch, which debuted in 1972',
    excerpt: 'A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for',
    content: 'The first digital watch, the Hamilton Pulsar, debuted in 1972. It was a revolutionary design that used a LED display to show the time. Today, smartwatches are much more sophisticated...',
  },
];

// Blog Item Component (Reusable for listing)
function BlogItem({ blog }) {
  return (
    <div className="blog-item">
      <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-date">{blog.date}</p>
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-excerpt">{blog.excerpt}</p>
        <Link to={`/Blog/${blog.id}`} className="read-more-button">
          Read More
        </Link>
      </div>
    </div>
  );
}

// Blog List Component
function BlogList() {
  return (
    <div className="blog-list">
      <div className="header">
        <Link to="/">Home</Link> / <span>Blogs</span>
      </div>
      <div className="blog-posts">
        {blogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

// Blog Post Component (Detailed view)
function BlogPost() {
  let { id } = useParams();
  const blogId = parseInt(id, 10); // Parse to number
  const blog = blogData.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="blog-post">
      <div className="header">
      <a href="/">Home</a> / <a href="/store">Blogs</a>
                
      </div>
      <h1>{blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      <p className="blog-content">{blog.content}</p>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog-container">
        <BlogList />
    </div>
  );
}

export default Blog;

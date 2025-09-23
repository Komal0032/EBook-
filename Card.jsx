
import React from 'react';
import './Card.css';

const Card= () => {
  // Sample ebook data
  const ebooks = [
    {
      title: "React Mastery",
      author: "Sarah Johnson",
      rating: 5,
      price: 34.99,
      imageUrl: "https://th.bing.com/th?id=OIP.fHwezjRSlNL9N9YsnDpdmQHaJz&w=217&h=287&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      title: "JavaScript Essentials",
      author: "Mike Chen",
      rating: 4,
      price: 29.99,
      imageUrl: "https://th.bing.com/th/id/OIP.1DYmzrK-4xla5G6uDAuNYgAAAA?w=198&h=315&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "CSS Deep Dive",
      author: "Emma Wilson",
      rating: 4,
      price: 24.99,
      imageUrl: "https://th.bing.com/th/id/OIP.GFsvEMgL2fZ_5PXKe5GscAAAAA?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      title: "Node.js Guide",
      author: "David Smith",
      rating: 3,
      price: 39.99,
      imageUrl: "https://namyapress.com/wp-content/uploads/2022/07/320-Final-Integration-of-AI-and-ML-in-Real-World-scaled-1.jpg"
    },
    {
      title: "Fullstack Development",
      author: "Linda Brown",
      rating: 5,
      price: 44.99,
      imageUrl: "https://th.bing.com/th/id/OIP.QcwRDLQeC_x4oG7gvU1AaQHaJU?w=204&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  ];

  const renderRating = (rating) => {
    return Array(5).fill().map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="ebooks-container">
      {ebooks.map((ebook, index) => (
        <div key={index} className="ebook-card">
          <div className="ebook-image">
            <img src={ebook.imageUrl} alt={ebook.title} />
          </div>
          <div className="ebook-details">
            <h3>{ebook.title}</h3>
            <p className="author">by {ebook.author}</p>
            <div className="rating">{renderRating(ebook.rating)}</div>
            <div className="price">${ebook.price}</div>
            <div className="actions">
              <button className="cart-btn">Add to Cart</button>
              <button className="details-btn">Preview</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
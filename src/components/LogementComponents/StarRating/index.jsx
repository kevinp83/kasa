import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`star ${index < rating ? 'filled' : 'empty'}`}
          style={{ color: index < rating ? '#ff6060' : '#e3e3e3', width: '27px', height: '27px' }}
        />
      ))}
    </div>
  );
};

export default StarRating;
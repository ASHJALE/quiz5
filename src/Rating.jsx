import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
      ))}
    </div>
  );
};

export default Rating;

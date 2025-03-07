import React from 'react';
import Rating from './Rating';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description.substring(0, 100)}...</p>
      <Rating rating={product.rating} />
      <p>Price: ${product.price}</p>
      <button>View Details</button>
    </div>
  );
};

export default Card;

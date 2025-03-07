import React, { useEffect, useState } from 'react';
import axios from './axiosConfig'; // Import axios for API calls

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id; // Get product ID from URL

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/products/${productId}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>; // Show loading state

  return (
    <div>
      <h1>{product.name}</h1> 
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: <span>{product.rating}</span></p>
    </div>
  );
};

export default ProductScreen;

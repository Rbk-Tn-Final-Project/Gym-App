import React from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price}$</p>
          <img src={product.img} alt={product.name} />
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default Cart;

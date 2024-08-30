import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const CartContext = createContext({
  cart: [], // Ensure default is an empty array
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const updateCart = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/cart/${user.id}`);
          if (Array.isArray(response.data)) {
            setCart(response.data);
          } else {
            console.error('API response is not an array:', response.data);
            setCart([]);
          }
        } catch (error) {
          console.error('Failed to fetch cart items', error);
          setCart([]);
        }
      };

      updateCart(); // Fetch cart items when the user changes
    }
  }, [user]); // Depend on user to refetch cart when user changes

  const addToCart = async (product) => {
    try {
      await axios.post('http://localhost:3000/api/cart/add', {
        userId: user.id,
        productId: product.id,
        quantity: 1
      });
      await updateCart(); // Refresh cart after adding item
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`/api/cart/remove/${user.id}/${productId}`);
      await updateCart(); // Refresh cart after removing item
    } catch (error) {
      console.error('Failed to remove item from cart', error);
    }
  };

  const incrementQuantity = async (productId) => {
    try {
      const item = cart.find(item => item.productId === productId);
      await axios.post('/api/cart/add', {
        userId: user.id,
        productId,
        quantity: item.quantity + 1
      });
      await updateCart(); // Refresh cart after incrementing quantity
    } catch (error) {
      console.error('Failed to increment item quantity', error);
    }
  };

  const decrementQuantity = async (productId) => {
    try {
      const item = cart.find(item => item.productId === productId);
      if (item.quantity > 1) {
        await axios.post('/api/cart/add', {
          userId: user.id,
          productId,
          quantity: item.quantity - 1
        });
        await updateCart(); // Refresh cart after decrementing quantity
      }
    } catch (error) {
      console.error('Failed to decrement item quantity', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

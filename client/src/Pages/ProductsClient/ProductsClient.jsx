import React, { useEffect, useState, useContext } from 'react';
import './ProductsClient.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import CartContext from '../../components/CartContext'; // Import CartContext

const ProductsClient = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Access addToCart from context
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add the product to the cart
  };

  return (
    <>
      <Navbar/>
      <div className='team-section'>
        <section className="breadcrumb-section set-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb-text">
                  <h2>Our shop</h2>
                  <div className="bt-option">
                    <a href="./">Home</a>
                    <a href="#">Pages</a>
                    <span>Our Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 product filter" key={index}>
                <a href={`/design/${product.id}`}>
                  <img className='imgg' src={product.img} alt={product.name} />
                </a>
                <div className="info">
                  <div className="name">{product.name}</div>
                  <div className="price">{product.price}$</div>
                </div>
                <div className="links">
                  <a href={`/ProductsClientDetails/`} className="more">See details</a>
                  <button className="add-to" onClick={() => handleAddToCart(product)}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gettouch-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="gt-text">
                  <i className="fa fa-map-marker"></i>
                  <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gt-text">
                  <i className="fa fa-mobile"></i>
                  <ul>
                    <li>125-711-811</li>
                    <li>125-668-886</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gt-text email">
                  <i className="fa fa-envelope"></i>
                  <p>Support.gymcenter@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsClient;

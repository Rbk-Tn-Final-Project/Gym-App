import React, { useEffect, useState } from 'react';
import './ProductsClient.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductsClient = () => {
  const [products, setProducts] = useState([]);
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
    // Navigate to the cart page with the product data
    navigate('/Cart', { state: { product } });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="filter-list">
          <h3>“No pain, no gain.”</h3>
          <h4>We provide you with the best seller of being healthy.</h4>
        </div>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 product filter" key={index}>
            <a href="/design/32">
              <img className='imgg' src={product.img} alt={product.name} />
            </a>
            <div className="info">
              <div className="name">
                {product.name}
              </div>
              <div className="price">
                {product.price}$
              </div>
            </div>
            <div className="links">
              <Link to={`/ProductsClientDetails/`} className="more">See details</Link>
              <button onClick={() => handleAddToCart(product)} className="add-to">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsClient;

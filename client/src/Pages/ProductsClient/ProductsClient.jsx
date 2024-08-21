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

  return (
<div className="container">
  <div className="row">
    {/* <div className="filter-list">
      <h3>Filter</h3>
      <button className="btn btn-default filter-button active" data-filter="all">All</button>
      <button className="btn btn-default filter-button" data-filter="news">News</button>
      <button className="btn btn-default filter-button" data-filter="sale">Sale</button>
    </div> */}
  </div>
  <div className="row">
  {products.map((product, index) => (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 product filter">
      <a href="/design/32">
        <img src={product.images[0]} title="Product images" alt="Product name" />
      </a>
      <div className="info">
        <div className="name">
        {product.name}
        </div>
        <div className="price">
          ${product.price}
        </div>
      </div>
      <div className="links">
      {/* <Link to={`/details/${product.id}`}>Preview</Link> */}
        <a href={`/shopDetails/${product.id}`} className="more">See details</a>
        <a href="#" className="add-to">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart
        </a>
      </div>
    </div>
    ))}
  </div>
</div>

  );
}

export default ProductsClient;

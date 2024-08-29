import React, { useEffect, useState } from 'react';
import './ProductsList.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Dashbord from '../Dashbord'

const Products = () => {
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

  const deleteProducts = async () => {
    try {
      await axios.delete('http://localhost:3000/api/product/');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };

  const addProduct = () => {
    navigate('/add');
  };

  return (
    <>
    <Dashbord/>
    <div className='container3'>
    <div id="app">
      <header>
        <div className="tabs"></div>
        <div className="right">
          <button onClick={addProduct} className="soft">Add product</button>
          <button onClick={deleteProducts}>Delete all</button>
          <a href="/dashbord">back</a>
        </div>
      </header>

      <div className="content">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th className="left">Image</th>
                <th className="left">Product name</th>
                <th className="left">Quantity</th>
                <th className="left">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="product1">
                  <td>
                    <div className="priority">
                      <img src={product.img} alt={product.name} style={{ width: 150,height:150 }} />
                    </div>
                  </td>
                  <td><div>{product.name}</div></td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td className="side">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ paddingRight: 10 }} />
                    <Link to={`/details/${product.id}`}>Preview</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Products;
import React, { useEffect, useState } from 'react';
import './ProductsList.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Products = () => {
  const [isModal, setIsModal] = useState(false);
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
  const [listSide, setListSide] = useState([]);
  const [listPriority, setListPriority] = useState([]);
  const [products, setProducts] = useState([]);
const navigation = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/');
      setProducts(response.data);
      console.log('rp:', response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const deleteProducts = async () => {
    try {
       await axios.delete('http://localhost:3000/api/product/');
       fetchProducts()
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const addProduct = () => {
    navigation('/Add')  };

  const createProject = () => {
    // Implementation for createProject
  };
  return (
    <div id="app">
      <header>
        <div className="tabs"></div>
        <div className="right">
          <button onClick={addProduct} className="soft">Add product</button>
          <button onClick={deleteProducts}>Delete all</button>
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
                <tr key={index} className="product">
                  <td>
                    <div className="priority">
                      <img src={product.img} alt={product.name} style={{width: 50}}/>
                    </div>
                  </td>
                  <td><div>{product.name}</div></td>
                  <td >{product.quantity}</td>
                  <td >{product.price}</td>
                  <td className="side">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{paddingRight: 10}}/>
                  <Link to={`/details/${product.id}`}>Preview</Link>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;

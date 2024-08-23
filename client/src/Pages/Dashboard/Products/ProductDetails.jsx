import React, { useEffect, useState } from 'react';
import './ProductDetails.css'; 
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        getDetails();
    }, [id])
    
    const getDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/product/${id}`);
          setProduct(response.data);
          console.log('rp:', response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
          
    const deletebyid = async () => {
        try {
          await axios.delete(`http://localhost:3000/api/product/${id}`);
          console.log('success');
          navigate('/products');
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  return (
    <div className="wrapper">
      <div className="card">
        <div className="product-left">
          <div className="header">
            <h1>{product.name}</h1>
          </div>
          <div className="product-main">
            <div className="focus">
              <span>Description</span>
            </div>
            <p>{product.description}</p>
          </div>
          <div className="product-details">
            <div className="product-total">
              <h3>Total Price</h3>
              <p>${product.price}</p>
            </div>
          </div>
          <div className="product-btns" style={{ display:'flex'}}>
            <a href={`http://localhost:5173/update/${product.id}`} className="product-add">Update</a>
            <a onClick={deletebyid} className="product-add">Delete</a>

          </div>
        </div>
        <div className="product-right">
          <img src={product.img} alt="Hunter Lounge Chair" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
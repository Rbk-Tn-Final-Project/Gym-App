import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './EditProduct.css'
import Dashbord from '../Dashbord'



const EditProduct = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        quantity: '',
        price: '',
        img: null,
      });
      useEffect(() => {
        const fetchProduct = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/api/product/${id}`);
            const product = res.data;
            setFormData({
              name: product.name,
              description: product.description,
              quantity: product.quantity,
              price: product.price,
              img: null, // Set this to null initially; handle image update separately
            });
          } catch (err) {
            console.error('Error fetching product:', err);
          }
        };
    
        fetchProduct();
      }, [id]);
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (name === 'img') {
          setFormData({ ...formData, img: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('quantity', formData.quantity);
        data.append('price', formData.price);
        data.append('img', formData.img);
    
        try {
          const res = await axios.put(`http://localhost:3000/api/product/${id}`, data);
          console.log(res);
        } catch (err) {
          console.error('add error:', err);
        }
      };
    
      return (
        <>
        <Dashbord/>
        <div className="container">
        <section className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit Product</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit} className="form-horizontal" role="form">
              
            </form>
                <div className="form-group">
                  <label htmlFor="name" className="control-label">Product Name</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Product Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
    
                <div className="form-group">
                  <label htmlFor="quantity" className="control-label">Quantity</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      id="quantity"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
    
                <div className="form-group">
                  <label htmlFor="description" className="control-label">Description</label>
                  <div>
                    <textarea
                      className="form-control"
                      name="description"
                      id="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
    
                <div className="form-group">
                  <label htmlFor="price" className="control-label">Product Price</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      id="price"
                      placeholder="Product Price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
    
                <div className="form-group">
                  <label htmlFor="img" className="control-label">Product Image</label>
                  <div>
                    <label className="control-label small" htmlFor="img">Image (jpg/png):</label>
                    <input
                      type="file"
                      name="img"
                      id="img"
                      onChange={handleChange}
                    />
                  </div>
                </div>
    
                <hr />
    
                <div className="form-group center">
                  <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
            
            </div>
          </section>
        </div>
        </>
      );
}

export default EditProduct
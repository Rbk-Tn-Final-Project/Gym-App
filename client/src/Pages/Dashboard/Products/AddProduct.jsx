import React, { useState } from 'react';
import axios from 'axios';
import Dashbord from '../Dashbord'
import './AddProduct.css'


const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgUrl,setimgUrl]= useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const uploadImg = async () => {
    if (files.length === 0) return [];

    const uploadPromises = files.map(async (file) => {
      const form = new FormData();
      form.append('file', file);
      form.append('upload_preset', 'd9qeel3x');

      try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dngpqhs3i/image/upload', form);
        setimgUrl( res.data.secure_url)
        return res.data.secure_url
      } catch (err) {
        console.error('Image upload error:', err);
        return res;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages.filter((url) => url); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

   
    try {
      const res = await axios.post('http://localhost:3000/api/product/', {name:name,description:description,quantity:quantity,price:price,img:imgUrl}, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(imgUrl,'this the imgUrl');
      
      console.log('Product added successfully:', res.data);
      alert('Product added successfully!');
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Dashbord/>
    <div className="containerX">
      <section className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Add New Product</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit} className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="name" className="control-label">Product Name</label>
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                  value={name}
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
                  value={quantity}
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
                  value={description}
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
                  value={price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="img" className="control-label">Product Images</label>
              <div>
                <label className="control-label small" htmlFor="img">Images (jpg/png):</label>
                <input
                  type="file"
                  name="img"
                  id="img"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <hr />
            
         
   
            <div className="form-group center">
              <button className="btnn btnn-primary" type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Confirm'}
              </button>
            </div>
          </form>

         
               
          <button onClick={()=>{
                  uploadImg()
                }}>upload</button>
        </div>
      </section>
    </div>


    </>
  );
};

export default AddProduct;
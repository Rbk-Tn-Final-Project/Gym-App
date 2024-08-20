import React, { useState } from 'react';
import axios from 'axios';
// import './AddProduct.css';  

const AddProduct = () => {
  const [file, setfile]= useState(null)
  const[imgUrl,setimgUrl]= useState('')
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    price: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'images') {
      const selectedFiles = Array.from(files);
      const imageStrings = selectedFiles.map(file => URL.createObjectURL(file)); // Convert files to data URLs or handle as necessary
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...imageStrings],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: formData.name,
      description:formData.description,
      quantity: formData.quantity,
      price: formData.price,
      images:  formData.images
    })
    try {
      const res = await axios.post('http://localhost:3000/api/product/', formData);
      console.log('data',formData);
    } catch (err) {
      console.error('add error:', err);
    }
  };

  const uploadImg = ()=> {
    const form = new FormData() 
    console.log(file , 'this is file');
    
    form.append('file',file)
    form.append('upload_preset','d9qeel3x')
    axios.post('https://api.cloudinary.com/v1_1/dngpqhs3i/image/upload',form).then((res)=>
      setimgUrl(res.data.secure_url)
    ).catch((err)=> console.log(err)
    )
  } 

  return (
    <div className="container">
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
        <label htmlFor="images" className="control-label">Product Images</label>
        <input
          type="file"
          name="images"
          id="images"
          multiple
          onChange={handleChange}
        />
      </div>

            <hr />

            <div className="form-group center">
              <button className="btn btn-primary" onClick={handleSubmit}>Confirm </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;

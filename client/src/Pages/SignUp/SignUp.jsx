import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/img.jpeg';
import './SignUp.css'
import Swal from 'sweetalert2';






const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const confe = Swal.mixin({
      confe: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (confe) => {
        confe.onmouseenter = Swal.stopTimer;
        confe.onmouseleave = Swal.resumeTimer;
      }
    });
  
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/users/register', formData);
  
      confe.fire({
        icon: 'success',
        title: 'Signed up successfully'
      });
  
      setMessageType('success');
      setMessage('Signed up successfully');
      console.log(response.data);
  
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    } catch (error) {
      confe.fire({
        icon: 'error',
        title: 'An error occurred. Please try again.'
      });
  
      setMessageType('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
      console.error(error.response?.data);
    }
  };
  

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row flex-grow-1">
        <div className="col-md-6 d-flex align-items-center">
          <img src={image} alt="Shopping" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h1 className="mb-3">Create an account</h1>
            <p className="text-muted mb-4">Enter your details below</p>
            {message && (
              <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
             
                 
                  <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email or Phone Number"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-3">Create Account</button>
              
              <p className="text-center">
                Already have account? <a href="/Login" className="text-danger">Log in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
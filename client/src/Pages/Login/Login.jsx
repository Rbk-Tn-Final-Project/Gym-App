import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../components/UserContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/img.jpeg';
import Swal from 'sweetalert2';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/users/login', formData);
  
      console.log('Login Response:', response.data);
  
      const user = response.data.user;
      const token = response.data.token;
  
      if (user && token) {
        Toast.fire({
          icon: 'success',
          title: 'Login successful!'
        });
  
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
  
        setFormData({ email: '', password: '' });
  
        if (user.role === 'admin') {
          navigate('/dashbord');
        } else {
          navigate('/');
        }
      } else {
        throw new Error('Invalid login response');
      }
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: 'An error occurred. Please try again.'
      });
  
      setMessageType('error');
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
      console.error('Error during login:', error);
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
            <h1 className="mb-3">Log in to Exclusive</h1>
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
              <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-danger">Log In</button>
                <a href="#" className="text-danger">Forget Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../components/UserContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

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
      <>
       <section className="breadcrumb-section set-bg" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                        <h2>Login</h2>
                        <div className="bt-option">
                            <a href="./">Home</a>
                            <a href="#">Pages</a>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="contact-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title contact-title">
              <span>Contact Us</span>
              <h2>GET IN TOUCH</h2>
            </div>
            <div className="contact-widget">
              <div className="cw-text">
                <i className="fa fa-map-marker"></i>
                <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
              </div>
              <div className="cw-text">
                <i className="fa fa-mobile"></i>
                <ul>
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
              <div className="cw-text email">
                <i className="fa fa-envelope"></i>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="leave-comment">
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
                
              </div>
            </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
    <div className="gettouch-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="gt-text">
                        <i className="fa fa-map-marker"></i>
                        <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="gt-text">
                        <i className="fa fa-mobile"></i>
                        <ul>
                            <li>125-711-811</li>
                            <li>125-668-886</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="gt-text email">
                        <i className="fa fa-envelope"></i>
                        <p>Support.gymcenter@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  );
};

export default LoginPage;
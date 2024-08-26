import React from 'react';
import './Footer.css'
import logo from '../assets/logo.png'
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="fs-about">
              <div className="fa-logo">
                <a href="#"><img src={logo} alt="Logo" /></a>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
              <div className="fa-social">
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://x.com/"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail&hl=fr&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1933377188%3A1724377255027732&ddm=0"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widget">
              <h4>Useful links</h4>
              <ul>
                <li><a href="Offres">Offres</a></li>
                <li><a href="/ProductsClient">Shop</a></li>
                <li><a href="/Calendars">Classes</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="fs-widget">
              <h4>Support</h4>
              <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign up</a></li>
                <li><a href="/">Home</a></li>
                
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="fs-widget">
              <h4>Tips & Guides</h4>
              <div className="fw-recent">
                <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
                <ul>
                  <li>3 min read</li>
                  <li>20 Comment</li>
                </ul>
              </div>
              <div className="fw-recent">
                <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                <ul>
                  <li>3 min read</li>
                  <li>20 Comment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright-text">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with RBK Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

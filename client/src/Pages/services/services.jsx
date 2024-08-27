import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import WhyChoseUs from '../../components/Section1';
import Modal from '../../components/Modal'; 
import img1 from '../../assets/team-5.jpg';
import img2 from '../../assets/team-3.jpg'
import './services.css';
import Footer from '../../components/Footer';

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <div>
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb-text">
                  <h2>About Us</h2>
                  <div className="bt-option">
                    <a href="/">Home</a>
                    <span>About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <WhyChoseUs />

      <section className="aboutus-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 p-0">
        <div className="about-video set-bg" data-setbg="img/about-us.jpg">
          <button className="play-btn video-popup" onClick={openModal}>
            <i className="fa fa-caret-right"></i>
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl="https://www.youtube.com/embed/xZs6nCUQuuM"
        />
      </div>
      <div className="col-lg-6 p-0">
        <div className="about-text">
          <div className="section-title">
            <span>About Us</span>
            <h2>What We Have Done</h2>
          </div>
          <div className="at-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis. Aliquip ex ea commodo consequat sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="about-bar">
            <div className="ab-item">
              <p>Body Building</p>
              <div id="bar1" className="barfiller">
                <span className="fill" data-percentage="80">80%</span>
                <div className="tipWrap">
                  <span className="tip"></span>
                </div>
              </div>
            </div>
            <div className="ab-item">
              <p>Training</p>
              <div id="bar2" className="barfiller">
                <span className="fill" data-percentage="85">85%</span>
                <div className="tipWrap">
                  <span className="tip"></span>
                </div>
              </div>
            </div>
            <div className="ab-item">
              <p>Fitness</p>
              <div id="bar3" className="barfiller">
                <span className="fill" data-percentage="75">75%</span>
                <div className="tipWrap">
                  <span className="tip"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Testimonial</span>
                <h2>Our Clients Say</h2>
              </div>
            </div>
          </div>
          <div className="ts_slider owl-carousel">
            <div className="ts_item">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="ti_pic">
                    <img src={img1} alt=""/>
                  </div>
                  <div className="ti_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                    <h5>Marshmello Gomez</h5>
                    <div className="tt-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ts_item">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="ti_pic">
                    <img src={img2} alt=""/>
                  </div>
                  <div className="ti_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                      gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                    <h5>Marshmello Gomez</h5>
                    <div className="tt-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Services;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from '../../components/Banner';
import WhyChoseUs from '../../components/Section1.jsx';
import Footer from '../../components/Footer';
import ClassesSection from '../../components/ClassesSection.jsx';
import Registration from '../../components/Registration.jsx';
import PricingPlan from '../../components/PricingPlan.jsx';
import coach1 from '../../assets/team-1.jpg';
import coach2 from '../../assets/team-2.jpg';
import coach3 from '../../assets/team-3.jpg';
import coach4 from '../../assets/team-4.jpg';
import coach5 from '../../assets/team-5.jpg';
import coach6 from '../../assets/team-6.jpg';
import Navbar from '../../components/Navbar.jsx';



const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToScroll: 1,
      };
    return (
      <>
      <Navbar/>
        <div>
         
            <Hero />
            <WhyChoseUs />
            <ClassesSection/>
            <Registration/>
            <PricingPlan/>
           
              <div>
              
      <section className="team-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-title">
                <div className="section-title">
                  <span>Our Team</span>
                  <h2>TRAIN WITH EXPERTS</h2>
                </div>
                <a href="#ourTeam"></a>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings}>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach1})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach2})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach3})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach4})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach5})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="ts-item set-bg" style={{ backgroundImage: `url(${coach6})` }}>
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="gettouch-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-map-marker"></i>
                <p>333 Middle Tunisia<br/> NH 03461</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text">
                <i className="fa fa-mobile"></i>
                <ul>
                  <li>+216.00.000.000</li>
                  <li>+216.00.000.000</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="gt-text email">
                <i className="fa fa-envelope"></i>
                <p>gym@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
              </div>
          <Footer/>
        </div>
        </>
    );
};

export default Home;

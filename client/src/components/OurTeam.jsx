import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coach1 from '../assets/team-1.jpg';
import coach2 from '../assets/team-2.jpg';
import coach3 from '../assets/team-3.jpg';
import coach4 from '../assets/team-4.jpg';
import coach5 from '../assets/team-5.jpg';
import coach6 from '../assets/team-6.jpg';
import './Components.css'

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="team-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team-title">
              <div className="section-title">
                <span>Our Team</span>
                <h2>TRAIN WITH EXPERTS</h2>
              </div>
     
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
  );
};

export default OurTeam;

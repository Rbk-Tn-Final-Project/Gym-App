import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/home2.png'
import img2 from '../assets/home.png'
import img3 from '../assets/home.png'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/hero-1.jpg'
import img2 from '../assets/hero-2.jpg'

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
           
        </Carousel>
    );
};

export default Banner;

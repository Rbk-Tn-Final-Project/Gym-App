import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img1 from '../assets/hero-1.jpg';
import img2 from '../assets/hero-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="Second slide"
                />
                <Carousel.Caption className="slide">
                <p>Shape your body</p>
                    <h3>Be <strong>strong</strong> traning hard</h3>
                  
                    <Button variant="primary">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption className="slide">
                <p>Shape your body</p>
                    <h3>Be <strong>strong</strong> traning hard</h3>
                  
                    <Button variant="primary">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;

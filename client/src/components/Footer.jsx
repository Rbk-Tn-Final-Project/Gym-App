import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h5>Exclusive</h5>
                        <ul>
                            <li>Subscription</li>
                            <li>Get 10% off your first order</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Support</h5>
                        <ul>
                            <li>Support Center</li>
                            <li>FAQs</li>
                            <li>Help</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} style={{textAlign:'center'}}>
                        <p>© 2024 Exclusive. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

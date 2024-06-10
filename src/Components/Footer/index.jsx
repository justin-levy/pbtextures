import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import your desired icons
import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Follow Us</h5>
                        <a href="https://instagram.com" className="text-white m-2" aria-label="Instagram">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://facebook.com" className="text-white m-2" aria-label="Facebook">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://twitter.com" className="text-white m-2" aria-label="Twitter">
                            <FaTwitter size={30} />
                        </a>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <p>email@example.com</p>
                    </Col>
                    <Col md={4}>
                        <h5>&copy; {new Date().getFullYear()} PB Textures</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
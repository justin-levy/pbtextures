import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTiktok, FaEtsy } from 'react-icons/fa'; // Import your desired icons
import './footer.css';
import { Link } from 'react-router-dom';
import { env } from '../../env'

const Footer = () => {
    return (
        <footer className="mt-5 p-4 text-center" style={{ backgroundImage: 'footer.jpg' }}>
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Follow Us</h5>
                        <a href="https://instagram.com/pbtextures" className="m-2" aria-label="Instagram">
                            <FaInstagram size={30} />
                        </a>
                        {/* <a href="https://facebook.com/pbtextures" className="m-2" aria-label="Facebook">
                            <FaFacebook size={30} />
                        </a> */}
                        <a href="https://www.tiktok.com/@pbtextures" className="m-2" aria-label="Tiktok">
                            <FaTiktok size={29} />
                        </a>
                        <a href="https://www.etsy.com/shop/PBStudiotextures" className="m-2" aria-label="Etsy">
                            <FaEtsy size={30} />
                        </a>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Contact Us</h5>
                        <Link style={{ color: 'black' }} to={`mailto:${env.EMAIL}`}>{env.EMAIL}</Link>
                    </Col>
                    <Col md={4}>
                        <h5><span style={{ fontSize: '1rem' }}>&copy; {new Date().getFullYear()}</span> <span style={{ fontSize: '1.2rem' }}>PB Textures</span></h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
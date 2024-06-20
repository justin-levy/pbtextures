import React from 'react';
import { Col } from 'react-bootstrap';
import './ImageHoverComponent.css'; // Ensure you import the CSS file
import { Link } from 'react-router-dom';

const ImageHoverComponent = ({
    img,
    title,
}) => {
    return (
        <Col className="image-container" md='6'>
            <img src={img} alt="Art" />
            <Link className='overlay' to={`/portfolio#${title}`} style={{
                textDecoration: 'none'
            }}>
                <div className="overlay-text">{title}</div>
            </Link>
        </Col>
    );
};

export default ImageHoverComponent;
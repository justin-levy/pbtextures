import React from 'react';
import { Col } from 'react-bootstrap';
import './ImageHoverComponent.css'; // Ensure you import the CSS file

const ImageHoverComponent = ({
    img,
    title
}) => {
    return (
        <Col className="image-container">
            <img src={img} alt="Art" />
            <div className="overlay">
                <div className="overlay-text">{title}</div>
            </div>
        </Col>
    );
};

export default ImageHoverComponent;
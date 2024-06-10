import React from 'react';
import { Nav } from 'react-bootstrap';
import './StyledNavLink.css';

const StyledNavLink = ({ title, link }) => {
    return (
        <Nav.Item>
            <Nav.Link href={link} className="styled-nav-link">{title}</Nav.Link>
        </Nav.Item>
    );
};

export default StyledNavLink;
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';

const StyledNavLink = ({ title, link }) => {
  return (
    <Nav.Item style={{
      color: 'black',

    }}>
      <Nav.Link href={link}>{title}</Nav.Link>
    </Nav.Item >
  )
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <h1>PB Textures</h1>
        <Nav activeKey="/">
          <StyledNavLink title="Home" link="/" />
          <StyledNavLink title="Portfolio" link='/Portfolio' />
          <StyledNavLink title="Contact" link='/Contact' />
        </Nav>
      </div>
    </nav>
  );
};

export default Navbar;

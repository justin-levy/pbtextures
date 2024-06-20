import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import StyledNavLink from './StyledNavLink';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(window.scrollY > 50);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const location = useLocation();

  useEffect(
    () => { setSidePanelOpen(false) },
    [location]
  )

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleSidePanel = () => {
    setSidePanelOpen(!sidePanelOpen);
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
  };

  const closeSidePanelOnResize = () => {
    if (window.innerWidth > 768) {
      setSidePanelOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', closeSidePanelOnResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', closeSidePanelOnResize);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <h1><Link to="/" style={{
          textDecoration: 'none',
          color: 'black'
        }}>PB Textures</Link></h1>
        <div className="hamburger" onClick={toggleSidePanel}>
          <FaBars />
        </div>
        <div className={`nav-links ${sidePanelOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={closeSidePanel}>
            <FaTimes />
          </div>
          <Nav activeKey="/">
            <StyledNavLink title="Home" link="/" />
            <StyledNavLink title="Portfolio" link="/Portfolio" />
            <StyledNavLink title="Contact" link="/Contact" />
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

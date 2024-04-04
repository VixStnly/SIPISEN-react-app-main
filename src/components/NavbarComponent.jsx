import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from '../assets/img/logo.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../dist/css/main.css';

const Header = () => {
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo Start */}
              <Link to="/" className="logo"> {/* Menggunakan Link untuk navigasi */}
                <img src={LogoImage} alt="hero-img" style={{ width: '250px' }} />
              </Link>
              {/* Logo End */}
              {/* Menu Start */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#services">Team</a></li>
               
                <li className="scroll-to-section"><a href="#contact">Contact</a></li>
                <li className="scroll-to-section">
                  <div className="border-first-button">
                    <Link as={Link} to="/Login">Login</Link> {/* Menggunakan Link untuk navigasi ke halaman login */}
                  </div>
                </li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
              {/* Menu End */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

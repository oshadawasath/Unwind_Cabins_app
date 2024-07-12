import React from 'react';
import './Navbar.css'; // Import the CSS file
import SignInLogo from '../assets/signIn.png'; // Import the image
import { FaHome, FaLightbulb, FaGift, FaInfoCircle } from 'react-icons/fa'; // Import Font Awesome icons
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className='navbar_main'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span style={{ color: '#8BC34A' }}>UNWIND</span> <span style={{ color: '#006400' }}>CABINS</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Use Link from react-scroll for smooth scrolling */}
              <Link to="dicover_cabins_id" smooth={true} duration={500} className='nav-link'> Our Cabins</Link>
            </li>
            <li className="nav-item">
              <Link to="inspired_id" smooth={true} duration={500} className='nav-link'> Get Inspired</Link>
            </li>
            <li className="nav-item">
              <Link to="video_id" smooth={true} duration={500} className='nav-link'> Gift Stay</Link>
            </li>
            <li className="nav-item">
              <Link to="details_about_id" smooth={true} duration={500} className='nav-link'> About us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                <img src={SignInLogo} alt="Sign In" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

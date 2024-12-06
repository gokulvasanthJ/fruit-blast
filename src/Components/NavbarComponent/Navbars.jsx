import React from 'react';
import "../NavbarComponent/Navbars.css";
import logo from './Navimgs/apple.png';

function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        {/* Brand Section */}
        <a className="navbar-brand" href="#home">
          <img className="navlogo" src={logo} alt="FruitBlast Logo" />
          <span style={{marginTop: '90px'}}>FruitBlast</span>
        </a>
        
        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Left Navigation */}
          <ul className="navbar-nav me-auto custom-nav">
            <li className="nav-item">
              <a className="nav-link" href="#features">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Leman</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Cherry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Mango</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Apple</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
                <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
                <li><a className="dropdown-item" href="#action/3.3">Something</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#action/3.4">Separated link</a></li>
              </ul>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="navbar-nav icons-container">
            <li className="nav-item icons">
              <a className="nav-link navicon" href="#search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li className="nav-item icons">
              <a className="nav-link navicon" href="#profile">
                <i className="fa-regular fa-user"></i>
              </a>
            </li>
            <li className="nav-item icons">
              <a className="nav-link navicon" href="#cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;

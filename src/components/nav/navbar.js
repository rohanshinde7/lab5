import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <img
            src= "images/profile2.jpg"
            alt="Rohan Shinde"
            width="40"
            height="40"
            className="rounded-circle me-2"
          />
    
        <Link className="navbar-brand" to="/">Rohan's Portfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;

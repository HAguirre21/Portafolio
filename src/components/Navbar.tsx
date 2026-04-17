import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#">HHA</a>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#footer">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

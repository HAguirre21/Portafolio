import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h3 className="footer-title">Contacto</h3>
            <p className="footer-text">¿Tienes un proyecto en mente? Hablemos.</p>
            <a href="mailto:hervin@example.com" className="email-link">hervin@example.com</a>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Redes</h3>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Hervin Hinojosa Aguirre. Todos los derechos reservados.</p>
          <p className="made-with">Hecho con React & Puro CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
            <p className="footer-text">¿Tienes un proyecto en mente? Hablemos</p>
            <a href="mailto:jdjjz19@gmail.com" className="email-link">jdjjz19@gmail.com</a>
          </div>
          <div className="footer-col">
            <h3 className="footer-title">Redes</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/hervin-hinojosa-aguirre-a30b9a25b/">LinkedIn</a>
              <a href="https://github.com/HAguirre21">GitHub</a>
              <a href="https://www.instagram.com/h.aguirre1/">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Hervin Hinojosa Aguirre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hola, soy</p>
        <h1 className="hero-title">Hervin Hinojosa Aguirre</h1>
        <h2 className="hero-subtitle">Desarrollador de Software</h2>
        <p className="hero-description">
          21 años. Apasionado por crear experiencias digitales minimalistas, 
          eficientes y de alto impacto. Especializado en transformar ideas en código limpio.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

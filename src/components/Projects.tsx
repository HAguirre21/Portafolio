import React from 'react';
import type { Project } from '../types';
import './Projects.css';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'App Recogreen',
    description: 'App de geolocalización de residuos diseñada para optimizar la recolección y reciclaje urbano.',
    tags: ['React', 'TS', 'Geolocation'],
    link: 'https://github.com/HAguirre21/Recogren.git'
  },
  {
    id: 2,
    title: 'Aventurapp',
    description: 'Portal turístico integral para Buenaventura, destacando la riqueza cultural y natural de la región (DEMO).',
    tags: ['Web Design', 'Tourism', 'React'],
    link: 'https://aventurapp.onrender.com'
  },
  {
    id: 3,
    title: 'Facturación',
    description: 'Sistema robusto de gestión comercial y facturación para negocios mayoristas con control de inventarios.',
    tags: ['Software', 'Management', 'Business'],
    link: 'https://github.com/HAguirre21/facturacion-electronica.git'
  },
  {
    id: 4,
    title: 'Grúas TJ',
    description: 'Landing page profesional optimizada para servicios de asistencia vial y logística de transporte.',
    tags: ['Landing Page', 'SEO', 'Business'],
    link: 'https://gruastjservices.com/'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Proyectos Seleccionados</h2>
        <div className="section-divider"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-link">
                Ver más
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;


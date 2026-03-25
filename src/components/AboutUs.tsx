import React from 'react';
import './AboutUs.css';

const values = ['Empatía', 'Respeto', 'Profesionalismo', 'Compromiso', 'Confidencialidad'];

export default function AboutUs() {
  return (
    <section className="about-section section-padding" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-fade-in-up">
            <h2>Quiénes Somos</h2>
            <p className="about-text">
              STEPLY es un centro especializado en terapia de lenguaje y acompañamiento psicológico, comprometido con el desarrollo integral de cada persona. Creemos en el progreso paso a paso.
            </p>
            
            <div className="mission-vision mb-8">
              <div className="mv-card">
                <h4>Nuestra Misión</h4>
                <p>Brindar atención terapéutica profesional y humana que promueva el bienestar emocional y el desarrollo comunicativo.</p>
              </div>
              <div className="mv-card">
                <h4>Nuestra Visión</h4>
                <p>Ser un centro referente en terapia de lenguaje y acompañamiento psicológico, reconocido por su calidad humana y profesional.</p>
              </div>
            </div>

            <div className="values-list">
              <h4>Nuestros Valores</h4>
              <div className="flex flex-wrap gap-4 mt-4">
                {values.map((v, i) => (
                  <span key={i} className="value-tag">{v}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="about-image-placeholder">
              <div className="about-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

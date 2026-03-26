'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './AboutUs.css';

const values = ['Empatía', 'Respeto', 'Profesionalismo', 'Compromiso', 'Confidencialidad'];

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => (prev === 1 ? 0 : 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? 1 : 0));

  return (
    <section className="about-section section-padding" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-fade-in-up">
            <h2>Quiénes Somos</h2>
            <p className="about-text">
              STEPLY es un centro especializado en terapia de lenguaje y acompañamiento psicológico en Ecuador, comprometido con el desarrollo integral de cada persona. Creemos en el progreso paso a paso.
            </p>
            
            <div className="mission-vision-carousel mb-8">
              <div 
                className="mission-vision-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="carousel-slide">
                  <div className="mv-card">
                    <h4>Nuestra Misión</h4>
                    <p>Brindar atención terapéutica profesional y humana que promueva el bienestar emocional y el desarrollo comunicativo.</p>
                  </div>
                </div>
                
                <div className="carousel-slide">
                  <div className="mv-card">
                    <h4>Nuestra Visión</h4>
                    <p>Ser un centro referente en terapia de lenguaje y acompañamiento psicológico, reconocido por su calidad humana y profesional.</p>
                  </div>
                </div>
              </div>

              <div className="carousel-controls">
                <button className="carousel-btn" onClick={prevSlide} aria-label="Anterior">
                  <ChevronLeft size={20} />
                </button>
                <div className="carousel-dots">
                  <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)} />
                  <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)} />
                </div>
                <button className="carousel-btn" onClick={nextSlide} aria-label="Siguiente">
                  <ChevronRight size={20} />
                </button>
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

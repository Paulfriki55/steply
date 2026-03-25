import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Home } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section-padding" id="inicio">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badges flex gap-2 flex-wrap mb-6">
            <span className="badge">Espacio de Sanación Consciente</span>
            <span className="badge badge-accent flex items-center gap-2"><Home size={14} /> Servicio a domicilio</span>
          </div>
          <h1 className="hero-title">
            Centro de Terapia de Lenguaje y<br/>Acompañamiento Psicológico
          </h1>
          <p className="hero-subtitle">
            Evaluamos, diagnosticamos y acompañamos tu proceso paso a paso.<br/>
            Transformamos el cuidado de la salud mental en una experiencia de calma y cercanía.
          </p>
          <div className="hero-buttons flex gap-4">
            <a href="#contacto" className="btn btn-primary">Agendar evaluación</a>
            <a href="https://wa.me/123456789" className="btn btn-outline flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} /> Contactar por WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-placeholder">
            {/* Se reemplazará por una imagen real */}
            <div className="abstract-shape"></div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Un refugio real en medio del caos. Mi terapeuta en STEPLY cambió mi perspectiva."</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.25,27.18,103.88,42.84,157,51.8,212.83,61.23,269.45,67.23,321.39,56.44Z" fill="var(--color-white)"></path>
        </svg>
      </div>
    </section>
  );
}

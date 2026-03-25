import React from 'react';
import { ClipboardCheck, Stethoscope, MessageCircle, Handshake, Puzzle, Info } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: 'Evaluación',
    desc: 'Proceso inicial para identificar dificultades en el lenguaje, comunicación o desarrollo emocional.',
    icon: <ClipboardCheck size={32} color="var(--color-primary)" />
  },
  {
    title: 'Diagnóstico',
    desc: 'Análisis profesional basado en pruebas y observación clínica.',
    icon: <Stethoscope size={32} color="var(--color-primary)" />
  },
  {
    title: 'Terapia de lenguaje',
    desc: 'Para Niños, Jóvenes y Adultos.',
    icon: <MessageCircle size={32} color="var(--color-primary)" />
  },
  {
    title: 'Acompañamiento psicológico',
    desc: 'Para Ansiedad, Conducta, Desarrollo emocional y Adaptación escolar.',
    icon: <Handshake size={32} color="var(--color-primary)" />
  },
  {
    title: 'Estimulación cognitiva geriátrica',
    desc: 'Para Memoria, Atención, Lenguaje y Funciones cognitivas.',
    icon: <Puzzle size={32} color="var(--color-primary)" />
  }
];

const packages = [
  {
    title: 'Paquete inicial',
    features: ['Evaluación', 'Diagnóstico', '4 sesiones'],
    recommended: false
  },
  {
    title: 'Paquete intensivo',
    features: ['Evaluación', 'Diagnóstico', '8 sesiones'],
    recommended: true
  },
  {
    title: 'Paquete seguimiento',
    features: ['4 sesiones mensuales'],
    recommended: false
  }
];

export default function Services() {
  return (
    <section className="services-section section-padding" id="servicios">
      <div className="container">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2>Qué Ofrecemos</h2>
          <p className="services-subtitle">Soluciones adaptadas a cada necesidad y etapa de vida.</p>
        </div>

        <div className="home-service-banner animate-fade-in-up mb-12 flex items-center justify-center gap-3" style={{ animationDelay: '0.1s' }}>
          <Info size={24} /> <span><strong>Nota importante:</strong> Por el momento, todos nuestros servicios se brindan de forma exclusiva <strong>a domicilio</strong> para tu mayor comodidad.</span>
        </div>

        <div className="services-grid mb-12">
          {services.map((srv, idx) => (
            <div className="card service-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="service-icon">{srv.icon}</div>
              <h4>{srv.title}</h4>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 animate-fade-in-up">
          <h3>Nuestros Paquetes</h3>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <div className={`card package-card ${pkg.recommended ? 'recommended' : ''} animate-fade-in-up`} style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              {pkg.recommended && <div className="package-badge">Más elegido</div>}
              <h4>{pkg.title}</h4>
              <ul className="package-features">
                {pkg.features.map((feat, i) => (
                  <li key={i}>✓ {feat}</li>
                ))}
              </ul>
              <a href="#contacto" className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-outline'}`}>Elegir plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

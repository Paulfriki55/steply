import React from 'react';
import './Process.css';

const steps = [
  { num: '01', title: 'Evaluación', desc: 'Conocemos tu caso a fondo.' },
  { num: '02', title: 'Diagnóstico', desc: 'Identificamos las áreas a trabajar.' },
  { num: '03', title: 'Terapia', desc: 'Acompañamiento personalizado y continuo.' },
  { num: '04', title: 'Seguimiento', desc: 'Aseguramos el progreso a largo plazo.' },
];

export default function Process() {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <h2 className="text-center mb-12 animate-fade-in-up">Cómo funciona nuestro proceso</h2>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div className="step-item animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="step-number">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {idx < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

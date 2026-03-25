import React from 'react';
import { MessageCircle, HeartPulse, Brain, Heart } from 'lucide-react';
import './ProblemsWeSolve.css';

const problems = [
  {
    title: 'Dificultades del lenguaje',
    desc: 'Retraso en el habla y problemas de comunicación efectiva.',
    icon: <MessageCircle size={24} color="var(--color-primary)" />
  },
  {
    title: 'Ansiedad y Estrés',
    desc: 'Técnicas de regulación emocional y apoyo para el bienestar mental.',
    icon: <HeartPulse size={24} color="var(--color-primary)" />
  },
  {
    title: 'Estimulación cognitiva',
    desc: 'Programas especializados para la memoria y atención.',
    icon: <Brain size={24} color="var(--color-primary)" />
  },
  {
    title: 'Apoyo emocional',
    desc: 'Fortalecimiento de la autoestima y seguridad personal.',
    icon: <Heart size={24} color="var(--color-primary)" />
  }
];

export default function ProblemsWeSolve() {
  return (
    <section className="problems-section section-padding">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2>Problemas que ayudamos a resolver</h2>
          <p className="subtitle">Abordamos tu bienestar desde la raíz, sin juicios y con herramientas clínicas modernas.</p>
        </div>
        <div className="problems-grid">
          {problems.map((prob, idx) => (
            <div className="card problem-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="icon-wrapper">{prob.icon}</div>
              <h3>{prob.title}</h3>
              <p>{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

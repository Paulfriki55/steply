import React from 'react';
import { Baby, User, Users, Activity } from 'lucide-react';
import './TargetAudience.css';

const audiences = [
  { title: "Niños", icon: <Baby size={40} color="var(--color-primary)" />, desc: "Abordaje temprano para trastornos del lenguaje y desarrollo." },
  { title: "Jóvenes", icon: <User size={40} color="var(--color-primary)" />, desc: "Apoyo en ansiedad, adaptación escolar y autoestima." },
  { title: "Adultos", icon: <Users size={40} color="var(--color-primary)" />, desc: "Acompañamiento en crisis, autoestima y bienestar." },
  { title: "Adultos Mayores", icon: <Activity size={40} color="var(--color-primary)" />, desc: "Estimulación cognitiva para preservar la memoria activa." }
];

export default function TargetAudience() {
  return (
    <section className="target-section section-padding">
      <div className="container">
        <div className="target-header mb-12 animate-fade-in-up">
          <h2>¿A quién atendemos?</h2>
          <p>Ofrecemos atención especializada adaptada a cada etapa de la vida.</p>
        </div>
        
        <div className="audience-grid">
          {audiences.map((aud, idx) => (
            <div className="card audience-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }} key={idx}>
              <div className="audience-emoji">{aud.icon}</div>
              <h3>{aud.title}</h3>
              <p>{aud.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

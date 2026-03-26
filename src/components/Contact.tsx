import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contacto">
      <div className="container contact-container">
        
        <div className="contact-info animate-fade-in-up">
          <h2>Contacta con nosotros</h2>
          <p className="mb-8">Estamos listos para acompañarte en tu proceso. Escríbenos o llámanos para empezar.</p>
          
          <div className="info-item">
            <span className="info-icon"><Phone size={24} color="var(--color-primary)" /></span>
            <div>
              <h5>Teléfono</h5>
              <p>+593 123 456 7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon"><MessageSquare size={24} color="var(--color-primary)" /></span>
            <div>
              <h5>WhatsApp</h5>
              <p>+593 123 456 7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon"><Mail size={24} color="var(--color-primary)" /></span>
            <div>
              <h5>Correo</h5>
              <p>contacto@steply.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon"><MapPin size={24} color="var(--color-primary)" /></span>
            <div>
              <h5>Dirección</h5>
              <p>Servicio exclusivo a domicilio temporalmente<br/><span style={{fontSize:'0.85rem', color:'#888'}}>(Cobertura en Ecuador)</span></p>
            </div>
          </div>
          
          <div className="info-item">
            <span className="info-icon"><Clock size={24} color="var(--color-primary)" /></span>
            <div>
              <h5>Horario</h5>
              <p>Lunes a Viernes: 9am - 7pm<br/>Sábados: 9am - 2pm</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <form className="card contact-form">
            <h3 className="mb-6">Envíanos un mensaje</h3>
            
            <div className="form-group">
              <label>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" placeholder="Tu número" required />
            </div>
            
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="Tu correo" required />
            </div>
            
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="¿En qué te podemos ayudar?" rows={4} required></textarea>
            </div>
            
            <button type="button" className="btn btn-primary w-full">Agendar evaluación</button>
          </form>
        </div>

      </div>
    </section>
  );
}

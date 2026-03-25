import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>STEPLY</h3>
            <p>Acompañamos tu desarrollo y bienestar en cada etapa de la vida.</p>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="flex gap-4 mt-4">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="TikTok"><FaTiktok /></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} STEPLY - Todos los derechos reservados.</p>
        </div>
      </div>

      <a href="https://wa.me/123456789" className="whatsapp-float hover:scale-110 transition-transform" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-white text-3xl" size={32} />
      </a>
    </footer>
  );
}

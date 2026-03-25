"use client";
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container flex justify-between items-center header-container">
          <div className="logo cursor-pointer">
            <h2>STEPLY</h2>
          </div>
          
          <nav className="desktop-nav">
            <ul className="flex gap-8 items-center list-none">
              <li><a href="#inicio" className="nav-link">Inicio</a></li>
              <li><a href="#nosotros" className="nav-link">Nosotros</a></li>
              <li><a href="#servicios" className="nav-link">Servicios</a></li>
              <li><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>

          <div className="header-actions desktop-actions">
             <a href="https://wa.me/123456789" className="btn btn-primary flex items-center gap-2" target="_blank" rel="noopener noreferrer">
               <FaWhatsapp size={18} /> Agenda tu cita
             </a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay animate-fade-in-up">
          <button className="mobile-close-btn" onClick={closeMobileMenu}>
            <X size={32} />
          </button>
          <nav className="mobile-nav">
            <ul className="flex flex-col gap-6 items-center list-none">
              <li><a href="#inicio" className="mobile-nav-link" onClick={closeMobileMenu}>Inicio</a></li>
              <li><a href="#nosotros" className="mobile-nav-link" onClick={closeMobileMenu}>Nosotros</a></li>
              <li><a href="#servicios" className="mobile-nav-link" onClick={closeMobileMenu}>Servicios</a></li>
              <li><a href="#contacto" className="mobile-nav-link" onClick={closeMobileMenu}>Contacto</a></li>
            </ul>
             <a href="https://wa.me/123456789" className="btn btn-primary flex items-center gap-2 mt-8" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
               <FaWhatsapp size={18} /> Agenda tu cita
             </a>
          </nav>
        </div>
      )}
    </>
  );
}

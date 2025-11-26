import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">ACTIVE FIT</span>
          <span className="logo-subtitle">GYM</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Acasă</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Despre Noi</a>
          <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Servicii</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsOpen(false)}>Prețuri</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="cta-button">Înscrie-te Acum</button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
          <span className={isOpen ? 'bar active' : 'bar'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

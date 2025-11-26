import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">ACTIVE FIT</span>
              <span className="logo-subtitle">GYM</span>
            </div>
            <p className="footer-description">
              Destinația ta pentru fitness, bunăstare și transformare. 
              Alătură-te comunității noastre astăzi.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100094228577020" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/active_fit_gym/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Link-uri Rapide</h3>
            <ul className="footer-links">
              <li><a href="#home">Acasă</a></li>
              <li><a href="#about">Despre Noi</a></li>
              <li><a href="#services">Servicii</a></li>
              <li><a href="#pricing">Prețuri</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Servicii</h3>
            <ul className="footer-links">
              <li><a href="#services">Sala de Greutăți</a></li>
              <li><a href="#services">Cursuri de Grup</a></li>
              <li><a href="#services">Antrenament Personal</a></li>
              <li><a href="#services">Zonă Cardio</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li>📍 Strada Buznei, Nr. 18, București</li>
              <li>📞 0744 868 777</li>
              <li>✉️ info@activefitgym.ro</li>
              <li>🕐 Lun-Vin: 09:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Active Fit Gym. Toate drepturile rezervate.</p>
          <div className="footer-bottom-links">
            <a href="#">Politica de Confidențialitate</a>
            <span>•</span>
            <a href="#">Termeni și Condiții</a>
            <span>•</span>
            <a href="#">Politica Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

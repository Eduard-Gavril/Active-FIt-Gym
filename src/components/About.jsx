import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-badge">DESPRE NOI</span>
          <h2 className="section-title">Destinația Ta <span className="highlight">Fitness</span></h2>
          <p className="about-text">
            Active Fit Gym este mai mult decât o simplă sală de sport. Suntem o comunitate dedicată 
            să te sprijine în atingerea obiectivelor tale de fitness și bunăstare. 
            Din 2023, oferim un mediu motivant cu cele mai bune echipamente și 
            profesioniști calificați.
          </p>
          <p className="about-text">
            Fie că ești începător sau atlet experimentat, avem programe 
            personalizate pentru fiecare nivel. Misiunea noastră este să te ajutăm să devii 
            cea mai bună versiune a ta.
          </p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3 className="feature-title">Echipamente Premium</h3>
              <p className="feature-text">Mașini de ultimă generație și greutăți libere profesionale</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3 className="feature-title">Antrenori Certificați</h3>
              <p className="feature-text">Experți calificați gata să te ghideze spre succes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Programe Personalizate</h3>
              <p className="feature-text">Planuri de antrenament adaptate obiectivelor tale</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3 className="feature-title">Program Flexibil</h3>
              <p className="feature-text">Deschis 7 zile pe săptămână, Lun-Vin: 09:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

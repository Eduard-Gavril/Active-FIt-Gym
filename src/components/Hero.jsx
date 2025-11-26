import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">EST. 2023</span>
          <h1 className="hero-title">
            TRANSFORMĂ-ȚI <span className="highlight">CORPUL</span>
          </h1>
          <h2 className="hero-subtitle">TRANSFORMĂ-ȚI VIAȚA</h2>
          <p className="hero-description">
            Atingeți-vă obiectivele de fitness cu cea mai bună sală de sport din oraș. 
            Echipamente de ultimă generație, antrenori profesioniști și o comunitate motivată.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Începe Astăzi</button>
            <button className="btn-secondary">Descoperă Mai Mult</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3 className="stat-number">250+</h3>
            <p className="stat-label">Membri Activi</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Antrenori Experți</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Cursuri Săptămânale</p>
          </div>
        </div>
      </div>
      <div className="hero-gradient-circle"></div>
    </section>
  );
};

export default Hero;

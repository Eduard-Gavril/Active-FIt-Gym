import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Sala de Greutăți",
      description: "Echipamente profesionale și zonă dedicată pentru antrenamente cu greutăți libere și mașini izotonice",
      features: ["Greutăți Libere", "Mașini Izotonice", "Rack-uri și Bănci", "Zonă Funcțională"]
    },
    {
      title: "Cursuri de Grup",
      description: "Varietate largă de cursuri pentru toate nivelurile, cu instructori calificați și motivanți",
      features: ["Spinning", "Pilates", "Yoga", "HIIT", "Zumba", "Box"]
    },
    {
      title: "Antrenament Personal",
      description: "Programe personalizate one-to-one cu antrenori certificați pentru rezultate garantate",
      features: ["Program Personalizat", "Monitorizare Constantă", "Nutriție", "Motivație"]
    },
    {
      title: "Zonă Cardio",
      description: "Zonă cardio completă cu cele mai bune echipamente pentru antrenamentul tău aerobic",
      features: ["Benzi de Alergare", "Biciclete", "Eliptice", "Vâsle"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">SERVICIILE NOASTRE</span>
          <h2 className="section-title">Tot Ce Ai Nevoie Pentru A <span className="highlight">Excela</span></h2>
          <p className="services-description">
            Oferim o gamă completă de servicii concepute pentru fiecare nevoie fitness
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button">Descoperă Mai Mult</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

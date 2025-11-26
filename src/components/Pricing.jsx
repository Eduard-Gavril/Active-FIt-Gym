import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    slidesToScroll: 1,
    startIndex: 4
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const plans = [
    {
      name: "Abonament Fitness",
      price: "200",
      features: [
        "Acces sala de greutăți",
        "Zonă cardio",
        "Vestiare și dușuri",
        "Wi-Fi gratuit"
      ],
      popular: false
    },
    {
      name: "Abonament Fitness (Elevi/Studenți)",
      price: "170",
      features: [
        "Acces sala de greutăți",
        "Zonă cardio",
        "Reducere specială pentru elevi/studenți",
        "Vestiare și dușuri"
      ],
      popular: false
    },
    {
      name: "Abonament Aerobic",
      price: "220",
      features: [
        "Acces la toate cursurile de aerobic",
        "Cursuri variate",
        "Instructori profesioniști",
        "Program flexibil"
      ],
      popular: false
    },
    {
      name: "Abonament Aerobic (Elevi/Studenți)",
      price: "190",
      features: [
        "Acces la toate cursurile de aerobic",
        "Reducere specială pentru elevi/studenți",
        "Instructori profesioniști",
        "Program flexibil"
      ],
      popular: false
    },
    {
      name: "Fitness + Aerobic",
      price: "280",
      features: [
        "Acces complet la sala de greutăți",
        "Acces la toate cursurile de aerobic",
        "Combinație perfectă pentru rezultate maxime",
        "Flexibilitate maximă"
      ],
      popular: true
    },
    {
      name: "Abonament EL+EA (Fitness + Aerobic)",
      price: "350",
      features: [
        "Acces nelimitat la fitness și aerobic",
        "Toate facilitățile incluse",
        "Planul cel mai complet",
        "Rezultate maxime garantate"
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <span className="section-badge">PLANURI ȘI PREȚURI</span>
          <h2 className="section-title">Alege-ți <span className="highlight">Planul</span></h2>
          <p className="pricing-description">
            Găsește abonamentul perfect pentru tine. Fără costuri ascunse, anulează oricând.
          </p>
        </div>

        <div className="embla">
          <button className="embla__button embla__button--prev" onClick={scrollPrev}>
            <span>‹</span>
          </button>
          
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {plans.map((plan, index) => (
                <div className="embla__slide" key={index}>
                  <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                    {plan.popular && <div className="popular-badge">CEL MAI POPULAR</div>}
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="currency">RON</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/lună</span>
                    </div>
                    <ul className="plan-features">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="plan-feature">
                          <span className="check-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
                      Începe Acum
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="embla__button embla__button--next" onClick={scrollNext}>
            <span>›</span>
          </button>
        </div>

        <div className="esx-partner-banner">
          <div className="esx-icon">🐵</div>
          <div className="esx-content">
            <h3 className="esx-title">Partner ESX</h3>
            <p className="esx-text">Ne găsești pe platforma ESX - Plătește-ți abonamentul rapid, sigur și convenabil online!</p>
          </div>
        </div>

        <div className="additional-pricing">
          <h3 className="additional-title">Opțiuni Suplimentare</h3>
          <div className="additional-grid">
            <div className="additional-item">
              <span className="additional-name">Ședință Fitness/Aerobic</span>
              <span className="additional-price">30 RON</span>
            </div>
            <div className="additional-item">
              <span className="additional-name">Abonament Personal Trainer</span>
              <span className="additional-detail">(Acces în sală: 12 ședințe cu antrenor)</span>
              <span className="additional-price">550 RON</span>
            </div>
            <div className="additional-item">
              <span className="additional-name">Abonament Personal Trainer</span>
              <span className="additional-detail">(Acces în sală: 12 ședințe cu antrenor - elevi/studenți)</span>
              <span className="additional-price">500 RON</span>
            </div>
            <div className="additional-item">
              <span className="additional-name">Ședință Personal Trainer</span>
              <span className="additional-price">80 RON</span>
            </div>
          </div>
        </div>

        <div className="pricing-note">
          <p>💳 Acceptăm toate principalele carduri de credit și transferuri bancare</p>
          <p>📞 Contactează-ne pentru mai multe detalii: 0744 868 777</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

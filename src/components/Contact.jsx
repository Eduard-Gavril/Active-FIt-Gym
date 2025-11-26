import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-badge">CONTACTEAZĂ-NE</span>
          <h2 className="section-title">Începe-ți <span className="highlight">Călătoria</span></h2>
          <p className="contact-description">
            Suntem aici pentru a te ajuta. Contactează-ne pentru o probă gratuită sau pentru mai multe informații.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Adresă</h3>
              <p className="info-text">Strada Buznei, Nr. 18<br/>București</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Telefon</h3>
              <p className="info-text">0744 868 777<br/>Lun-Mar: 09:00 - 22:00</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3 className="info-title">Program</h3>
              <p className="info-text">Lun-Vin: 09:00 - 22:00<br/>Sâm: 09:00 - 18:00<br/>Dum: 09:00 - 16:00 (Orario festivo)</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nume și Prenume" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Telefon" className="form-input" required />
            </div>
            <div className="form-group">
              <select className="form-input" required>
                <option value="">Selectează un serviciu</option>
                <option value="trial">Perioadă de Probă Gratuită</option>
                <option value="membership">Informații Abonament</option>
                <option value="personal">Antrenament Personal</option>
                <option value="other">Altele</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Mesajul tău" className="form-textarea" rows="5" required></textarea>
            </div>
            <button type="submit" className="form-button">Trimite Mesaj</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

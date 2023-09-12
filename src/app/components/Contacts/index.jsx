import "./styles.css";
function Contacts() {
  return (
    <section className="contact-container">
      <div className="contact">
        <div className="contact-left">
          <div className="map-image">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9056183904536!2d73.03266107613597!3d19.02388015360486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3b3d93cca45%3A0xa1c0a3d24133c53!2sPriyanka%20Hill%20View%20Residency!5e0!3m2!1sen!2sin!4v1694544258803!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-text">
            {" "}
            <p>Contacts</p>
            <div className="contact-yellowline"></div>
          </div>
          <div className="contact-address-container">
            <div className="contact-address-text">Address</div>
            <div className="address-list">
              <div className="contact-address">
                <strong>Reg-</strong> B-702, Hill View Residency CHS, Plot No.
                5/6, Sector- 30/32, CBD Belapur, Navi Mumbai- 400614
              </div>
              <div className="contact-address">
                <strong>Workshop- </strong>Plot No. 81/5, At- Wave, Po. Vadkhal,
                Tal. Pen, Raigad, Maharashtra- 402107
              </div>
            </div>
          </div>
          <div className="contact-timing">
            <div className="contact-timing-text">Opening Hours</div>
            <div className="contact-timing-list">
              <div>
                <p className="contact-timing-detail">Monday - Friday</p>
                <p className="contact-timing-detail">9am - 6pm</p>
              </div>
              <div>
                <p className="contact-timing-detail">Saturday and Sunday</p>
                <p className="contact-timing-detail">10am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contacts;

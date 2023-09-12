import "./styles.css";
import Image from "next/image";
import Map from "../../../../public/images/Map.png";
function Contacts() {
  return (
    <section className="contact-container">
      <div className="contact">
        <div className="contact-left">
          <Image src={Map} className="map-image" alt="Map of the location" />
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

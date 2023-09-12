import ServicesImg from "../../../../public/images/Services.jpg";
import "./styles.css";

function Services() {
  return (
    <section
      className="services-container"
      style={{
        backgroundImage: `url(${ServicesImg.src})`,
        width: "100%",
        height: "100%",
      }}
      id="Services"
    >
      <div className="services">
        <div className="services-top">
          <div className="yellowLine-services"></div>
          <div className="services-heading">Services</div>
          <div className="yellowLine-services"></div>
        </div>
        <div className="services-middle">
          <div>Our Services</div>
          <div>
            Torque Offers best repair services, spare parts and maintainance
            services. Here are some of the services we are famous for
          </div>
        </div>
        <div className="services-bottom">
          <div>
            <p>MARINE AND INDUSTRIAL WORKS</p>
            <p>One of the most popular services our engineers provide</p>
          </div>
          <div>
            <p>SHIP REPAIR WORKS</p>
            <p>Our Repair services will make your ship hail smoothly</p>
          </div>
          <div>
            <p>HYDRAULICS AND FABRICATION WORKS</p>
            <p>
              We assure Quality of fabrication using world class fabricators
            </p>
          </div>
          <div>
            <p>SPARE PART SUPPLIER</p>
            <p>We supply Spare parts of original manufacturer quality</p>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  );
}

export default Services;

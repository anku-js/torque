import ServicesImg from "../../../../public/images/Services.jpg";
import "./styles.css";
import { GiCargoShip, GiScubaTanks } from "react-icons/gi";
import { FaTools, FaShippingFast } from "react-icons/fa";
import {MdEngineering } from "react-icons/md";

import { Ultra, Stint_Ultra_Expanded } from "next/font/google";

export const ultra = Ultra({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ultra",
});
export const stintUltra = Stint_Ultra_Expanded({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-stintUltra",
});

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
          <div className="services-heading">SERVICES</div>
          <div className="yellowLine-services"></div>
        </div>
        <div className="services-middle">
          <div className="our-services">Our Services</div>
          <div className="services-summary">
            Torque Offers best repair services, spare parts and maintainance
            services. Here are some of the services we are famous for
          </div>
        </div>
        <div className="services-bottom">
          <div className="services-list">
            <GiCargoShip className="service-icon" />
            <p className="service-name">MARINE AND INDUSTRIAL WORKS</p>
            <p className="service-description">
              One of the most popular services our engineers provide
            </p>
          </div>
          <div className="services-list">
            <FaTools className="service-icon" />
            <p className="service-name">SHIP REPAIR WORKS</p>
            <p className="service-description">
              Our Repair services will make your ship hail smoothly
            </p>
          </div>
          <div className="services-list">
            <MdEngineering className="service-icon" />
            <p className="service-name">HYDRAULICS AND FABRICATION WORKS</p>
            <p className="service-description">
              We assure Quality of fabrication using world class fabricators
            </p>
          </div>
          <div className="services-list">
            <FaShippingFast className="service-icon" />
            <p className="service-name">SPARE PART SUPPLIER</p>
            <p className="service-description">
              We supply Spare parts of original manufacturer quality
            </p>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  );
}

export default Services;

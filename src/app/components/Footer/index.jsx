import "./styles.css";
import Image from "next/image";
import Logo from "../../../../public/images/Logo.png";
import { FaFacebookSquare, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <footer id="Footer" className="footer-container">
      <div className="footer-top">
        <Image
          src={Logo}
          className="footer-logo"
          alt="Logo of the company- Torque"
        />
      </div>
      <div className="footer-middle">
        <p className="footer-compName">Torque - Engineering Works Pvt Ltd</p>
        <p className="footer-compSummary">
          Torque is the best place for your repair works done. You can get
          hasslefree services at a reasonable price
        </p>
        <div className="footer-navigation-buttons">
          <a href="#About">About</a>
          <a href="#Services">Services</a>
          <a href="#Enquiry">Enquiry</a>
          <a href="#Contacts">Contacts</a>
        </div>
      </div>
      <div className="footer-icons">
        <a>
          <FaFacebookSquare className="footer-icon" />
        </a>
        <a>
          <FaMobileAlt className="footer-icon" />
        </a>
        <a>
          <GrMail className="footer-icon" />
        </a>
        <a>
          <FaMapMarkerAlt className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;

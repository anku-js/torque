import Image from "next/image";
import AboutImg from "../../../public/images/About-img.jpg";
function About() {
  return (
    <section className="about-container">
      <div className="about-left">
        <Image src={AboutImg} className="about-image" alt="A hand holding a screw upwards" />
      </div>
      <div className="about-right">
        <div className="about">
          {" "}
          <span>About</span>
          <p>.</p>
        </div>
        <div className="about-name">Torque - Engineering Works Pvt Ltd</div>
        <div className="about-info">
          Torque Engineering Works Pvt Ltd provides the best Sales Service and Support in case of Marine & Industrial Works which includes Ship Repair Hydraulics & All types of Grab works. We also supply the spare parts. Our serices are available 24 * 7.
        </div>
      </div>
    </section>
  );
}

export default About;

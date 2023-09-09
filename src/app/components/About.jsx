import Image from "next/image";
import AboutImg from "../../../public/images/About-img.jpg";
function About() {
  return (
    <section className="about-container">
      <div className="about-left">
        <Image src={AboutImg} className="about-image" />
      </div>
      <div className="about-right">
        <div className="about">
          {" "}
          <span>About</span>
          <p>s</p>
        </div>
        <div className="about-name">Torque Engineering Works Pvt Ltd</div>
        <div className="about-info">
          Torque Engineering Works Pvt Ltd provides the best Sales Service and Support in case of Marine & Industrial Works
        </div>
      </div>
    </section>
  );
}

export default About;

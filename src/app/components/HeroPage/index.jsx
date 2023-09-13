"use client";
import Bg from "../../../../public/images/heropage.jpg";
import { GiShipWheel } from "react-icons/gi";
import "./styles.css";
import { Typewriter } from "react-simple-typewriter";

function HeroPage() {
  return (
    <section
      id="Heropage"
      className="heroPage-container"
      style={{
        backgroundImage: `url(${Bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="heroPage">
        <div className="heroPage-top">
          <GiShipWheel className="shipWheel" />
          <p className="callout-text">THE BEST</p>
        </div>
        <div className="heroPage-tagline">
          Sales Service <br />
          and Support
        </div>
        <div className="heroPage-yellowLine"></div>
        <div id="heroPage-summary" className="heroPage-summary">
          <span style={{ fontWeight: "bold", color: "white" }}>
            <Typewriter
              words={[
                "Welcome to Torque Engineering Works Pvt Ltd , your trusted partner in maritime excellence. Our experienced team of engineers are dedicated to offer a comprehensive range of services to keep your ships sailing smoothly. We also provide spare parts.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              // delaySpeed={1000}
            />
          </span>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default HeroPage;

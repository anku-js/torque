import Bg from "../../../public/images/heropage.jpg";
import { GiShipWheel } from "react-icons/gi";

function HeroPage() {
  return (
    <section
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
        <div className="heroPage-tagline">Sales Service <br />and Support</div>
        <div className="heroPage-yellowLine"></div>
        <div  className="heroPage-summary">
          Welcome to Torque Engineering Works Pvt Ltd , your trusted partner in
          maritime excellence. Our experienced team of
          engineers are dedicated to offer a
          comprehensive range of services to keep your ships sailing smoothly.
          We also provide spare parts.
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default HeroPage;

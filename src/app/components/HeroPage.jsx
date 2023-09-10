import Image from "next/image";
import Bg from "../../../public/images/HeroPage-img3.jpg";
import Engineer from "../../../public/images/eng.png"
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
        <div className="heroPage-tagline">
          Providing the best Sales Service and Support.
        </div>
        <div className="heroPage-tagline available">Available 24*7</div>
      </div>
    </section>
  );
}

export default HeroPage;
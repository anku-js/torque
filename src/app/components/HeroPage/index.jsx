"use client";
import React, { useEffect, useRef } from "react";
import Bg from "../../../../public/images/heropage.jpg";
import { GiShipWheel } from "react-icons/gi";
import "./styles.css";
// import { Typewriter } from "react-simple-typewriter";
import Typewriter from "typewriter-effect";

function HeroPage() {
  var typewriter = new Typewriter("#heroPage-summary", {
    loop: true,
    delay: 75,
  });
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
          Welcome to Torque Engineering Works Pvt Ltd , your trusted partner in
          <Typewriter
            options={{
              strings: [
                "Industrial works",
                "maritime excellence",
                "Grab works",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 0,
              wrapperClassName: "typewriter",
            }}
          />
          . Our experienced team of engineers are dedicated to offer a
          comprehensive range of services to keep your ships sailing smoothly.
          We also provide spare parts.
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default HeroPage;

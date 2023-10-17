"use client";
import { GiShipWheel } from "react-icons/gi";
import "./styles.css";
import Typewriter from "typewriter-effect";

function HeroPage() {
  return (
    <section
      id="Heropage"
      className="heroPage-container"
      style={{
        background: "#363636",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="heroPage">
        <div class="wrapper">
          <div class="carousel" tabindex="0">
            <div class="slide">
              <a href="#item-4"></a>
              <img
                id="item-1"
                src="./images/heroPage1.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-2"></a>
            </div>
            <div class="slide">
              <a href="#item-1"></a>
              <img
                id="item-2"
                src="./images/heroPage2.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-3"></a>
            </div>
            <div class="slide">
              <a href="#item-2"></a>
              <img
                id="item-3"
                src="./images/heroPage3.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-4"></a>
            </div>
            <div class="slide">
              <a href="#item-3"></a>
              <img
                id="item-4"
                src="./images/heroPage4.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-5"></a>
            </div>
            <div class="slide">
              <a href="#item-4"></a>
              <img
                id="item-5"
                src="./images/heroPage5.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-6"></a>
            </div>
            <div class="slide">
              <a href="#item-5"></a>
              <img
                id="item-6"
                src="./images/heroPage6.jpg"
                className="corousel_img"
                alt=""
              />
              {/* <div className="overlayImg"></div> */}
              <a href="#item-1"></a>
            </div>
          </div>
          <nav class="carousel__nav">
            <ul>
              <li>
                <a href="#item-1" aria-label="Item 1">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-2" aria-label="Item 2">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-3" aria-label="Item 3">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-3" aria-label="Item 3">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-3" aria-label="Item 3">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-4" aria-label="Item 4">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="heroPage-text">
          {" "}
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
            Welcome to Torque Engineering Works Pvt Ltd , your trusted partner
            in
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
            Our experienced team of engineers are dedicated to offer a
            comprehensive range of services to keep your ships sailing smoothly.
            We also provide spare parts.
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;

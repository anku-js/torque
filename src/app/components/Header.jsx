import Image from "next/image";
import Logo from "../../../public/images/Logo.png";

function Header() {
  return (
    <header>
      <div id="Header" className="header-container">
        <div className="navOptions-left">
          <a href="#About" className="navbar-button">
            About
          </a>
          <a href="#Services" className="navbar-button">
            Services
          </a>
        </div>
        <a href="#Header">
          <Image src={Logo} className="header-logo" alt="Logo of the company" />
        </a>
        <div className="navOptions-left">
          <a href="#Enquire" className="navbar-button">
            Enquire
          </a>
          <a href="#Contacts" className="navbar-button">
            Contact
          </a>
        </div>
      </div>
      {/* <div> */}
      <section className="top-nav">
        <div>
          {" "}
          <a href="#Header">
            <Image
              src={Logo}
              className="header-logo-mobile"
              alt="Logo of the company"
            />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Enquire">Enquire</a>
          </li>
          <li>
            <a href="#Contacts">Contact</a>
          </li>
        </ul>
      </section>
      {/* </div> */}
    </header>
  );
}

export default Header;

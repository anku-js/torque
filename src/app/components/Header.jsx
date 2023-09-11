import Image from "next/image";
import Logo from "../../../public/images/transparentLogo.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="navOptions-left">
          <a className="navbar-button">About</a>
          <a className="navbar-button">Services</a>
        </div>
        <Image src={Logo} className="header-logo" alt="Logo of the company" />
        <div className="navOptions-left">
          <a className="navbar-button">Enquire</a>
          <a className="navbar-button">Contact</a>
        </div>
      </div>
      {/* <div> */}
      <section className="top-nav">
        <div>
          {" "}
          <Image
            src={Logo}
            className="header-logo-mobile"
            alt="Logo of the company"
          />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>About</li>
          <li>Services</li>
          <li>Enquire</li>
          <li>Contact</li>
        </ul>
      </section>
      {/* </div> */}
    </header>
  );
}

export default Header;

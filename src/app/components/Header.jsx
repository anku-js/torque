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
      <section class="top-nav">
        <div>
          {" "}
          <Image src={Logo} className="header-logo-mobile" alt="Logo of the company" />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
      {/* </div> */}
    </header>
  );
}

export default Header;

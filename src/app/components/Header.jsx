import Image from "next/image";
import Logo from "../../../public/images/Logo.jpg";



function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="navOptions-left">
          <a className="navbar-button">About</a>
          <a className="navbar-button">Services</a>
        </div>
        <Image src={Logo} className="header-logo" />
        <div className="navOptions-left">
          <a className="navbar-button">Enquire</a>
          <a className="navbar-button">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

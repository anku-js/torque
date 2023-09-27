import "./globals.css";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Services from "./components/Services";
import Enquiry from "./components/Enquire";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <About />
      <Services />
      <Enquiry />
      <Contact />
      <Footer />
    </div>
  );
}

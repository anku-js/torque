import "./globals.css";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Enquiry from "./components/Enquiry";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <About />
      <Services />
      <Enquiry />
      <Footer />
    </div>
  );
}

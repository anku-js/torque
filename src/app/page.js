import Image from "next/image";
import "./globals.css";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <About />
      <Contact /> 
      {/* <Loader /> */}
    </div>
  );
}

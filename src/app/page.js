import Image from "next/image";
import "./globals.css"
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <About />
    </div>
  );
}

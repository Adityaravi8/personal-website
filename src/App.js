import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false, mirror: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-[#1c1c2e] text-[#e2e8f0]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

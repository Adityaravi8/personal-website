import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

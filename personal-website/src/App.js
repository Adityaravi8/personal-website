import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

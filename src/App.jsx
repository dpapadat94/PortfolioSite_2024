import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const openResume = () => {
    window.open("/DP-Resume.pdf", "_blank");
  };

  return (
    <div>
      <NavBar />
      <Home handleResume={openResume} />
      <About />
      <Work />
      <Skills />
      <Contact handleResume={openResume} />
    </div>
  );
}

export default App;

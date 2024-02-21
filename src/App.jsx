import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;

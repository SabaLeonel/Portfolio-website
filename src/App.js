import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div className="pb-12 bg-body">
      <NavBar />
      <Home />
      <SocialLinks />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default App;
